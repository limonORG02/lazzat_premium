import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from services.telegram import send_telegram_message


load_dotenv()

app = FastAPI(
    title="Lazzat Premium API",
    description="Backend для сайта Lazzat Premium",
    version="1.1.0",
)

frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=3, max_length=50)
    email: str | None = Field(default=None, max_length=255)
    message: str = Field(..., min_length=1, max_length=2000)


@app.get("/")
def root():
    return {
        "status": "ok",
        "message": "Lazzat Premium API работает",
    }


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/api/contact")
def contact(request: ContactRequest):
    print("\n==============================")
    print("НОВАЯ ЗАЯВКА")
    print("==============================")
    print(f"Имя: {request.name}")
    print(f"Телефон: {request.phone}")
    print(f"Email: {request.email or 'Не указан'}")
    print(f"Сообщение: {request.message}")
    print("==============================\n")

    telegram_message = (
        "🔔 НОВАЯ ЗАЯВКА С САЙТА LAZZAT PREMIUM\n\n"
        f"👤 Имя: {request.name}\n"
        f"📞 Телефон: {request.phone}\n"
        f"📧 Email: {request.email or 'Не указан'}\n\n"
        f"💬 Сообщение:\n{request.message}"
    )

    try:
        telegram_sent = send_telegram_message(telegram_message)
    except Exception as error:
        print("❌ Ошибка backend:", repr(error))
        raise HTTPException(
            status_code=500,
            detail="Не удалось обработать заявку на сервере.",
        ) from error

    if not telegram_sent:
        raise HTTPException(
            status_code=503,
            detail="Заявка не отправлена. Сервис уведомлений временно недоступен.",
        )

    return {
        "success": True,
        "message": "Заявка успешно получена",
        "telegram_sent": True,
    }
