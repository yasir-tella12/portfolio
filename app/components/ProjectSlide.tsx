"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Project } from "../data/projects";

type Props = Omit<Project, "id">;

export default function ProjectSlide({ title, description, tags, images }: Props) {
  const cleanId = title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  const prevButtonClass = `prev-${cleanId}`;
  const nextButtonClass = `next-${cleanId}`;

  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-10">
      {/* Left: Text Content */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-zinc-400 leading-relaxed">{description}</p>

        <ul className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Image Slideshow with External Arrows */}
      <div className="relative group px-12"> 
        <button 
          className={`${prevButtonClass} absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 text-blue-500 hover:text-blue-400 transition-colors disabled:opacity-20`}
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>

        {/* REMOVED: h-450px or h-full. 
            ADDED: transition-all to make the height change smooth.
        */}
        <div className="rounded-2xl bg-zinc-900 overflow-hidden relative border border-white/5 shadow-2xl transition-all duration-300">
          {images && images.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: `.${prevButtonClass}`,
                nextEl: `.${nextButtonClass}`,
              }}
              loop={true}
              autoHeight={true} // ENABLED: Container will resize to the current image
              className="w-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${title} preview ${index + 1}`}
                    /* REMOVED: h-full and object-cover. 
                       ADDED: h-auto to maintain natural aspect ratio.
                    */
                    className="w-full h-auto block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-40 flex items-center justify-center text-zinc-600 bg-zinc-900">
              No images available
            </div>
          )}
        </div>

        <button 
          className={`${nextButtonClass} absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 text-blue-500 hover:text-blue-400 transition-colors disabled:opacity-20`}
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}