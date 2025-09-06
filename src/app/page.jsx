"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../components/Loader.jsx";
import Countdown from "../components/Countdown.jsx";
import Celebration from "../components/Celebration.jsx";
import HappyBirthday from "../components/HappyBirthday.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import Letter from "../components/Letter.jsx";

export default function BirthdayApp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false); // ✅ Added missing state
  const [isBirthdayOver, setIsBirthdayOver] = useState(false);

  // 10 second countdown
  const birthdayDate = new Date(Date.now() + 10000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const screens = [
    !isBirthdayOver ? (
      <Countdown
        key="countdown"
        onComplete={() => setIsBirthdayOver(true)}
        birthdayDate={birthdayDate}
      />
    ) : (
      <Celebration
        key="celebration"
        onNext={() => setCurrentScreen(1)}
        onMusicStart={() => setMusicStarted(true)}
      />
    ),
    <HappyBirthday key="happy" onNext={() => setCurrentScreen(2)} />,
    <PhotoGallery key="gallery" onNext={() => setCurrentScreen(3)} />,
    <Letter key="letter" />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950/30 via-black to-purple-950/30 overflow-hidden relative">
      {/* Radial gradients for background */}
      <div
        className="fixed inset-0 z-0 blur-[120px] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(255, 99, 165, 0.6), transparent 40%)",
        }}
      />
      <div
        className="fixed inset-0 z-0 blur-[120px] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.6), transparent 40%)",
        }}
      />
      <div
        className="fixed inset-0 z-0 blur-[160px] opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(228, 193, 255, 0.4), transparent 40%)",
        }}
      />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <AnimatePresence mode="wait">
            {screens[currentScreen]}
          </AnimatePresence>
        )}
      </AnimatePresence>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-[13px] text-white/40 pointer-events-none z-50 font-light"
      >
        @anujbuilds
      </motion.div>
    </div>
  );
}
