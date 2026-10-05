"use client";

import React from "react";
import Image from "next/image";
import { WA_URL } from "@/constants";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Cpu,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100dvh] w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 overflow-hidden flex items-center bg-slate-900/5"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-hero-parkir.png"
          alt="Safira Jaya Berkah Parking - Smart Parking Gate"
          fill
          priority
          quality={100}
          className="object-cover object-[80%_center] sm:object-[75%_center] md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 lg:bg-none" />
      </div>

      <div className="absolute top-28 right-8 sm:right-16 lg:right-28 z-20 pointer-events-none transform -rotate-3 select-none hidden md:block">
        <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#1D4ED8] tracking-wide drop-shadow-sm">
          Parkir Lebih Mudah,
          <br />
          <span className="pl-6">Lebih Cerdas</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-6 bg-white/85 sm:bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-5 sm:p-7 lg:p-0 rounded-3xl lg:rounded-none border border-white/80 lg:border-0 shadow-xl shadow-blue-950/10 lg:shadow-none space-y-5 sm:space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-[#1D4ED8] font-bold text-[11px] sm:text-sm tracking-wider uppercase bg-blue-50/90 text-[#1D4ED8] px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-sm">
                SMART PARKING MANAGEMENT SYSTEM
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.15] sm:leading-[1.12]">
              Solusi Parkir Otomatis <br />
              untuk Bisnis yang <br />
              <span className="text-[#1D4ED8]">Lebih Modern</span>
            </h1>

            <p className="text-slate-700 text-sm sm:text-lg leading-relaxed max-w-lg font-medium">
              Tingkatkan efisiensi, keamanan, dan kenyamanan pengelolaan parkir
              dengan teknologi canggih dari Safira Jaya Berkah Parking.
            </p>

            <div className="pt-1">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#10B981] hover:bg-[#059669] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-semibold shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  className="fill-white stroke-none"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM12.05 20.21c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.44c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.2zm4.49-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
                </svg>
                <span>Hubungi Kami via WhatsApp</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-sm p-2 sm:p-0 rounded-xl border sm:border-0 border-slate-200/80 shadow-sm sm:shadow-none">
                <div className="p-2 rounded-lg bg-blue-50 text-[#1D4ED8] shadow-sm flex-shrink-0">
                  <Zap size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Otomatis
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 font-medium">
                    Tanpa Operator
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-sm p-2 sm:p-0 rounded-xl border sm:border-0 border-slate-200/80 shadow-sm sm:shadow-none">
                <div className="p-2 rounded-lg bg-blue-50 text-[#1D4ED8] shadow-sm flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Aman
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 font-medium">
                    Anti Kecurangan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-sm p-2 sm:p-0 rounded-xl border sm:border-0 border-slate-200/80 shadow-sm sm:shadow-none">
                <div className="p-2 rounded-lg bg-blue-50 text-[#1D4ED8] shadow-sm flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Efisien
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 font-medium">
                    Hemat Biaya
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-sm p-2 sm:p-0 rounded-xl border sm:border-0 border-slate-200/80 shadow-sm sm:shadow-none">
                <div className="p-2 rounded-lg bg-blue-50 text-[#1D4ED8] shadow-sm flex-shrink-0">
                  <Cpu size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Modern
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 font-medium">
                    Teknologi Terdepan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6 min-h-[440px]" />
        </div>
      </div>
    </section>
  );
}
