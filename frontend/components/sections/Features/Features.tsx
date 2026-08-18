"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Leaf,
  ShieldCheck,
  Factory,
} from "lucide-react";

const icons = [Leaf, Factory, ShieldCheck];

export default function Features() {
  const { t } = useLanguage();

  const cards = t.products.features.cards;
  const bottom = t.products.features.bottom;

  return (
    <section className="relative overflow-hidden bg-[#050910] py-32">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      >
        <source src="/videos/ocean.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050910]/80" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,120,255,.15),transparent_70%)]" />

      {/* Noise */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black uppercase text-white lg:text-6xl">
            {t.products.features.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            {t.products.features.description}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {cards.map((item, index) => {
            const Icon = icons[index] ?? Leaf;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group rounded-[30px] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-xl transition duration-300 hover:border-[#D9B26F]/40 hover:bg-white/[0.08]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D9B26F]/10 transition duration-300 group-hover:bg-[#D9B26F]/20">
                  <Icon
                    size={34}
                    className="text-[#D9B26F]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-white/60">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-24 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          <div className="grid gap-8 p-10 md:grid-cols-4">
            {bottom.map((item, index) => (
              <div key={item.title}>
                <span className="text-xs uppercase tracking-[5px] text-[#D9B26F]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h4 className="mt-3 text-xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}