#!/usr/bin/env python3
"""
Indexación push dual · Google Indexing API + IndexNow
======================================================

Re-crawl push para Google + Bing/Yandex/Seznam/Naver/Cloudflare en una sola pasada.
Funciona en local (lee credenciales de archivos) y en CI (lee de env vars).

USO LOCAL:
    python3 scripts/seo/push_indexing.py                    # batch URLs prioritarias hardcoded
    python3 scripts/seo/push_indexing.py URL1 URL2 ...      # URLs específicas via CLI

USO CI (GitHub Actions, etc.):
    Exportar GSC_KEY_JSON (string JSON completo) y INDEXNOW_KEY (32 hex chars).

REQUISITOS LOCALES:
    - gsc_value.txt    en {PROJECT_ROOT}/gsc_value.txt (service account JSON)
    - indexnow_key.txt en {PROJECT_ROOT}/indexnow_key.txt (32-char hex UUID sin guiones)
    - El archivo <indexnow_key>.txt subido a la raíz pública del sitio (handshake)
    - pip install google-api-python-client google-auth

CUOTAS:
    - Google: 200 URLs/día por proyecto Cloud
    - IndexNow: 10.000 URLs/día/host (un batch puede tener hasta 10k)

GOTCHAS comunes:
    - Google 403 PERMISSION_DENIED → la service account NO está añadida como "Propietario"
      en Search Console (Settings → Users) · "User completo" NO basta.
    - IndexNow 403 → handshake .txt en raíz devuelve 404 o contenido no coincide con la key.
    - IndexNow 422 → alguna URL del batch no pertenece al host declarado.
"""
import json
import os
import sys
from pathlib import Path
import urllib.request
import urllib.parse
import urllib.error

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# ───────────────────────────── Config ─────────────────────────────
HOST = "aventuraenelsella.es"
PROJECT_ROOT = Path(__file__).resolve().parents[4]  # /scripts/seo/ → root
GSC_KEY_FILE = PROJECT_ROOT / "gsc_value.txt"
INDEXNOW_KEY_FILE = PROJECT_ROOT / "indexnow_key.txt"


def load_gsc_credentials():
    """Carga GSC service account · primero env var GSC_KEY_JSON (CI), luego archivo local."""
    if env := os.environ.get("GSC_KEY_JSON"):
        info = json.loads(env)
        return service_account.Credentials.from_service_account_info(
            info, scopes=["https://www.googleapis.com/auth/indexing"]
        )
    if GSC_KEY_FILE.exists():
        return service_account.Credentials.from_service_account_file(
            str(GSC_KEY_FILE), scopes=["https://www.googleapis.com/auth/indexing"]
        )
    raise FileNotFoundError(
        f"Sin GSC creds: define env GSC_KEY_JSON o crea {GSC_KEY_FILE}"
    )


def load_indexnow_key() -> str:
    """Carga IndexNow key · primero env var INDEXNOW_KEY (CI), luego archivo local."""
    if env := os.environ.get("INDEXNOW_KEY"):
        return env.strip()
    if INDEXNOW_KEY_FILE.exists():
        return INDEXNOW_KEY_FILE.read_text().strip()
    raise FileNotFoundError(
        f"Sin IndexNow key: define env INDEXNOW_KEY o crea {INDEXNOW_KEY_FILE}"
    )

# URLs prioritarias por defecto (override pasando args)
DEFAULT_URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/en/",
    f"https://{HOST}/fr/",
    f"https://{HOST}/pt/",
    f"https://{HOST}/reservar/",
    f"https://{HOST}/precios/",
    f"https://{HOST}/recorrido-y-mapa/",
    f"https://{HOST}/con-ninos/",
    f"https://{HOST}/con-perro/",
    f"https://{HOST}/reserva-premium/",
    f"https://{HOST}/descenso-internacional-del-sella/",
    f"https://{HOST}/quienes-somos/",
    f"https://{HOST}/opiniones/",
    f"https://{HOST}/contacto/",
    f"https://{HOST}/como-llegar/",
    f"https://{HOST}/mejor-epoca/",
    f"https://{HOST}/cuanto-dura/",
    f"https://{HOST}/blog/",
    f"https://{HOST}/blog/cansa-descenso-sella/",
    f"https://{HOST}/blog/chiringuitos-descenso-sella/",
    f"https://{HOST}/blog/descenso-sella-con-ninos-pequenos/",
    f"https://{HOST}/blog/descenso-sella-grupos-despedidas/",
    f"https://{HOST}/blog/donde-alojarse-cerca-descenso-sella/",
    f"https://{HOST}/blog/historia-descenso-sella/",
    f"https://{HOST}/blog/mejor-hora-descenso-sella/",
    f"https://{HOST}/blog/pozo-del-arco-sella/",
    f"https://{HOST}/blog/que-hacer-despues-descenso-sella-ribadesella/",
    f"https://{HOST}/blog/que-llevar-al-descenso-del-sella/",
]


def push_indexnow(urls: list[str], key: str) -> None:
    """POST batch a IndexNow · cubre Bing + Yandex + Seznam + Naver + Cloudflare."""
    print(f"\n[IndexNow] Enviando {len(urls)} URLs a api.indexnow.org…")
    body = {
        "host": HOST,
        "key": key,
        "keyLocation": f"https://{HOST}/{key}.txt",
        "urlList": urls,
    }
    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(body).encode("utf-8"),
        method="POST",
        headers={"Content-Type": "application/json; charset=utf-8"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f"  HTTP {r.status} · OK · cubre Bing/Yandex/Seznam/Naver/Cloudflare")
    except urllib.error.HTTPError as e:
        body_err = e.read().decode("utf-8", errors="replace")[:300]
        print(f"  HTTP {e.code} · {body_err}")
        if e.code == 403:
            print(f"  ⚠ Verifica handshake: https://{HOST}/{key}.txt debe responder 200 con contenido={key}")


def push_google_indexing(urls: list[str]) -> None:
    """Publish individual URLs · Google Indexing API · service account debe ser siteOwner en GSC."""
    print(f"\n[Google Indexing] Notificando {len(urls)} URLs (cuota 200/día/proyecto)…")
    creds = load_gsc_credentials()
    idx = build("indexing", "v3", credentials=creds)
    ok = 0
    fail = 0
    for u in urls:
        try:
            idx.urlNotifications().publish(
                body={"url": u, "type": "URL_UPDATED"}
            ).execute()
            ok += 1
        except HttpError as e:
            fail += 1
            try:
                err = json.loads(e.content)
                msg = err.get("error", {}).get("message", e.reason)[:120]
                print(f"  ✗ {u}: {e.status_code} · {msg}")
                if e.status_code == 403:
                    print("    ⚠ Service account NO es siteOwner en Search Console (Settings → Users → Propietario).")
            except Exception:
                print(f"  ✗ {u}: {e.status_code}")
    print(f"  ✓ {ok}/{len(urls)} pings OK · {fail} fallos")


def main() -> int:
    urls = sys.argv[1:] if len(sys.argv) > 1 else DEFAULT_URLS
    print(f"=== Indexación push · {len(urls)} URLs ===")
    try:
        indexnow_key = load_indexnow_key()
    except FileNotFoundError as e:
        print(f"ERROR: {e}")
        return 1
    push_indexnow(urls, indexnow_key)
    try:
        push_google_indexing(urls)
    except FileNotFoundError as e:
        print(f"ERROR: {e}")
        return 1
    print("\n=== Fin ===")
    return 0


if __name__ == "__main__":
    sys.exit(main())
