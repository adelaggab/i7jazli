import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "إحجزلي | خدمات منزلية موثوقة بنقرة واحدة",
  description:
    "احجز أفضل الفنيين المعتمدين في التنظيف، الصيانة العامة، الكهرباء، والسباكة في دقائق وبدون مكالمات هاتفية.",
  keywords: [
    "خدمات منزلية",
    "صيانة منزلية",
    "تنظيف منازل",
    "سباك معتمد",
    "كهربائي منازل",
    "حجز فني",
    "الجزائر",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
