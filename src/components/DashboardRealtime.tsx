"use client";

import React from "react";
import {
  CheckCircle2,
  LayoutDashboard,
  Receipt,
  Car,
  FileBarChart2,
  Settings,
  Bell,
  Calendar,
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function DashboardRealtime() {
  const points = ["Data real-time", "Laporan lengkap", "Akses multi-device"];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[#1D4ED8] font-bold text-xs sm:text-sm tracking-wider uppercase inline-block">
                DASHBOARD REAL-TIME
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
                Pantau Kinerja Parkir <br />
                Secara Langsung
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Dapatkan informasi pendapatan, jumlah kendaraan, status
                okupansi, dan laporan lengkap lainnya melalui dashboard yang
                mudah diakses.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-[#10B981]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden bg-white">
              <div className="grid grid-cols-12 min-h-[480px]">
                <div className="hidden sm:flex col-span-3 bg-[#0F172A] p-4 flex-col justify-between text-slate-400">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center text-white text-[10px] font-bold">
                        S
                      </div>
                      <div className="text-white text-xs font-bold leading-tight">
                        Safira Jaya Berkah
                        <span className="block text-[8px] text-emerald-400 uppercase tracking-wider">
                          PARKING
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                        <LayoutDashboard size={15} />
                        <span>Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 cursor-pointer transition-colors">
                        <Receipt size={15} />
                        <span>Transaksi</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 cursor-pointer transition-colors">
                        <Car size={15} />
                        <span>Kendaraan</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 cursor-pointer transition-colors">
                        <FileBarChart2 size={15} />
                        <span>Laporan</span>
                      </div>
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 cursor-pointer transition-colors">
                        <Settings size={15} />
                        <span>Pengaturan</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-9 p-4 sm:p-5 bg-slate-50/50 flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-base">
                        Dashboard
                      </h4>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
                        <Calendar size={12} className="text-slate-400" />
                        <span>1 Jan 2026 - 30 Jun 2026</span>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm relative">
                        <Bell size={13} />
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                        AD
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                        <div className="w-4 h-4 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                          <DollarSign size={10} />
                        </div>
                        <span>Total Pendapatan</span>
                      </div>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">
                        Rp 17.850.000
                      </p>
                      <p className="text-[9px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-0.5">
                        <span>↑ 12%</span>
                        <span className="text-slate-400 font-normal">
                          dari periode sebelumnya
                        </span>
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                        <div className="w-4 h-4 rounded bg-sky-50 text-sky-600 flex items-center justify-center">
                          <Car size={10} />
                        </div>
                        <span>Jumlah Kendaraan</span>
                      </div>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">
                        3.482
                      </p>
                      <p className="text-[9px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-0.5">
                        <span>↑ 8%</span>
                        <span className="text-slate-400 font-normal">
                          dari periode sebelumnya
                        </span>
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                        <div className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <TrendingUp size={10} />
                        </div>
                        <span>Okupansi Parkir</span>
                      </div>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">
                        78%
                      </p>
                      <p className="text-[9px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-0.5">
                        <span>↑ 3%</span>
                        <span className="text-slate-400 font-normal">
                          dari periode sebelumnya
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-7 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-slate-800">
                          Grafik Pendapatan
                        </span>
                        <div className="flex items-center gap-2 text-[9px] text-slate-500">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            Pendapatan
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-600" />
                            Jumlah Kendaraan
                          </span>
                        </div>
                      </div>

                      <div className="h-32 w-full relative">
                        <svg
                          viewBox="0 0 300 120"
                          className="w-full h-full overflow-visible"
                        >
                          <defs>
                            <linearGradient
                              id="cyanAreaGrad"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#06B6D4"
                                stopOpacity="0.3"
                              />
                              <stop
                                offset="100%"
                                stopColor="#06B6D4"
                                stopOpacity="0.0"
                              />
                            </linearGradient>
                            <linearGradient
                              id="blueLineGrad"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#2563EB"
                                stopOpacity="0.2"
                              />
                              <stop
                                offset="100%"
                                stopColor="#2563EB"
                                stopOpacity="0.0"
                              />
                            </linearGradient>
                          </defs>

                          <line
                            x1="30"
                            y1="20"
                            x2="295"
                            y2="20"
                            stroke="#f1f5f9"
                            strokeDasharray="2 2"
                          />
                          <line
                            x1="30"
                            y1="50"
                            x2="295"
                            y2="50"
                            stroke="#f1f5f9"
                            strokeDasharray="2 2"
                          />
                          <line
                            x1="30"
                            y1="80"
                            x2="295"
                            y2="80"
                            stroke="#f1f5f9"
                            strokeDasharray="2 2"
                          />
                          <line
                            x1="30"
                            y1="105"
                            x2="295"
                            y2="105"
                            stroke="#e2e8f0"
                          />

                          <text
                            x="25"
                            y="23"
                            fontSize="7"
                            fill="#94a3b8"
                            textAnchor="end"
                          >
                            Rp 6 jt
                          </text>
                          <text
                            x="25"
                            y="53"
                            fontSize="7"
                            fill="#94a3b8"
                            textAnchor="end"
                          >
                            Rp 4 jt
                          </text>
                          <text
                            x="25"
                            y="83"
                            fontSize="7"
                            fill="#94a3b8"
                            textAnchor="end"
                          >
                            Rp 2 jt
                          </text>
                          <text
                            x="25"
                            y="107"
                            fontSize="7"
                            fill="#94a3b8"
                            textAnchor="end"
                          >
                            Rp 0
                          </text>

                          <path
                            d="M 35 95 Q 70 85 105 90 T 175 70 T 235 55 T 290 35 L 290 105 L 35 105 Z"
                            fill="url(#cyanAreaGrad)"
                          />
                          <path
                            d="M 35 95 Q 70 85 105 90 T 175 70 T 235 55 T 290 35"
                            fill="none"
                            stroke="#06B6D4"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />

                          <path
                            d="M 35 100 Q 75 92 110 80 T 180 85 T 240 68 T 290 48"
                            fill="none"
                            stroke="#2563EB"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />

                          <circle cx="290" cy="35" r="3" fill="#06B6D4" />
                          <circle cx="290" cy="48" r="3" fill="#2563EB" />
                        </svg>
                      </div>

                      <div className="flex justify-between text-[8px] text-slate-400 pt-1 border-t border-slate-100 pl-6">
                        <span>1 Jan</span>
                        <span>5 Jan</span>
                        <span>10 Jan</span>
                        <span>15 Jan</span>
                        <span>20 Jan</span>
                        <span>25 Jan</span>
                        <span>30 Jan</span>
                      </div>
                    </div>

                    <div className="sm:col-span-5 space-y-2.5 flex flex-col justify-between">
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-800 block">
                            Status Okupansi
                          </span>
                          <div className="text-[9px] text-slate-600 space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>Terisi: 312</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                              <span>Kosong: 88</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span>Total: 400</span>
                            </div>
                          </div>
                        </div>

                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <circle
                              cx="18"
                              cy="18"
                              r="15.5"
                              fill="none"
                              stroke="#e2e8f0"
                              strokeWidth="3.5"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="15.5"
                              fill="none"
                              stroke="#10B981"
                              strokeWidth="3.5"
                              strokeDasharray="97.4"
                              strokeDashoffset="21.4"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="absolute text-[10px] font-extrabold text-slate-800">
                            78%
                          </span>
                        </div>
                      </div>

                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                        <span className="text-[10px] font-bold text-slate-800 block mb-1.5">
                          Lalu Lintas Kendaraan
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="bg-blue-50/70 p-1.5 rounded-lg border border-blue-100 flex items-center justify-between">
                            <div className="text-left">
                              <span className="text-[8px] text-slate-500 block">
                                Masuk
                              </span>
                              <span className="text-xs font-bold text-slate-900">
                                1.762
                              </span>
                            </div>
                            <ArrowDownLeft
                              size={14}
                              className="text-blue-600 bg-white p-0.5 rounded shadow-sm"
                            />
                          </div>

                          <div className="bg-sky-50/70 p-1.5 rounded-lg border border-sky-100 flex items-center justify-between">
                            <div className="text-left">
                              <span className="text-[8px] text-slate-500 block">
                                Keluar
                              </span>
                              <span className="text-xs font-bold text-slate-900">
                                1.720
                              </span>
                            </div>
                            <ArrowUpRight
                              size={14}
                              className="text-sky-600 bg-white p-0.5 rounded shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
