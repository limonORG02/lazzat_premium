# Lazzat Premium: запуск и перенос на сервер

## Backend

1. Скопировать `backend/.env.example` в `backend/.env`.
2. Указать новый Telegram Bot Token и Chat ID.
3. Установить Python 3.11+ и зависимости:

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
# Linux: source .venv/bin/activate
pip install -r requirements.txt
python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

Проверка: `GET http://SERVER_IP:8000/health` должен вернуть `{"status":"ok"}`.

## Frontend

1. Скопировать `frontend/.env.example` в `frontend/.env.local` для локального запуска или в `.env.production`/переменные окружения сервера.
2. Для production указать:

```env
BACKEND_URL=http://127.0.0.1:8000
```

Если backend и frontend находятся на одном сервере, оставляем `127.0.0.1`.

3. Установить Node.js 20.9+ и собрать:

```bash
cd frontend
npm ci
npm run build
npm run start
```

Форма сайта обращается к `/api/contact`, а Next.js проксирует запрос на backend. Telegram-токен никогда не попадает во frontend.

## Важно

Не публиковать `backend/.env`. В архиве он содержит только шаблонные значения. Перед запуском на сервере обязательно заменить их на реальные значения.
