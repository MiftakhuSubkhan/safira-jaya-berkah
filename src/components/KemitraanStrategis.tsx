"use client";

import React from "react";
import { WA_PHONE_NUMBER } from "@/constants";
import {
  CheckCircle2,
  Coins,
  TrendingUp,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function KemitraanStrategis() {
  const getWaLink = (packageName: string) => {
    return `https://wa.me/62${WA_PHONE_NUMBER.substring(
      1
    )}?text=${encodeURIComponent(
      `Halo Safira Jaya Berkah Parking, saya tertarik untuk berkonsultasi mengenai paket kemitraan: ${packageName}.`
    )}`;
  };

  const partnerBenefits = [
    "Investasi terukur & transparan",
    "Dukungan operasional penuh",
    "Teknologi dan perangkat berkualitas",
    "Tim profesional siap membantu",
  ];

  return (
    <section
      id="kemitraan"
      className="py-20 bg-slate-50/60 border-t border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="text-[#1D4ED8] font-bold text-xs sm:text-sm tracking-wider uppercase inline-block">
                KEMITRAAN STRATEGIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
                Bersama Membangun <br />
                Bisnis Parkir yang <br />
                Lebih Menguntungkan
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Kami menawarkan 3 skema kerjasama yang fleksibel sesuai dengan
                kebutuhan dan target bisnis Anda.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {partnerBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100/70 text-[#10B981] flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-[#10B981]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-5">
                  <Coins size={24} />
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  Management Fee
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Pembagian pendapatan dengan fee tetap per periode.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">
                      Fee tetap bulanan
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">
                      Operasional & maintenance dari kami
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">
                      Cocok untuk lokasi strategis
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={getWaLink("Management Fee")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-4 rounded-xl font-semibold text-sm text-white bg-[#1D4ED8] hover:bg-[#1E40AF] transition-colors shadow-md shadow-blue-600/20"
              >
                Mulai Kerjasama
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-5">
                  <TrendingUp size={24} />
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  Profit Share
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Bagi hasil berdasarkan persentase pendapatan.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-50 text-[#06B6D4] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">
                      Pembagian profit transparan
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-50 text-[#06B6D4] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">
                      Tanpa biaya tetap
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-50 text-[#06B6D4] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700">
                      Cocok untuk jangka panjang
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={getWaLink("Profit Share")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-4 rounded-xl font-semibold text-sm text-white bg-[#06B6D4] hover:bg-[#0891B2] transition-colors shadow-md shadow-cyan-500/20"
              >
                Mulai Kerjasama
              </a>
            </div>

            <div className="relative bg-white rounded-2xl p-6 border-2 border-[#10B981] shadow-xl shadow-emerald-500/10 flex flex-col justify-between transform md:-translate-y-2">
              <div className="absolute -top-3.5 right-6 bg-[#10B981] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                Paling Populer
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center mb-5">
                  <ShieldCheck size={24} />
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  Guaranteed Income
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Pendapatan tetap setiap bulan dengan nilai yang disepakati.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      Penghasilan pasti & stabil
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      Kami tanggung operasional
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      Minim risiko untuk Anda
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={getWaLink("Guaranteed Income")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-4 rounded-xl font-semibold text-sm text-white bg-[#10B981] hover:bg-[#059669] transition-colors shadow-lg shadow-emerald-500/25"
              >
                Mulai Kerjasama
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
