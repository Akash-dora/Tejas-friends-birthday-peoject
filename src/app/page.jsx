"use client";

import { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Countdown from "../components/Countdown";
import Celebration from "../components/Celebration";
import HappyBirthday from "../components/HappyBirthday";
import PhotoGallery from "../components/PhotoGallery";
import Letter from "../components/Letter";

export default function BirthdayApp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const birthdayDate = new Date(Date.now() + 10000);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const screens = [
    <Countdown
      key="countdown"
      birthdayDate={birthdayDate}
      onComplete={() => setCurrentScreen(1)}
    />,
    <Celebration key="celebration" onNext={() => setCurrentScreen(2)} />,
    <HappyBirthday key="happybirthday" onNext={() => setCurrentScreen(3)} />,
    <PhotoGallery key="photogallery" onNext={() => setCurrentScreen(4)} />,
    <Letter key="letter" />,
  ];

  return (
    <>
      {isLoading ? <Loader /> : screens[currentScreen]}
      <div style={{ position: "fixed", bottom: 5, right: 10, opacity: 0.2 }}>
        @anujbuilds
      </div>
    </>
  );
}
