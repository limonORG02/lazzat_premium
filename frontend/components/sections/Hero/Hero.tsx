"use client";

import VideoBackground from "./VideoBackground";
import HeroContent from "./HeroContent";
import ProductDisplay from "./ProductDisplay";
import ScrollIndicator from "./ScrollIndicator";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Видео */}
      <VideoBackground />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Пузырьки */}
      <FloatingParticles />

      {/* Контент */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center justify-between px-8">
        <HeroContent />

        <ProductDisplay />
      </div>

      {/* Индикатор скролла */}
      <ScrollIndicator />
    </section>
  );
}
