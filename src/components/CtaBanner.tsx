"use client";

import React from "react";
import { WA_URL } from "@/constants";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="kontak" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#0A2540] shadow-2xl border border-emerald-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.2),transparent_50%)] pointer-events-none" />
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-slate-900/60 to-transparent pointer-events-none" />

          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block opacity-20 pointer-events-none">
            <svg
              width="300"
              height="150"
              viewBox="0 0 300 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 120 L80 60 L180 60 L240 120 Z"
                stroke="#34D399"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <circle cx="150" cy="75" r="40" stroke="#34D399" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-xl">
              <span className="text-emerald-200 font-bold text-xs sm:text-sm uppercase tracking-wider block">
                SIAP MEMBANGUN SISTEM PARKIR TERBAIK UNTUK BISNIS ANDA?
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Hubungi Kami Sekarang Juga!
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Dapatkan konsultasi gratis dan penawaran terbaik dari tim kami.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold shadow-xl shadow-emerald-950/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-emerald-300/40 group"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  className="fill-white stroke-none"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM12.05 20.21c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.44c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.2zm4.49-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
                </svg>
                <span>Konsultasi Sekarang</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="hidden xl:block text-right select-none transform -rotate-2">
              <span className="font-handwriting text-2xl sm:text-3xl text-emerald-200 font-bold drop-shadow">
                Investasi Cerdas
                <br />
                <span className="pl-4">untuk Masa Depan</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
