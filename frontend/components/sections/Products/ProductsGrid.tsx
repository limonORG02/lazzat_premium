"use client";

import Image from "next/image";

export default function ProductsGrid() {
  return (
    <div className="mt-20 flex justify-center">
      <Image
        src="/images/products.png"
        alt="Lazzat Products"
        width={1100}
        height={900}
        className="transition duration-700 hover:scale-105"
      />
    </div>
  );
}
