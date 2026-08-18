"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const columns = {
  "Find Jobs": [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Remote Jobs", href: "/jobs" },
    { label: "Visa Sponsorship", href: "/jobs" },
    { label: "Post a Job", href: "/post" },
  ],
  Housing: [
    { label: "Browse Listings", href: "/housing" },
    { label: "Furnished", href: "/housing" },
    { label: "Short Stay", href: "/housing" },
    { label: "Post Listing", href: "/post" },
  ],
  Marketplace: [
    { label: "Browse Items", href: "/marketplace" },
    { label: "Electronics", href: "/marketplace" },
    { label: "Vehicles", href: "/marketplace" },
    { label: "Sell an Item", href: "/post" },
  ],
  Services: [
    { label: "Browse Services", href: "/services" },
    { label: "Legal & Visa", href: "/services" },
    { label: "Relocation", href: "/services" },
    { label: "List Service", href: "/post" },
  ],
  Company: [
    { label: "About", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Contact", href: "/" },
  ],
};

export function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-white dark:bg-[#1d1d1d] border-t border-[#e5e5e5] dark:border-[#333]">
      <div className="max-w-[1128px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-3">
              <img src="/faviconandheader.png" alt="ExpatConnect" className="w-[28px] h-[28px] rounded object-cover" />
              <img src="/logoforheaderandfooter.png" alt="ExpatConnect" className={`h-[20px] object-contain ${isDark ? "brightness-0 invert" : ""}`} />
            </Link>
            <p className="text-[12px] text-[#999] leading-relaxed">
              The global platform for expatriates. Jobs, housing, services, and community in 190+ countries.
            </p>
            <p className="text-[11px] text-[#ccc] dark:text-[#555] mt-4">
              © 2026 ExpatConnect
            </p>
          </div>

          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold text-[#191919] dark:text-white mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[12px] text-[#666] dark:text-[#b0b0b0] hover:text-[#0a66c2] hover:underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#e5e5e5] dark:border-[#333] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[11px] text-[#999] hover:text-[#0a66c2] hover:underline">Privacy</Link>
            <Link href="/" className="text-[11px] text-[#999] hover:text-[#0a66c2] hover:underline">Terms</Link>
            <Link href="/" className="text-[11px] text-[#999] hover:text-[#0a66c2] hover:underline">Accessibility</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#999] hover:text-[#0a66c2]">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#999] hover:text-[#0a66c2]">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#999] hover:text-[#0a66c2]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}