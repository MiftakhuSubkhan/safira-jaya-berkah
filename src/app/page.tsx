"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FiturUnggulan from "@/components/FiturUnggulan";
import KemitraanStrategis from "@/components/KemitraanStrategis";
import DashboardRealtime from "@/components/DashboardRealtime";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <FiturUnggulan />
      <KemitraanStrategis />
      <DashboardRealtime />
      <CtaBanner />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
