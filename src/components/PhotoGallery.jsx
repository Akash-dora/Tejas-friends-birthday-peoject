"use client";

import { motion } from "motion/react";
import { Camera, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function PhotoGallery({ onNext }) {
  const photos = [
    { id: 1, src: `${basePath}/images/1.jpg` },
    { id: 3, src: `${basePath}/images/3.jpg` },
    { id: 7, src: `${basePath}/images/7.jpg` },
    { id: 9, src: `${basePath}/images/9.jpg` },
  ];

  return (
    <div>
      <h2>Moments with You</h2>
      <p>Beautiful moments with Madam Jii 📸</p>
      <Swiper effect="cube" modules={[EffectCube, Pagination]} pagination>
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img src={photo.src} alt={`Moment ${photo.id}`} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={onNext}>One Last Thing</button>
    </div>
  );
}
