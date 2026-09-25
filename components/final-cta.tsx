"use client";

import React from "react";
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Star,
} from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-slate-900 p-8 sm:p-12 text-white border border-slate-800 shadow-sm text-center max-w-4xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium bg-slate-800 border border-slate-700 text-amber-400 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ابدأ تجربتك الأولى اليوم</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            جاهز تحجز خدمتك الأولى وتنسى <span className="text-amber-400">صداع الصيانة؟</span>
          </h2>

          {/* Subheadline */}
          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
            انضم لأكثر من 15,000 عائلة تستمتع بمنازل نظيفة وآمنة. احجز فني موثوق
            الآن في أقل من دقيقتين وادفع فقط عند رضاك التام.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#booking-flow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm font-bold text-slate-950 transition-colors shadow-sm"
            >
              <span>احجز خدمتك الآن</span>
              <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-800 hover:bg-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition-colors"
            >
              <span>استكشف كافة الخدمات</span>
            </a>
          </div>

          {/* App Store / Google Play badges */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-5 text-xs text-slate-400">
            <span className="font-medium text-slate-300 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-amber-400" />
              تطبيق إحجزلي للموبايل (قريبًا):
            </span>

            <div className="flex items-center gap-2.5">
              <div className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-white font-medium flex items-center gap-2 select-none">
                <span className="text-sm"></span>
                <div className="text-start leading-tight">
                  <span className="text-[8px] text-slate-400 block">Download on</span>
                  <span className="text-xs font-semibold block">App Store</span>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-white font-medium flex items-center gap-2 select-none">
                <span className="text-xs">▶</span>
                <div className="text-start leading-tight">
                  <span className="text-[8px] text-slate-400 block">Get it on</span>
                  <span className="text-xs font-semibold block">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Trust Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              بدون رسوم إلغاء
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ضمان ذهبي لإعادة الخدمة
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              4.8 / 5 تقييم الرضا
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
