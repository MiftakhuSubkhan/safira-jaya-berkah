import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Safira Jaya Berkah Parking - Solusi Parkir Otomatis untuk Bisnis yang Lebih Modern",
  description:
    "Penyedia sistem manajemen parkir otomatis terdepan di Indonesia. Menghadirkan teknologi manless gate dispenser, LPR camera, e-money reader, dan dashboard monitoring real-time.",
  keywords: [
    "Safira Jaya Berkah Parking",
    "Sistem Parkir Otomatis",
    "Manless Gate Dispenser",
    "LPR Camera",
    "Smart Parking Indonesia",
    "Parkir E-Money",
    "Palang Parkir Otomatis",
    "Pengelolaan Parkir Jakarta",
  ],
  authors: [{ name: "Safira Jaya Berkah Parking" }],
  openGraph: {
    title:
      "Safira Jaya Berkah Parking - Solusi Parkir Otomatis untuk Bisnis yang Lebih Modern",
    description:
      "Tingkatkan efisiensi, keamanan, dan kenyamanan pengelolaan parkir dengan teknologi canggih dari Safira Jaya Berkah Parking.",
    type: "website",
    locale: "id_ID",
    siteName: "Safira Jaya Berkah Parking",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
