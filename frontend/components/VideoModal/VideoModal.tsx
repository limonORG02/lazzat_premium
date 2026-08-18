"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  video: string;
  onClose: () => void;
};

export default function VideoModal({ open, video, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      videoRef.current?.play();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute right-8 top-8 z-50 text-5xl text-white transition hover:rotate-90 hover:text-[#D9B26F]"
          >
            ×
          </button>

          <motion.video
            ref={videoRef}
            src={video}
            autoPlay
            playsInline
            muted={false}
            onEnded={onClose}
            className="h-full w-full object-cover"
            initial={{
              scale: 1.15,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
