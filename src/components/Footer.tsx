"use client";

import React from "react";
import Logo from "./Logo";
import {
  WA_PHONE_NUMBER,
  WA_URL,
  COMPANY_INFO,
  NAV_LINKS,
} from "@/constants";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const services = [
    "Sistem Parkir Otomatis",
    "LPR Camera",
    "E-Money Reader",
    "Fastlane Exit",
    "Mobile POS",
  ];

  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" isWhite={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Layanan
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#fitur"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Hubungi Kami
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <Phone size={16} className="text-emerald-400 flex-shrink-0" />
                <span>{WA_PHONE_NUMBER}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <Mail size={16} className="text-emerald-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                Ikuti Kami
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    className="fill-current stroke-none"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM12.05 20.21c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.44c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.2zm4.49-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  <Youtube size={15} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Safira Jaya Berkah Parking. All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Smart Parking</span>
            <span>•</span>
            <span>Better Business</span>
            <span>•</span>
            <span>Together</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
