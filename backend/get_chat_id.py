import os
import requests
from dotenv import load_dotenv

load_dotenv()

token = os.getenv("TELEGRAM_BOT_TOKEN")

if not token:
    print("Ошибка: TELEGRAM_BOT_TOKEN не найден в .env")
    exit()

url = f"https://api.telegram.org/bot{token}/getUpdates"

response = requests.get(url)

print("Статус:", response.status_code)
print(response.json())