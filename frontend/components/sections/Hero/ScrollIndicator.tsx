"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ScrollIndicator() {
  const { t } = useLanguage();

  return (
    <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
      <div className="flex flex-col items-center">
        <span className="text-xs uppercase tracking-[4px] text-white/60">
          {t.hero.scroll}
        </span>

        <div className="mt-2 h-12 w-[2px] bg-white/20">
          <div className="h-5 animate-pulse bg-[#D9B26F]" />
        </div>
      </div>
    </div>
  );
}