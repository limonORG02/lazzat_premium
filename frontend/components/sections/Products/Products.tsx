"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Products() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04070D]">
      {/* Свет */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,90,180,.25),transparent_70%)]" />

      {/* Шум */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-8">
        {/* Заголовок */}

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[10px] text-[#D9B26F]"
        >
          PREMIUM COLLECTION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-5 w-full max-w-full text-center text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-8xl"
        >
          OUR
          <br />
          PRODUCTS
        </motion.h2>

        {/* Фото */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(30px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="mt-20"
        >
          <Image
            src="/images/products/collection.png"
            alt="Lazzat Collection"
            width={1200}
            height={900}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
