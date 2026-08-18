"use client";

export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/ocean.mp4" type="video/mp4" />
      </video>

      {/* Темный слой */}
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}
