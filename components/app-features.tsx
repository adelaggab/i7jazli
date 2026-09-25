"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Bell,
  MapPin,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Navigation,
  Smartphone,
  UserCheck,
  ArrowLeft,
  Sparkles,
  Award,
} from "lucide-react";

export default function AppFeatures() {
  const [providerAvailable, setProviderAvailable] = useState(true);

  return (
    <section id="features" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 mb-3">
            <Smartphone className="w-3.5 h-3.5 text-amber-600" />
            <span>تجربة رقمية مصممة لراحتك</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            تكنولوجيا متطورة تجعل صيانة بيتك <span className="text-amber-600">سلسة وآمنة</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            من لحظة الضغط على زر الحجز حتى انتهاء الفني من عمله، نضمن لك الشفافية
            التامة والمتابعة الحية في كل ثانية.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Payments & Booking Speed (col-span-12 lg:col-span-7) */}
          <div className="md:col-span-12 lg:col-span-7 rounded-lg bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                  <CreditCard className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  مرونة وأمان مالي
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
                حجز فوري ودفع آمن بعد الخدمة
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                لا تدفع سنتيماً واحداً مقدماً إلا إذا أردت ذلك. وفّرنا لك كافة
                خيارات الدفع المحلية المعتمدة مع إمكانية الإلغاء المجاني.
              </p>

              {/* Local Payment Badges Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {/* Chargily Pay Card */}
                <div className="rounded-md p-3.5 bg-amber-50/70 border border-amber-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-amber-900">
                      Chargily Pay
                    </span>
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.2 rounded">
                      شائع
                    </span>
                  </div>
                  <span className="text-xs text-amber-800 font-medium block">
                    بطاقة الذهبية / CIB
                  </span>
                  <span className="text-[10px] text-amber-700/90 mt-1 block">
                    دفع إلكتروني آمن 100%
                  </span>
                </div>

                {/* Cash on Delivery */}
                <div className="rounded-md p-3.5 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-800">
                      الدفع عند الرضا
                    </span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 font-medium px-1.5 py-0.2 rounded">
                      نقدًا
                    </span>
                  </div>
                  <span className="text-xs text-slate-700 font-medium block">
                    سلّم للفني مباشرة
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    بعد معاينة جودة العمل
                  </span>
                </div>

                {/* Free Cancellation */}
                <div className="rounded-md p-3.5 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-800">
                      إلغاء مجاني
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-xs text-slate-700 font-medium block">
                    حتى ساعتين قبل الموعد
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    بدون أي غرامات أو اقتطاع
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Trust Strip */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                تشفير دفع بمستوى بنكي
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                فاتورة إلكترونية معتمدة
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                تأكيد حجز خلال 60 ثانية
              </span>
            </div>
          </div>

          {/* Card 2: Real-time Notifications Stack (col-span-12 lg:col-span-5) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-lg bg-slate-900 text-white p-6 border border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-amber-400 border border-slate-700">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-amber-400">
                  إشعارات لحظية ذكية
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">
                أنت في الصورة أولاً بأول
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                تنبيهات فورية عبر التطبيق والرسائل تطلعك على كل خطوة من تأكيد
                الحجز حتى انتهاء العمل.
              </p>
            </div>

            {/* Stacked Notification Toasts */}
            <div className="space-y-2.5">
              {/* Notification 1 */}
              <div className="rounded-md p-3 bg-slate-800 border border-slate-700 flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="text-xs font-semibold text-white block">
                    تم تأكيد حجزك مع أحمد، فني الكهرباء
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    اليوم · الساعة 14:30 · حي الأبيار، الجزائر
                  </span>
                </div>
              </div>

              {/* Notification 2 */}
              <div className="rounded-md p-3 bg-slate-800 border border-amber-500/40 flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-amber-500 text-slate-950 font-bold">
                  <Navigation className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div className="text-start">
                  <span className="text-xs font-semibold text-amber-300 block">
                    الفني في الطريق — يصل خلال 12 دقيقة
                  </span>
                  <span className="text-[10px] text-slate-300 block mt-0.5">
                    المسافة الحالية: 2.4 كم · دراجة نارية للتنقل
                  </span>
                </div>
              </div>

              {/* Notification 3 */}
              <div className="rounded-md p-3 bg-slate-800 border border-slate-700 flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-slate-700 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-start">
                  <span className="text-xs font-semibold text-white block">
                    تمت الخدمة بنجاح! قيّم تجربتك
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    رأيك يساعدنا في الحفاظ على أعلى معايير الجودة
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Live Technician Radar / Tracking (col-span-12 lg:col-span-5) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-lg bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  تتبع مباشر بنظام GPS
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                تتبع الفني لحظة بلحظة أثناء القدوم
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                وداعًا لانتظار الفني طوال اليوم بدون موعد محدد؛ شاهد موقعه بدقة
                ووقت وصوله المتوقع مباشرة على الخريطة.
              </p>

              {/* Radar / Map View Mockup */}
              <div className="rounded-md bg-slate-900 p-4 border border-slate-800 text-white min-h-[160px] flex flex-col justify-between">
                {/* Top status bar */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    مباشر: الفني يتحرك نحوك
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">ETA: 08:24 min</span>
                </div>

                {/* Center technician marker */}
                <div className="flex items-center gap-3 my-2 bg-slate-800 rounded-md p-2.5 border border-slate-700">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-amber-500 text-slate-950 font-bold text-xs">
                    كـ.س
                  </div>
                  <div className="text-start flex-1">
                    <span className="text-xs font-bold text-white block">
                      كريم سلامي · فني سباكة
                    </span>
                    <span className="text-[10px] text-amber-400 font-medium block">
                      تقييم 4.9 ★ (184 خدمة ناجحة)
                    </span>
                  </div>
                  <div className="text-end">
                    <span className="text-xs font-bold text-white block">
                      1.2 كم
                    </span>
                    <span className="text-[10px] text-slate-400">متبقية</span>
                  </div>
                </div>

                {/* Bottom address */}
                <div className="text-[10px] text-slate-400 text-start">
                  الوجهة: <span className="text-slate-200">المرادية، شارع الإخوة بوعدو</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Provider Dashboard Preview (Two-sided Marketplace) (col-span-12 lg:col-span-7) */}
          <div
            id="provider-zone"
            className="md:col-span-12 lg:col-span-7 rounded-lg bg-slate-900 text-white p-6 border border-slate-800 shadow-sm flex flex-col justify-between"
          >
            {/* Top Info */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-amber-400 border border-slate-700">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-amber-400">
                    لوحة تحكم الفنيين والمزوّدين
                  </span>
                </div>
                <span className="text-[10px] font-bold bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">
                  Two-Sided Platform
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                منصّة متكاملة لإدارة حجوزاتك ومضاعفة أرباحك
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                هل أنت فني محترف أو صاحب شركة خدمات؟ وفّرنا لك لوحة تحكم عصرية
                تساعدك في استقبال الطلبات، تنظيم مواعيدك، واستلام مستحقاتك
                بسلاسة.
              </p>
            </div>

            {/* Provider Dashboard Mockup Frame */}
            <div className="rounded-md bg-slate-950 border border-slate-800 p-4 mb-5">
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-slate-600" />
                  <div className="h-2 w-2 rounded-full bg-slate-600" />
                  <div className="h-2 w-2 rounded-full bg-slate-600" />
                  <span className="text-slate-400 ms-1 font-mono text-[10px]">
                    app.i7jazli.dz/provider
                  </span>
                </div>

                {/* Availability Toggle */}
                <button
                  type="button"
                  onClick={() => setProviderAvailable(!providerAvailable)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-semibold transition-colors ${
                    providerAvailable
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                      : "bg-slate-800 text-slate-300 border border-slate-700"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      providerAvailable ? "bg-emerald-400" : "bg-slate-500"
                    }`}
                  />
                  <span>
                    {providerAvailable ? "متاح للطلبات الآن" : "غير متاح حالياً"}
                  </span>
                </button>
              </div>

              {/* Dashboard Metrics Bar */}
              <div className="grid grid-cols-3 gap-2.5 my-3">
                <div className="rounded bg-slate-900 p-2.5 border border-slate-800 text-start">
                  <span className="text-[10px] text-slate-400 block font-normal">
                    أرباح اليوم
                  </span>
                  <span className="text-sm sm:text-base font-bold text-amber-400">
                    18,500 د.ج
                  </span>
                </div>
                <div className="rounded bg-slate-900 p-2.5 border border-slate-800 text-start">
                  <span className="text-[10px] text-slate-400 block font-normal">
                    حجوزات مكتملة
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    4 مهام
                  </span>
                </div>
                <div className="rounded bg-slate-900 p-2.5 border border-slate-800 text-start">
                  <span className="text-[10px] text-slate-400 block font-normal">
                    معدل التقييم
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-400">
                    4.95 ★
                  </span>
                </div>
              </div>

              {/* Today's Active Tasks list */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between rounded bg-slate-900 p-2 text-xs text-start border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <div>
                      <span className="font-semibold text-white block text-xs">
                        صيانة لوحة كهرباء رئيسية
                      </span>
                      <span className="text-[10px] text-slate-400">
                        الزبون: سمير ع. · ديدوش مراد
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-amber-400 text-xs">4,500 د.ج</span>
                </div>

                <div className="flex items-center justify-between rounded bg-slate-900 p-2 text-xs text-start border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <div>
                      <span className="font-semibold text-white block text-xs">
                        تركيب سخان مائي 80L
                      </span>
                      <span className="text-[10px] text-slate-400">
                        الزبونة: أمينة م. · حيدرة
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-amber-400 text-xs">3,800 د.ج</span>
                </div>
              </div>
            </div>

            {/* Provider CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
              <span className="text-xs text-slate-400 font-normal">
                عمولات تفضيلية ودعم فني على مدار الساعة
              </span>
              <a
                href="#booking-flow"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 rounded-md px-4 py-2 transition-colors shadow-sm"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>سجّل كمزوّد خدمة معتمد</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
