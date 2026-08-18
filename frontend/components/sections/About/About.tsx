"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#04070D] py-32"
    >
      {/* Ocean Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/ocean.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#04070D]/75" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,90,170,.2),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-black uppercase text-white lg:text-6xl">
            {t.about.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {t.about.description}
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* LEFT - Contact Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <MapPin
                  className="shrink-0 text-[#D9B26F]"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {t.about.addressTitle}
                  </h3>

                  <p className="mt-2 whitespace-pre-line text-white/70">
                    {t.about.address}
                  </p>
                </div>
              </div>

              {/* Manufacturer */}
              <div className="flex gap-5">
                <Building2
                  className="shrink-0 text-[#D9B26F]"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {t.about.factoryTitle}
                  </h3>

                  <p className="mt-2 text-white/70">
                    {t.about.factory}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <Phone
                  className="shrink-0 text-[#D9B26F]"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {t.about.phoneTitle}
                  </h3>

                  <p className="mt-2 whitespace-pre-line text-white/70">
                    (+998 71) 221-84-08
                    {"\n"}
                    (+998 71) 221-30-37
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <Mail
                  className="shrink-0 text-[#D9B26F]"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {t.about.emailTitle}
                  </h3>

                  <p className="mt-2 text-white/70">
                    raupxon@yandex.ru
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Map */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="overflow-hidden rounded-[30px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Yuqoriqoraqamish%204,%20Tashkent&output=embed"
              className="h-[500px] w-full"
              loading="lazy"
              title={t.about.addressTitle}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 