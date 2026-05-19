#!/usr/bin/env python3
"""
Verifica estado de indexación de URLs en Google + Bing
======================================================

Reporta verdict / coverage / lastCrawl para cada URL principal.
Útil para correr 24-48h después de push_indexing.py y verificar que Google las indexó.

USO:
    python3 scripts/seo/check_indexing.py
"""
import json
import sys
from pathlib import Path
import urllib.request
import urllib.parse

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

PROJECT_ROOT = Path(__file__).resolve().parents[4]
GSC_KEY_FILE = PROJECT_ROOT / "gsc_value.txt"
BING_KEY_FILE = PROJECT_ROOT / "ejemplos web" / "bing_api_key.txt"

SITE_SC = "sc-domain:aventuraenelsella.es"
HOST = "aventuraenelsella.es"

URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/reservar/",
    f"https://{HOST}/precios/",
    f"https://{HOST}/recorrido-y-mapa/",
    f"https://{HOST}/con-ninos/",
    f"https://{HOST}/con-perro/",
    f"https://{HOST}/reserva-premium/",
    f"https://{HOST}/descenso-internacional-del-sella/",
    f"https://{HOST}/quienes-somos/",
    f"https://{HOST}/blog/",
    f"https://{HOST}/en/",
    f"https://{HOST}/fr/",
    f"https://{HOST}/pt/",
]


def check_gsc():
    creds = service_account.Credentials.from_service_account_file(
        str(GSC_KEY_FILE),
        scopes=["https://www.googleapis.com/auth/webmasters"],
    )
    sc = build("searchconsole", "v1", credentials=creds)
    print("=== Google · URL Inspection ===")
    for u in URLS:
        try:
            r = sc.urlInspection().index().inspect(
                body={"inspectionUrl": u, "siteUrl": SITE_SC}
            ).execute()
            idx = r.get("inspectionResult", {}).get("indexStatusResult", {})
            print(f"  {u}")
            print(
                f"    verdict={idx.get('verdict','?')}  "
                f"coverage={idx.get('coverageState','?')[:55]}  "
                f"lastCrawl={idx.get('lastCrawlTime','-')}"
            )
        except HttpError as e:
            print(f"  {u}: ERROR {e.status_code}")


def check_bing():
    if not BING_KEY_FILE.exists():
        print("\n[Bing] sin API key, salto")
        return
    api_key = BING_KEY_FILE.read_text().strip()
    print("\n=== Bing · URL Info ===")
    for u in URLS:
        params = urllib.parse.urlencode({"apikey": api_key, "siteUrl": f"https://{HOST}", "url": u})
        url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlInfo?{params}"
        try:
            with urllib.request.urlopen(url, timeout=20) as r:
                d = json.loads(r.read().decode("utf-8")).get("d", {})
                if d:
                    print(f"  {u}")
                    print(
                        f"    LastCrawled: {d.get('LastCrawledDate','-')}  "
                        f"HttpStatus: {d.get('HttpStatus')}  "
                        f"DocSize: {d.get('DocumentSize',0)}"
                    )
                else:
                    print(f"  {u}: aún no crawleada")
        except Exception as e:
            print(f"  {u}: ERROR {e}")


if __name__ == "__main__":
    check_gsc()
    check_bing()
