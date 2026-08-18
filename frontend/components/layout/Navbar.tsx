"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      title: t.navbar.home,
      href: "#hero",
    },
    {
      title: t.navbar.products,
      href: "#products",
    },
    {
      title: t.navbar.about,
      href: "#about",
    },
    {
      title: t.navbar.contact,
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "top-4 bg-black/50 backdrop-blur-xl"
          : "top-0 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Lazzat"
        >
          <Image
            src="/logo/logo.png"
            alt="Lazzat"
            width={58}
            height={58}
            priority
          />

          <span className="text-2xl font-bold text-[#D9B26F]">
            Lazzat
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className={`hidden items-center gap-8 transition-all duration-500 lg:flex ${
            scrolled
              ? "pointer-events-none -translate-y-5 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white transition hover:text-[#D9B26F]"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Language */}
          <select
            value={language}
            onChange={(event) =>
              setLanguage(
                event.target.value as "uz" | "ru" | "en"
              )
            }
            aria-label="Language"
            className="rounded-full border border-[#D9B26F] bg-transparent px-4 py-2 text-sm text-[#D9B26F] outline-none transition hover:bg-[#D9B26F] hover:text-black"
          >
            <option value="uz" className="text-black">
              UZ
            </option>

            <option value="ru" className="text-black">
              RU
            </option>

            <option value="en" className="text-black">
              ENG
            </option>
          </select>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/lazzatuzbekistan?igsh=MWwwYWt6bTl4bGNmNg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#D9B26F] transition hover:text-white"
          >
            <FaInstagram size={22} />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/lazzatuzbekistanfactory"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-[#D9B26F] transition hover:text-white"
          >
            <FaTelegramPlane size={22} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/998994063000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#D9B26F] transition hover:text-white"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
    </header>
  );
}