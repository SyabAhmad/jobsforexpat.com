"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function ThemeToggle({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  return (
    <button onClick={toggle} className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10" aria-label="Toggle theme">
      {isDark ? (
        <svg className="w-5 h-5 text-[#e5e5e5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    let dark = false;
    if (saved === "dark") dark = true;
    else if (saved === "light") dark = false;
    else dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  const navLinks = [
    { label: "Jobs", href: "/jobs" },
    { label: "Housing", href: "/housing" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Services", href: "/services" },
    { label: "Countries", href: "/countries" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#1d1d1d] border-b border-[#e5e5e5] dark:border-[#333]">
      <div className="max-w-[1128px] mx-auto px-4 h-[52px] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <img src="/faviconandheader.png" alt="ExpatConnect" className="w-[34px] h-[34px] rounded object-cover" />
            <img src="/logoforheaderandfooter.png" alt="ExpatConnect" className={`h-[24px] object-contain hidden sm:block ${isDark ? "brightness-0 invert" : "brightness-0 invert"}`} />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-[13px] text-[#666] dark:text-[#b0b0b0] hover:text-[#191919] dark:hover:text-white rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <Link
            href="/login"
            className="hidden sm:block text-[13px] font-semibold text-[#666] dark:text-[#b0b0b0] hover:text-[#191919] dark:hover:text-white px-3 py-1.5 border border-[#666] dark:border-[#b0b0b0] rounded-full hover:border-[#191919] dark:hover:border-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/post"
            className="text-[13px] font-semibold text-white bg-[#0a66c2] hover:bg-[#004182] px-4 py-1.5 rounded-full transition-colors"
          >
            Post Ad
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10"
          >
            <svg className="w-5 h-5 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#e5e5e5] dark:border-[#333] bg-white dark:bg-[#1d1d1d] px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-[14px] text-[#666] dark:text-[#b0b0b0] hover:text-[#191919] dark:hover:text-white rounded hover:bg-black/5 dark:hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}