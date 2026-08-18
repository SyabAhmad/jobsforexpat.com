"use client";

import { useState } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

const allCountries = [
  { name: "United Arab Emirates", expats: "28,500+", flag: "🇦🇪", jobs: 3200, housing: 1800, services: 950, slug: "united-arab-emirates" },
  { name: "Thailand", expats: "22,000+", flag: "🇹🇭", jobs: 2100, housing: 2400, services: 680, slug: "thailand" },
  { name: "Saudi Arabia", expats: "18,000+", flag: "🇸🇦", jobs: 2800, housing: 1500, services: 720, slug: "saudi-arabia" },
  { name: "Singapore", expats: "15,500+", flag: "🇸🇬", jobs: 1900, housing: 1100, services: 540, slug: "singapore" },
  { name: "United Kingdom", expats: "14,200+", flag: "🇬🇧", jobs: 4200, housing: 2200, services: 1100, slug: "united-kingdom" },
  { name: "Germany", expats: "12,800+", flag: "🇩🇪", jobs: 1600, housing: 980, services: 450, slug: "germany" },
  { name: "Malaysia", expats: "11,500+", flag: "🇲🇾", jobs: 1200, housing: 1400, services: 380, slug: "malaysia" },
  { name: "France", expats: "10,200+", flag: "🇫🇷", jobs: 1500, housing: 1300, services: 420, slug: "france" },
  { name: "Qatar", expats: "9,800+", flag: "🇶🇦", jobs: 1100, housing: 780, services: 310, slug: "qatar" },
  { name: "Netherlands", expats: "8,500+", flag: "🇳🇱", jobs: 1300, housing: 890, services: 390, slug: "netherlands" },
  { name: "Australia", expats: "8,200+", flag: "🇦🇺", jobs: 1800, housing: 1600, services: 520, slug: "australia" },
  { name: "Japan", expats: "7,500+", flag: "🇯🇵", jobs: 980, housing: 720, services: 340, slug: "japan" },
];

export default function CountriesPage() {
  const [search, setSearch] = useState("");

  const filtered = allCountries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageLayout title="Countries" subtitle="Explore expat communities around the world">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        {/* Search */}
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg px-5 py-3 mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#999] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search countries..."
              className="w-full bg-transparent text-[14px] text-[#191919] dark:text-white placeholder-[#999] outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{filtered.length} countries</span>
        </div>

        {/* Countries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((country) => (
            <div key={country.name} className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-5 hover:border-[#0a66c2] transition-colors">
              <Link href={`/countries/${country.slug}`} className="flex items-center gap-3 mb-4">
                <span className="text-[32px]">{country.flag}</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#191919] dark:text-white hover:text-[#0a66c2] transition-colors">{country.name}</h3>
                  <p className="text-[12px] text-[#0a66c2] font-medium">{country.expats} expats</p>
                </div>
              </Link>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#e5e5e5] dark:border-[#333]">
                <Link href={`/jobs?country=${country.slug}`} className="text-center hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] rounded py-1 transition-colors">
                  <p className="text-[16px] font-bold text-[#191919] dark:text-white">{country.jobs.toLocaleString()}</p>
                  <p className="text-[10px] text-[#999]">Jobs</p>
                </Link>
                <div className="text-center">
                  <p className="text-[16px] font-bold text-[#191919] dark:text-white">{country.housing.toLocaleString()}</p>
                  <p className="text-[10px] text-[#999]">Housing</p>
                </div>
                <div className="text-center">
                  <p className="text-[16px] font-bold text-[#191919] dark:text-white">{country.services.toLocaleString()}</p>
                  <p className="text-[10px] text-[#999]">Services</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}