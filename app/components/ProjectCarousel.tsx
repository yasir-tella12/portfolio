"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectCarouselProps {
  images: string[];
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  return (
    <div className="relative w-full group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 4000 }}
        className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[16/10] bg-zinc-900">
              <Image
                src={src}
                alt={`Project screenshot ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons (positioned like your screenshot) */}
      <div className="flex justify-center gap-6 mt-8">
        <button className="button-prev w-12 h-12 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-400 hover:bg-blue-500/10 transition-all cursor-pointer">
          <span className="text-xl">«</span>
        </button>
        <button className="button-next w-12 h-12 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-400 hover:bg-blue-500/10 transition-all cursor-pointer">
          <span className="text-xl">»</span>
        </button>
      </div>
    </div>
  );
}