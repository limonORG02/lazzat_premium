"use client";

import Image from "next/image";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-content">
        <Image
          src="/logo/logo.png"
          alt="Lazzat"
          width={170}
          height={170}
          className="intro-logo"
          priority
        />

        <p className="intro-text">PREMIUM</p>
      </div>
    </div>
  );
}
