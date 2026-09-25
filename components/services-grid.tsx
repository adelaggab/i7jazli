"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
  Wind,
  ArrowLeft,
  CheckCircle2,
  Clock,
} from "lucide-react";

const services = [
  {
    id: "cleaning",
    title: "تنظيف المنازل",
    subtitle: "تنظيف عميق، دوري أو بعد التشطيب",
    description:
      "خدمات تنظيف شاملة للشقق والفلل مع معدات ومواد تعقيم احترافية تضمن نظافة فائقة لكل زاوية.",
    icon: Sparkles,
    price: "ابتداءً من 3,500 د.ج",
    badge: "الأكثر طلباً",
    features: ["تنظيف أثاث وسجاد بالبخار", "تعقيم مطابخ وحمامات", "مواد صديقة للبيئة"],
  },
  {
    id: "maintenance",
    title: "الصيانة العامة",
    subtitle: "إصلاحات فورية وتركيبات دقيقة",
    description:
      "حلول سريعة لجميع الأعطال الطارئة في المنزل، تركيب الأثاث، إصلاح الأبواب، والنوافذ بخبرة موثوقة.",
    icon: Wrench,
    price: "ابتداءً من 2,000 د.ج",
    badge: "فني خلال ساعة",
    features: ["تركيب ستائر وشاشات", "صيانة أقفال وأبواب", "إصلاحات عامة شاملة"],
  },
  {
    id: "electrical",
    title: "الكهرباء المنزلية",
    subtitle: "أعطال وتمديدات آمنة بمعايير قياسية",
    description:
      "فنيو كهرباء معتمدون لفحص القواطع، إصلاح الماس الكهربائي، تركيب الإنارة الحديثة ولوحات التوزيع.",
    icon: Zap,
    price: "ابتداءً من 2,500 د.ج",
    badge: "أمان وفحص شامل",
    features: ["إصلاح شورت كهربائي", "تركيب ثريات وإنارة مخفية", "فحص وتحديث القواطع"],
  },
  {
    id: "plumbing",
    title: "السباكة والصرف الصحي",
    subtitle: "كشف التسريبات والتركيبات الصحية",
    description:
      "معالجة فورية لتسريبات المياه، انسداد المجاري، تركيب وصيانة السخانات والمضخات بأحدث المعدات.",
    icon: Droplets,
    price: "ابتداءً من 2,200 د.ج",
    badge: "خدمة طوارئ",
    features: ["كشف تسرب بدون تكسير", "صيانة سخانات ومضخات", "تسليك وصيانة بالوعات"],
  },
  {
    id: "painting",
    title: "الدهان والديكور",
    subtitle: "طلاء احترافي وديكورات عصرية",
    description:
      "تجديد دهانات منزلك بألوان عصرية وتشطيبات لا تشوبها شائبة مع حماية كاملة لأثاثك وأرضياتك.",
    icon: Paintbrush,
    price: "ابتداءً من 5,000 د.ج",
    badge: "تشطيب راقٍ",
    features: ["دهانات داخلية وخارجية", "معالجة الرطوبة والتشققات", "ورق جدران وديكورات"],
  },
  {
    id: "hvac",
    title: "التكييف والتبريد",
    subtitle: "صيانة وتركيب وشحن غاز",
    description:
      "تجهيز وصيانة مكيفات الهواء لمختلف المواسم، تنظيف الفلاتر، كشف التسريب وشحن غاز الفريون الأصلي.",
    icon: Wind,
    price: "ابتداءً من 3,000 د.ج",
    badge: "كفاءة تبريد عالية",
    features: ["تنظيف شامل للوحدة الداخلية", "شحن غاز R410A / R22", "فحص الضاغط والتسريب"],
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 mb-3">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>فنيون متخصصون تحت الطلب</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            كل ما يحتاجه بيتك، <span className="text-amber-600">في مكان واحد</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            اختر الخدمة المناسبة لمنزلك واطّلع على الأسعار التقديرية الشفافة قبل
            الحجز، بدون أي رسوم خفية أو مفاجآت.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isSelected = selectedService === svc.id;

            return (
              <div
                key={svc.id}
                onClick={() => setSelectedService(isSelected ? null : svc.id)}
                className={`flex flex-col justify-between rounded-lg p-6 bg-white border ${
                  isSelected
                    ? "border-amber-500 ring-1 ring-amber-500"
                    : "border-slate-200 hover:border-slate-300"
                } shadow-sm transition-colors cursor-pointer`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-slate-900">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-amber-700 font-medium mt-0.5 mb-2.5">
                    {svc.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {svc.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 mb-5">
                    {svc.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Price + CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-normal">
                      السعر التقديري
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {svc.price}
                    </span>
                  </div>

                  <a
                    href="#booking-flow"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <span>احجز الآن</span>
                    <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner strip */}
        <div className="mt-10 rounded-lg bg-slate-900 p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
          <div className="flex items-center gap-3 text-start">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-800 text-amber-400 border border-slate-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">لم تجد الخدمة التي تبحث عنها؟</h4>
              <p className="text-xs text-slate-400 font-normal">
                فريقنا يقدم خدمات صيانة مخصصة لكافة التجهيزات المنزلية والمكتبية.
              </p>
            </div>
          </div>
          <a
            href="#booking-flow"
            className="shrink-0 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 rounded-md px-4 py-2 transition-colors"
          >
            طلب خدمة مخصصة
          </a>
        </div>
      </div>
    </section>
  );
}
