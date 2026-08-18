import os
from pathlib import Path

import requests
from dotenv import load_dotenv


load_dotenv(Path(__file__).resolve().parents[1] / ".env")

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")


def send_telegram_message(message: str) -> bool:
    if not TELEGRAM_BOT_TOKEN or TELEGRAM_BOT_TOKEN == "PUT_NEW_BOT_TOKEN_HERE":
        print("❌ TELEGRAM_BOT_TOKEN не настроен")
        return False

    if not TELEGRAM_CHAT_ID or TELEGRAM_CHAT_ID == "PUT_CHAT_ID_HERE":
        print("❌ TELEGRAM_CHAT_ID не настроен")
        return False

    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"

    try:
        response = requests.post(
            url,
            json={"chat_id": TELEGRAM_CHAT_ID, "text": message},
            timeout=10,
        )
        data = response.json()

        if response.ok and data.get("ok") is True:
            print("✅ Telegram: сообщение отправлено")
            return True

        print(
            "❌ Telegram API error:",
            data.get("description", f"HTTP {response.status_code}"),
        )
        return False

    except (requests.RequestException, ValueError) as error:
        print("❌ Ошибка подключения к Telegram:", repr(error))
        return False
