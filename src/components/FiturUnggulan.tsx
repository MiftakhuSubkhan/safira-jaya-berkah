"use client";

import React from "react";
import Image from "next/image";
import { CreditCard, Gauge, Smartphone, Zap } from "lucide-react";

export default function FiturUnggulan() {
  const features = [
    {
      number: "01",
      title: "Manless Gate Dispenser",
      description:
        "Gerbang otomatis dengan LPR Camera untuk identifikasi plat nomor kendaraan.",
      featurePill: "Tanpa operator, lebih efisien",
      icon: <Zap size={15} />,
      image: "/images/feature-manless-gate.jpg",
      alt: "Manless Gate Dispenser - Safira Jaya Berkah Parking",
    },
    {
      number: "02",
      title: "Multi-Bank E-Money Reader",
      description:
        "Mendukung berbagai kartu e-money (Mandiri, BCA, BNI, BRI, TapCash, Flazz, dll).",
      featurePill: "Pembayaran lebih cepat dan praktis",
      icon: <CreditCard size={15} />,
      image: "/images/feature-emoney-reader.jpg",
      alt: "Multi-Bank E-Money Reader - Safira Jaya Berkah Parking",
    },
    {
      number: "03",
      title: "Fastlane Exit",
      description:
        "Keluar parkir lebih cepat dengan sistem deteksi otomatis dan palang gerbang pintar.",
      featurePill: "Kurangi antrean, naikkan kepuasan",
      icon: <Gauge size={15} />,
      image: "/images/feature-fastlane-exit.jpg",
      alt: "Fastlane Exit - Safira Jaya Berkah Parking",
    },
    {
      number: "04",
      title: "Mobile Handheld POS",
      description:
        "Transaksi dan monitoring langsung dari genggaman tangan. Praktis & fleksibel.",
      featurePill: "Real-time, kapan saja dan di mana saja",
      icon: <Smartphone size={15} />,
      image: "/images/feature-mobile-pos.jpg",
      alt: "Mobile Handheld POS - Safira Jaya Berkah Parking",
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl space-y-4 mb-14">
          <span className="text-[#1D4ED8] font-bold text-xs sm:text-sm tracking-wider uppercase inline-block">
            FITUR UNGGULAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
            Teknologi Lengkap untuk Pengelolaan Parkir yang Lebih Baik
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-none">
            Kami menghadirkan sistem parkir otomatis dengan perangkat dan fitur terbaik untuk mendukung operasional bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
                <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[#1D4ED8] text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {item.number}
                </div>

                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#1D4ED8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    {item.featurePill}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
