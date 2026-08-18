"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const productMedia = [
  {
    id: 1,
    color: "#8BCF3F",
    image: "/images/products/melon.webp",
    video: "/videos/melon.mp4",
  },
  {
    id: 2,
    color: "#35D4C8",
    image: "/images/products/moxito.webp",
    video: "/videos/moxito.mp4",
  },
  {
    id: 3,
    color: "#D93A4D",
    image: "/images/products/anor.webp",
    video: "/videos/anor.mp4",
  },
  {
    id: 4,
    color: "#E2B650",
    image: "/images/products/joxori.webp",
    video: "/videos/joxori.mp4",
  },
  {
    id: 5,
    color: "#49B8FF",
    image: "/images/products/suv.webp",
    video: "/videos/water.mp4",
  },
];

export default function ProductShowcase() {
  const { t } = useLanguage();

  const [activeId, setActiveId] = useState(1);

  const activeIndex = activeId - 1;
  const activeProduct = t.products.items[activeIndex];
  const activeMedia = productMedia[activeIndex];

  if (!activeProduct || !activeMedia) {
    return null;
  }

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#05070F] py-28"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          background: `radial-gradient(circle at center, ${activeMedia.color}33 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-16 text-center text-5xl font-black text-white">
          {t.products.title}
        </h2>

        {/* Product Tabs */}
        <div className="mb-20 flex flex-wrap justify-center gap-5">
          {t.products.items.map((product, index) => {
            const media = productMedia[index];
            const productId = index + 1;
            const isActive = activeId === productId;

            return (
              <motion.button
                key={product.key}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveId(productId)}
                className={`rounded-full border px-8 py-3 font-bold transition-all duration-300 ${
                  isActive
                    ? "border-transparent text-black"
                    : "border-white/20 text-white hover:border-white"
                }`}
                style={{
                  background: isActive
                    ? media.color
                    : "transparent",
                }}
              >
                {product.name}
              </motion.button>
            );
          })}
        </div>

        {/* Product Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT — Video + Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${activeId}`}
              initial={{
                opacity: 0,
                x: -70,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: 70,
                filter: "blur(12px)",
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="space-y-8"
            >
              {/* Video */}
              <div className="relative overflow-hidden rounded-[28px]">
                <motion.div
                  animate={{
                    background: `radial-gradient(circle at center, ${activeMedia.color}35, transparent 70%)`,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute -inset-10 blur-3xl"
                />

                <video
                  key={activeMedia.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative z-10 aspect-video w-full rounded-[28px] object-cover"
                >
                  <source
                    src={activeMedia.video}
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Text */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xs font-semibold uppercase tracking-[6px] text-white/40"
                >
                  Lazzat Premium
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-4 text-5xl font-black uppercase md:text-6xl"
                  style={{
                    color: activeMedia.color,
                  }}
                >
                  {activeProduct.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 text-xl font-medium text-white md:text-2xl"
                >
                  {activeProduct.title}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-6 max-w-xl text-base leading-8 text-white/60"
                >
                  {activeProduct.description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT — Product Image */}
          <div className="relative flex min-h-[620px] items-center justify-center">
            {/* Large Glow */}
            <motion.div
              animate={{
                backgroundColor: activeMedia.color,
                scale: [1, 1.12, 1],
              }}
              transition={{
                backgroundColor: {
                  duration: 0.6,
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute h-[330px] w-[330px] rounded-full opacity-25 blur-[110px] md:h-[430px] md:w-[430px]"
            />

            {/* Light Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-white/10 md:h-[500px] md:w-[500px]"
            />

            {/* Product */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`product-${activeId}`}
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.7,
                  rotate: -12,
                  filter: "blur(20px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -80,
                  scale: 0.75,
                  rotate: 12,
                  filter: "blur(20px)",
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-20"
              >
                <motion.div
                  animate={{
                    y: [0, -14, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={activeMedia.image}
                    alt={activeProduct.title}
                    width={320}
                    height={700}
                    priority
                    className="h-[520px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,.55)] md:h-[620px]"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Product Glow */}
            <motion.div
              animate={{
                backgroundColor: activeMedia.color,
                scaleX: [0.8, 1.15, 0.8],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 h-8 w-64 rounded-[100%] blur-2xl"
            />
          </div>
        </div>

        {/* Product Information */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            {/* About */}
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-white">
                {t.products.about}
              </h3>

              <p className="mt-8 leading-8 text-white/70">
                {activeProduct.description}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
                {/* Quality */}
                <div className="rounded-2xl bg-white/[0.05] p-4 text-center sm:p-6">
                  <h4
                    className="text-xl leading-tight font-black sm:text-3xl"
                    style={{
                      color: activeMedia.color,
                    }}
                  >
                    {t.products.premium}
                  </h4>

                  <p className="mt-2 text-white/60">
                    {t.products.quality}
                  </p>
                </div>

                {/* Taste */}
                <div className="rounded-2xl bg-white/[0.05] p-4 text-center sm:p-6">
                  <h4
                    className="text-xl leading-tight font-black sm:text-3xl"
                    style={{
                      color: activeMedia.color,
                    }}
                  >
                    {t.products.fresh}
                  </h4>

                  <p className="mt-2 text-white/60">
                    {t.products.taste}
                  </p>
                </div>

                {/* Sparkling */}
                <div className="rounded-2xl bg-white/[0.05] p-4 text-center sm:p-6">
                  <h4
                    className="text-xl leading-tight font-black sm:text-3xl"
                    style={{
                      color: activeMedia.color,
                    }}
                  >
                    CO₂
                  </h4>

                  <p className="mt-2 text-white/60">
                    {t.products.sparkling}
                  </p>
                </div>

                {/* Volume */}
                <div className="rounded-2xl bg-white/[0.05] p-4 text-center sm:p-6">
                  <h4
                    className="text-xl leading-tight font-black sm:text-3xl"
                    style={{
                      color: activeMedia.color,
                    }}
                  >
                    {activeProduct.volume}
                  </h4>

                  <p className="mt-2 text-white/60">
                    {t.products.volume}
                  </p>
                </div>
              </div>
            </div>

            {/* Composition */}
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-white">
                {t.products.composition}
              </h3>

              <div className="mt-8 space-y-4">
                {activeProduct.composition.map(
                  (ingredient, index) => (
                    <div
                      key={`${activeProduct.key}-${index}`}
                      className="flex items-center gap-4 rounded-2xl bg-white/[0.05] p-5"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-black"
                        style={{
                          backgroundColor: activeMedia.color,
                        }}
                      >
                        {index + 1}
                      </span>

                      <span className="text-white/80">
                        {ingredient}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}