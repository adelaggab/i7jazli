"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  ArrowLeft,
  Play,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";

// Dynamic client-only import for Three.js canvas (SSR disabled)
const HeroCanvas = dynamic(() => import("./hero-canvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] md:min-h-[520px] flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-amber-500" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[560px]">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start z-10">
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-xs font-medium bg-slate-800 border border-slate-700 text-amber-400 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>المنصة الأولى لحجز الصيانة والخدمات المنزلية في الجزائر</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] text-white">
              خدمة منزلك، <span className="text-amber-400">بنقرة وحدة.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              احجز أفضل الفنيين الموثوقين في التنظيف، الصيانة العامة، الكهرباء
              والسباكة — في دقائق معدودة، بدون اتصالات هاتفية ولا مساومة على
              السعر، مع ضمان رضا تام.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#booking-flow"
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm font-bold text-slate-950 transition-colors"
              >
                <span>احجز خدمتك الآن</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 rounded-md border border-slate-700 bg-slate-800 hover:bg-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition-colors"
              >
                <Play className="w-4 h-4 fill-current rtl:rotate-180 text-amber-400" />
                <span>شاهد كيف تعمل</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-10 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl">
              {/* Trust point 1 */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 border border-slate-700 text-amber-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    +15,000
                  </div>
                  <div className="text-[11px] text-slate-400 font-normal">
                    حجز مكتمل
                  </div>
                </div>
              </div>

              {/* Trust point 2 */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    فنيون معتمدون
                  </div>
                  <div className="text-[11px] text-slate-400 font-normal">
                    فحص مهني وأمني
                  </div>
                </div>
              </div>

              {/* Trust point 3 */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 border border-slate-700 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1">
                    <span>4.8</span>
                    <span className="text-[11px] text-slate-400 font-normal">/ 5</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-normal">
                    +3,400 تقييم
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Visual & Interactive Mockup Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* The 3D Canvas Box */}
            <div className="relative w-full h-[420px] sm:h-[500px] flex items-center justify-center">
              <HeroCanvas className="w-full h-full" />

              {/* Floating Badge Card 1: Booking Status */}
              <div className="absolute top-2 start-2 sm:start-4 bg-slate-800 border border-slate-700 rounded-lg p-3 max-w-[220px] pointer-events-none select-none shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-500 text-slate-950 font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-start">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                      <Clock className="w-3 h-3" />
                      <span>تأكيد فوري</span>
                    </div>
                    <span className="text-xs font-medium text-white mt-0.5">
                      فني سباكة يصلك خلال 20 دقيقة
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Card 2: Guaranteed Quality & Local Gateway */}
              <div className="absolute bottom-4 end-2 sm:end-4 bg-slate-800 border border-slate-700 rounded-lg p-3 max-w-[230px] pointer-events-none select-none shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-700 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-[11px] font-semibold text-emerald-400">
                      ضمان الجودة 100%
                    </span>
                    <span className="text-xs text-slate-300 font-normal mt-0.5">
                      دفع عبر Chargily (CIB/إيداهبية) أو نقدًا
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive hint tag */}
              <div className="absolute bottom-1 start-1/2 -translate-x-1/2 text-[10px] font-medium text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-md pointer-events-none select-none">
                حرّك المؤشر للتفاعل مع المشهد ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
