"use client";

import React from "react";
import {
  Star,
  Quote,
  MapPin,
  HeartHandshake,
} from "lucide-react";

const stats = [
  {
    value: "4.8",
    suffix: "/ 5",
    label: "متوسط تقييم العملاء",
    subtext: "من أكثر من 3,400 مراجعة معتمدة",
  },
  {
    value: "+15,000",
    suffix: "",
    label: "حجز منزلي ناجح",
    subtext: "بنسبة إتمام تجاوزت 99.2%",
  },
  {
    value: "+800",
    suffix: "",
    label: "فنّي محترف ومعتمد",
    subtext: "فحص مهني وأمني صارم قبل القبول",
  },
  {
    value: "+20",
    suffix: "ولاية",
    label: "تغطية جغرافية واسعة",
    subtext: "الجزائر، وهران، قسنطينة، عنابة والمزيد",
  },
];

const reviews = [
  {
    id: 1,
    name: "ياسمين بلحاج",
    role: "ربة منزل",
    city: "الجزائر العاصمة (حيدرة)",
    service: "تنظيف عميق للشقة",
    rating: 5,
    date: "منذ 4 أيام",
    content:
      "طلبت خدمة تنظيف عميق قبل استقبال عائلتي. الفريق وصل في الوقت تماماً مع معدات احترافية ومواد تعقيم ممتازة. الشقة أصبحت كأنها جديدة في 4 ساعات فقط. بالتأكيد سأكرر التجربة!",
  },
  {
    id: 2,
    name: "مراد بن سالم",
    role: "مهندس معماري",
    city: "وهران (السانية)",
    service: "صيانة طارئة للسباكة",
    rating: 5,
    date: "منذ أسبوع",
    content:
      "حدث تسرب مفاجئ في أنبوب المياه الرئيسي منتصف الليل. حجزت عبر التطبيق ووصلني الفني كريم في أقل من 25 دقيقة. أصلح العطل بدون أي تكسير زائد والدفع كان بالبطاقة الذهبية بكل سلاسة.",
  },
  {
    id: 3,
    name: "فاطمة الزهراء قادري",
    role: "طبيبة أطفال",
    city: "قسنطينة (علي منجلي)",
    service: "صيانة وشحن مكيفات",
    rating: 5,
    date: "منذ أسبوعين",
    content:
      "أفضل منصة صيانة جربتها في الجزائر. الفني كان في قمة الاحترام والاحترافية، فحص غاز المكيفين وشحنهما ونظف الفلاتر بالكامل. الشفافية في السعر هي ما جعلني أثق فيهم.",
  },
  {
    id: 4,
    name: "كريم بوعزيز",
    role: "صاحب عمل حر",
    city: "البليدة (أولاد يعيش)",
    service: "تجديد تمديدات الكهرباء",
    rating: 5,
    date: "منذ 3 أسابيع",
    content:
      "كانت لدي مشكلة مزمنة في قواطع الكهرباء كلما شغلت الفرن أو الغسالة. فني إحجزلي رتب اللوحة بالكامل وغيّر القواطع التالفة بضمان رسمي. راحة بال تستحق كل دينار.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Stats Bar */}
        <div className="rounded-lg bg-slate-900 text-white p-6 sm:p-8 mb-14 border border-slate-800 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-800">
            {stats.map((item, idx) => (
              <div key={idx} className={idx > 1 ? "pt-5 lg:pt-0" : ""}>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight flex items-center justify-center gap-1">
                  <span>{item.value}</span>
                  {item.suffix && (
                    <span className="text-base text-slate-300 font-normal">
                      {item.suffix}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-white">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
            <span>ثقة نبنيها مع كل منزل</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            تجارب حقيقية من <span className="text-amber-600">عائلات تثق بنا</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            اقرأ كيف ساعدت منصة إحجزلي آلاف الأسر في التخلص من عناء البحث عن فنيين
            موثوقين وضمان حقوقهم.
          </p>
        </div>

        {/* Testimonials 4-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-lg bg-white p-6 border border-slate-200 shadow-sm"
            >
              <div>
                {/* Header: Stars + Service Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                    {rev.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-5 relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-3 -start-2 -z-10" />
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 text-amber-400 font-bold text-xs border border-slate-700">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="text-start">
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 block">
                      {rev.name}
                    </span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {rev.city}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
