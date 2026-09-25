"use client";

import React, { useState } from "react";
import { Wrench, Menu, X, ArrowLeft, UserCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav
          aria-label="التنقل الرئيسي"
          className="bg-white/95 border border-slate-200 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-sm transition-all"
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-bold">
              <Wrench className="h-4 w-4 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                إحجزلي
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5">
                  DZ
                </span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">
                منصة الخدمات المنزلية
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 font-medium text-slate-700 text-sm">
            <a
              href="#how-it-works"
              className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              كيف تعمل الخدمة
            </a>
            <a
              href="#services"
              className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              الخدمات
            </a>
            <a
              href="#features"
              className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              مزايا التطبيق
            </a>
            <a
              href="#booking-flow"
              className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              طريقة الحجز
            </a>
            <a
              href="#testimonials"
              className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              آراء العملاء
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="#provider-zone"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-md px-3 py-2 transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>انضم كمزوّد خدمة</span>
            </a>

            <a
              href="#booking-flow"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 rounded-md px-4 py-2 transition-colors shadow-sm"
            >
              <span>احجز الآن</span>
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#booking-flow"
              className="text-xs font-bold text-slate-950 bg-amber-500 rounded-md px-3 py-1.5"
            >
              احجز الآن
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="القائمة الرئيسية"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col gap-1.5 font-medium text-slate-800">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-sm"
            >
              كيف تعمل الخدمة
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-sm"
            >
              الخدمات المتاحة
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-sm"
            >
              مزايا المنصة
            </a>
            <a
              href="#booking-flow"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-sm"
            >
              خطوات الحجز
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-sm"
            >
              آراء العملاء
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#provider-zone"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>سجّل كمزوّد خدمة</span>
              </a>
              <a
                href="#booking-flow"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 rounded-md bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-600 transition-colors"
              >
                <span>احجز خدمتك الآن</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
