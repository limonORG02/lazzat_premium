"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || null,
          message: message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : "Ошибка отправки заявки"
        );
      }

      setStatus("Заявка успешно отправлена!");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setStatus(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте ещё раз."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050910] py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,120,255,.15),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <span className="block text-center text-sm uppercase tracking-[8px] text-[#D9B26F]">
            {t.contact.label}
          </span>

          <h2 className="mt-5 text-center text-4xl font-black text-white lg:text-5xl">
            {t.contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-center leading-8 text-white/60">
            {t.contact.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`👤 ${t.contact.name}`}
              required
              maxLength={100}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#D9B26F]"
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={`📞 ${t.contact.phone}`}
              required
              maxLength={50}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#D9B26F]"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`✉️ ${t.contact.email}`}
              maxLength={255}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#D9B26F]"
            />

            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`💬 ${t.contact.message}`}
              required
              maxLength={2000}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#D9B26F]"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-2xl bg-[#D9B26F] py-4 text-lg font-semibold text-black transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Отправка..." : t.contact.button}
            </button>

            {status && (
              <p className="text-center text-sm text-white/70" role="status">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
