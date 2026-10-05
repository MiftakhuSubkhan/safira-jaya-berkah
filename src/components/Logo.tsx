import React from "react";

interface LogoProps {
  className?: string;
  isWhite?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", isWhite = false, size = "md" }: LogoProps) {
  const titleSize =
    size === "sm"
      ? "text-base"
      : size === "lg"
      ? "text-xl sm:text-2xl"
      : "text-lg sm:text-xl";
  const subSize =
    size === "sm" ? "text-[9px]" : size === "lg" ? "text-[11px]" : "text-[10px]";

  return (
    <div className={`flex flex-col leading-tight select-none ${className}`}>
      <span
        className={`font-extrabold tracking-tight ${titleSize} ${
          isWhite ? "text-white" : "text-[#0A2540]"
        }`}
      >
        Safira Jaya Berkah
      </span>
      <span
        className={`font-extrabold uppercase tracking-[0.3em] ${subSize} ${
          isWhite ? "text-emerald-400" : "text-[#1D4ED8]"
        }`}
      >
        PARKING
      </span>
    </div>
  );
}
