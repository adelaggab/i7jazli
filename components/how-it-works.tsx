"use client";

import React from "react";
import {
  Search,
  CalendarCheck,
  UserCheck,
  CreditCard,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "اختر الخدمة التي تحتاجها",
    description:
      "تصفح قائمة خدماتنا المتنوعة من تنظيف عميق، كهرباء، سباكة، أو صيانة مكيفات وحدد تفاصيل طلبك بسهولة.",
    icon: Search,
    tag: "خطوة سريعة",
  },
  {
    number: "02",
    title: "حدّد الوقت والمكان المناسبين",
    description:
      "اختر التاريخ والوقت الذي يلائم جدولك اليومي، أو اطلب خدمة فورية طارئة ليصلك الفني خلال دقائق.",
    icon: CalendarCheck,
    tag: "مرونة كاملة",
  },
  {
    number: "03",
    title: "فنّي معتمد يصلك في الموعد",
    description:
      "يصلك فني مؤهل ومفحوص أمنيًا ومجهز بكافة الأدوات، مع إمكانية تتبع مساره مباشرة على الخريطة.",
    icon: UserCheck,
    tag: "فحص أمني ومهني",
  },
  {
    number: "04",
    title: "ادفع بأمان وقيّم تجربتك",
    description:
      "ادفع بعد إتمام الخدمة ورضاك التام، نقدًا أو إلكترونيًا عبر بطاقة إيداهبية / CIB، وشاركنا تقييمك.",
    icon: CreditCard,
    tag: "ضمان 100%",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>بساطة وسرعة بدون تعقيد</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            كيف تعمل خدمة <span className="text-amber-600">إحجزلي</span>؟
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            أربع خطوات واضحة ومدروسة تفصلك عن منزل مرتب وأجهزة تعمل بكفاءة، بدون
            مكالمات انتظار أو مفاوضات أسعار مرهقة.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col justify-between rounded-lg bg-white p-6 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Top Row: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {step.number}
                    </span>
                  </div>

                  {/* Tag */}
                  <span className="inline-block text-[11px] font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded px-2 py-0.5 mb-2.5">
                    {step.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom step label */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>الخطوة {idx + 1} من 4</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
