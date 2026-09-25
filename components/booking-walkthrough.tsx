"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "اختيار الخدمة",
    subtitle: "تحديد الفئة والمهمة المطلوبة",
    badge: "الخطوة الأولى",
  },
  {
    id: 2,
    title: "الموعد والوقت",
    subtitle: "تحديد اليوم وفترة الزيارة",
    badge: "الخطوة الثانية",
  },
  {
    id: 3,
    title: "عنوان وتفاصيل المنزل",
    subtitle: "الموقع ورقم الشقة والملاحظات",
    badge: "الخطوة الثالثة",
  },
  {
    id: 4,
    title: "طريقة الدفع الآمنة",
    subtitle: "إلكتروني (الذهبية/CIB) أو عند الرضا",
    badge: "الخطوة الرابعة",
  },
  {
    id: 5,
    title: "تأكيد الحجز الفوري",
    subtitle: "رقم الطلب وبيانات الفني المعتمد",
    badge: "الخطوة النهائية",
  },
];

export default function BookingWalkthrough() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="booking-flow" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>تجربة حجز مدروسة وسريعة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            كيف يحجز العميل في <span className="text-amber-600">إحجزلي</span>؟
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            جولة بصرية توضح لك سلاسة تجربة الحجز من هاتفك عبر 5 خطوات واضحة
            ومباشرة.
          </p>
        </div>

        {/* Stepper Tabs Bar (RTL right-to-left) */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
            {steps.map((s) => {
              const isActive = activeStep === s.id;
              const isPast = activeStep > s.id;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(s.id)}
                  className={`flex-1 min-w-[140px] sm:min-w-[170px] p-3 rounded-lg text-start transition-colors border ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : isPast
                      ? "bg-amber-50 text-slate-800 border-amber-200 hover:bg-amber-100/60"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-amber-500 text-slate-950"
                          : isPast
                          ? "bg-amber-600 text-white"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {isPast ? "مكتمل ✓" : `0${s.id}`}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold truncate">
                    {s.title}
                  </div>
                  <div
                    className={`text-[10px] truncate mt-0.5 ${
                      isActive ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {s.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Device Mockup & Step Details Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 rounded-lg p-6 sm:p-8 lg:p-10 text-white border border-slate-800 shadow-sm">
          {/* Text description of current step */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md mb-4">
                <span>{steps[activeStep - 1].badge}</span>
                <span>•</span>
                <span>تأكيد فوري</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
                {steps[activeStep - 1].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {activeStep === 1 &&
                  "اختر التخصص المطلوب وتصفح الخدمات الفرعية. نوفر لك تفاصيل شفافة عن المهام المتضمنة، والمعدات المطلوبة، والوقت المقدر لإنجاز العمل."}
                {activeStep === 2 &&
                  "حدّد التاريخ والوقت المناسبين لجدولك. تتيح لك المنصة حجز موعد مسبق أو طلب خدمة فورية مستعجلة للتدخل السريع خلال 30 دقيقة."}
                {activeStep === 3 &&
                  "أدخل عنوانك بدقة متناهية (الولاية، البلدية، رقم المبنى والشقة)، مع إمكانية كتابة ملاحظات خاصة للفني أو إرفاق صورة العطل."}
                {activeStep === 4 &&
                  "اختر طريقة الدفع المناسبة لك بكل طمأنينة: نقدًا للفني عند الرضا عن العمل، أو إلكترونيًا عبر بوابة Chargily Pay الداعمة للبطاقة الذهبية و CIB."}
                {activeStep === 5 &&
                  "يصلك تأكيد فوري عبر رسالة SMS وواتساب متضمنًا رمز الحجز السري، وبيانات الفني وصورته ورقم هاتفه، مع رابط التتبع المباشر."}
              </p>

              {/* Guarantees Box */}
              <div className="rounded-md bg-slate-800 p-3.5 space-y-2 mb-6 border border-slate-700">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>ضمان إعادة الصيانة مجانًا في حال عدم الرضا</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-normal">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>إلغاء وتعديل الموعد مجاني حتى ساعتين قبل الموعد</span>
                </div>
              </div>
            </div>

            {/* Stepper Navigation buttons */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                disabled={activeStep === 1}
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                className="px-3.5 py-1.5 rounded-md border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
              >
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-0" />
                <span>الخطوة السابقة</span>
              </button>

              <button
                type="button"
                disabled={activeStep === steps.length}
                onClick={() =>
                  setActiveStep((prev) => Math.min(steps.length, prev + 1))
                }
                className="px-4 py-1.5 rounded-md bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
              >
                <span>الخطوة التالية</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
              </button>
            </div>
          </div>

          {/* Mobile Device Frame Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[310px] rounded-xl bg-slate-950 border border-slate-700 p-2.5 shadow-md">
              {/* Phone Speaker Notch */}
              <div className="w-20 h-2 bg-slate-900 rounded-full mx-auto mb-2" />

              {/* Screen Content Area */}
              <div className="rounded-lg bg-white text-slate-900 p-3.5 min-h-[430px] flex flex-col justify-between border border-slate-200 text-start">
                <AnimatePresence mode="wait">
                  {/* STEP 1 SCREEN */}
                  {activeStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-xs font-bold text-slate-900">
                          اختر الخدمة
                        </span>
                        <span className="text-[10px] text-amber-700 font-semibold">
                          1 من 5
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="rounded-md p-2 bg-amber-50 border border-amber-300 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">⚡</span>
                            <div>
                              <span className="text-xs font-bold block text-slate-900">
                                صيانة كهرباء
                              </span>
                              <span className="text-[10px] text-slate-500">
                                إصلاح قواطع وإنارة
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-amber-700">
                            ✓ محدد
                          </span>
                        </div>

                        <div className="rounded-md p-2 bg-slate-50 border border-slate-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">💧</span>
                            <div>
                              <span className="text-xs font-semibold block text-slate-800">
                                سباكة وصحي
                              </span>
                              <span className="text-[10px] text-slate-400">
                                كشف تسربات
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-500">اختر</span>
                        </div>

                        <div className="rounded-md p-2 bg-slate-50 border border-slate-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">✨</span>
                            <div>
                              <span className="text-xs font-semibold block text-slate-800">
                                تنظيف عميق
                              </span>
                              <span className="text-[10px] text-slate-400">
                                شقق وفلل
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-500">اختر</span>
                        </div>
                      </div>

                      <div className="pt-1">
                        <span className="text-[10px] text-slate-400 block mb-1">
                          تفاصيل المشكلة (اختياري)
                        </span>
                        <div className="rounded-md bg-slate-50 border border-slate-200 p-2 text-[11px] text-slate-600">
                          انقطاع في القاطع الرئيسي للمطبخ
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 SCREEN */}
                  {activeStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-xs font-bold text-slate-900">
                          تحديد الموعد
                        </span>
                        <span className="text-[10px] text-amber-700 font-semibold">
                          2 من 5
                        </span>
                      </div>

                      <div className="rounded-md bg-slate-50 p-2 border border-slate-200">
                        <span className="text-[10px] font-semibold text-slate-500 block mb-1.5">
                          الأيام المتاحة
                        </span>
                        <div className="grid grid-cols-3 gap-1 text-center">
                          <div className="rounded p-1 bg-amber-500 text-slate-950 font-bold text-[10px]">
                            اليوم
                            <span className="block text-[8px]">25 سبتمبر</span>
                          </div>
                          <div className="rounded p-1 bg-white border border-slate-200 text-slate-700 text-[10px]">
                            غداً
                            <span className="block text-[8px] text-slate-400">
                              26 سبتمبر
                            </span>
                          </div>
                          <div className="rounded p-1 bg-white border border-slate-200 text-slate-700 text-[10px]">
                            السبت
                            <span className="block text-[8px] text-slate-400">
                              27 سبتمبر
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-md bg-slate-50 p-2 border border-slate-200">
                        <span className="text-[10px] font-semibold text-slate-500 block mb-1.5">
                          الفترة المفضلة
                        </span>
                        <div className="space-y-1">
                          <div className="p-1.5 rounded bg-amber-50 border border-amber-300 flex items-center justify-between text-[10px] font-bold text-slate-900">
                            <span>صباحاً (09:00 - 12:00)</span>
                            <span className="text-amber-700">✓</span>
                          </div>
                          <div className="p-1.5 rounded bg-white border border-slate-200 text-[10px] text-slate-600 flex items-center justify-between">
                            <span>مساءً (14:00 - 18:00)</span>
                            <span className="text-slate-400">متاح</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 SCREEN */}
                  {activeStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-xs font-bold text-slate-900">
                          عنوان المنزل
                        </span>
                        <span className="text-[10px] text-amber-700 font-semibold">
                          3 من 5
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="rounded-md bg-slate-50 p-2 border border-slate-200">
                          <span className="text-[9px] text-slate-400 block">
                            المدينة / البلدية
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            الجزائر العاصمة · الأبيار
                          </span>
                        </div>
                        <div className="rounded-md bg-slate-50 p-2 border border-slate-200">
                          <span className="text-[9px] text-slate-400 block">
                            الشارع والمبنى
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            شارع ديدوش، عمارة 14، طابق 3
                          </span>
                        </div>
                        <div className="rounded-md bg-slate-50 p-2 border border-slate-200">
                          <span className="text-[9px] text-slate-400 block">
                            رقم الهاتف للتواصل
                          </span>
                          <span
                            dir="ltr"
                            className="text-xs font-mono font-bold text-slate-900 inline-block"
                          >
                            +213 550 12 34 56
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4 SCREEN */}
                  {activeStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-xs font-bold text-slate-900">
                          طريقة الدفع
                        </span>
                        <span className="text-[10px] text-amber-700 font-semibold">
                          4 من 5
                        </span>
                      </div>

                      <div className="space-y-2">
                        {/* Option 1: Chargily Pay */}
                        <div className="rounded-md p-2 bg-amber-50 border border-amber-300">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">
                              Chargily Pay
                            </span>
                            <span className="text-[9px] bg-amber-500 text-slate-950 font-bold px-1 py-0.2 rounded">
                              موصى به
                            </span>
                          </div>
                          <span className="text-[10px] text-amber-800 font-medium block mt-0.5">
                            بطاقة إيداهبية / CIB (دفع فوري)
                          </span>
                        </div>

                        {/* Option 2: Cash on satisfaction */}
                        <div className="rounded-md p-2 bg-slate-50 border border-slate-200">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-800">
                              الدفع نقدًا للفني
                            </span>
                            <span className="text-[9px] bg-slate-200 text-slate-700 px-1 py-0.2 rounded">
                              عند الرضا
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500 block mt-0.5">
                            سلّم المبلغ للفني بعد إنهاء العمل
                          </span>
                        </div>
                      </div>

                      <div className="rounded-md bg-slate-50 border border-slate-200 p-2 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-600">
                          الإجمالي التقديري:
                        </span>
                        <span className="font-bold text-slate-900 text-xs">
                          2,500 د.ج
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 5 SCREEN */}
                  {activeStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-2.5 text-center"
                    >
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>

                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          تم تأكيد حجزك بنجاح!
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">
                          رقم الطلب: #DZ-89421
                        </span>
                      </div>

                      <div className="rounded-md bg-slate-50 p-2 border border-slate-200 text-start text-[10px] space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-500">الفني المعين:</span>
                          <span className="font-semibold text-slate-900">
                            أحمد بن علي (كهربائي)
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">الموعد:</span>
                          <span className="font-semibold text-slate-900">
                            اليوم · 14:30
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">طريقة الدفع:</span>
                          <span className="font-semibold text-emerald-700">
                            عند الرضا
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] text-slate-400 block">
                        أُرسلت تفاصيل الحجز عبر SMS وواتساب
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom App Bar */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-400">
                  <span>منصة إحجزلي 2026</span>
                  <span className="text-emerald-700 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    متصل
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
