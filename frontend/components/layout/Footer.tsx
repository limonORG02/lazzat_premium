"use client";
/** @jsxRuntime classic */
/** @jsx React.createElement */

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#04070D]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
          <a
            href="https://t.me/lazzatuzbekistan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#D9B26F]"
          >
            {t.footer.telegram}
          </a>

          <a
            href="https://www.instagram.com/lazzatuzbekistan?igsh=MWwwYWt6bTl4bGNmNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#D9B26F]"
          >
            {t.footer.instagram}
          </a>

          <a
            href="https://wa.me/998994063000"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#D9B26F]"
          >
            {t.footer.whatsapp}
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-xs text-white/35">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}