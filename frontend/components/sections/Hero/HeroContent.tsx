"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="relative z-20 max-w-3xl">
      <span className="mb-4 block text-xs font-medium uppercase tracking-[8px] text-[#D9B26F]">
        {t.hero.label}
      </span>

      <h1 className="hero-title">
        <span>{t.hero.title1}</span>
        <span className="second">{t.hero.title2}</span>
        <span className="third">{t.hero.title3}</span>
      </h1>

      <p className="mt-6 max-w-md text-base leading-7 text-white/75">
        {t.hero.description}
      </p>
    </div>
  );
}