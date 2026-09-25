import React from "react";
import { Wrench, MapPin, Phone, Mail, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-14 pb-10 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Col (lg:col-span-2) */}
          <div className="lg:col-span-2 text-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-500 text-slate-950">
                <Wrench className="h-4 w-4 stroke-[2]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                إحجزلي
                <span className="text-[10px] font-semibold text-amber-400 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.2">
                  DZ
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm mb-4">
              المنصة الجزائرية الرائدة لحجز خدمات الصيانة والتنظيف المنزلي بنقرة
              واحدة. فنيون معتمدون، أسعار شفافة، وضمان كامل للجودة والرضا.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-normal">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>مرخّصة ومعتمدة محلياً بكامل الضمانات القانونية</span>
            </div>
          </div>

          {/* Col 1: Services */}
          <div className="text-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">الخدمات الرئيسية</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  تنظيف المنازل والفلل
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  صيانة الكهرباء والإنارة
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  السباكة وكشف التسربات
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  صيانة وشحن المكيفات
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  الصيانة العامة والتركيبات
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  الدهان والديكور الحديث
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Navigation & Company */}
          <div className="text-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">روابط سريعة</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  كيف تعمل الخدمة
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  مزايا التطبيق
                </a>
              </li>
              <li>
                <a href="#booking-flow" className="hover:text-amber-400 transition-colors">
                  طريقة الحجز
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">
                  آراء وتجارب العملاء
                </a>
              </li>
              <li>
                <a href="#provider-zone" className="text-amber-400 font-semibold hover:underline">
                  انضم كمزوّد خدمة
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Cities */}
          <div className="text-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">تواصل وتغطية</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>الجزائر، وهران، قسنطينة، عنابة، البليدة</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span dir="ltr" className="inline-block font-mono">
                  +213 (0) 550 00 11 22
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span dir="ltr" className="inline-block font-mono">
                  support@i7jazli.dz
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-start">
          <p>© 2026 منصة إحجزلي (I7jazli). جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1">
            <span>صُممت بكل</span>
            <Heart className="w-3 h-3 fill-red-500 text-red-500 inline mx-0.5" />
            <span>لتوفير أرقى تجربة صيانة للمنازل الجزائرية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
