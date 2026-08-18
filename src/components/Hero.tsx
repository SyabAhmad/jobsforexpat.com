"use client";

import { useState, useRef, useEffect } from "react";

const categories = [
  { id: "all", label: "All Categories" },
  { id: "items-for-sale", label: "Items For Sale" },
  { id: "items-wanted", label: "Items Wanted" },
  { id: "learning", label: "Learning" },
  { id: "childcare", label: "Childcare" },
  { id: "jobs", label: "Jobs" },
  { id: "job-seekers", label: "Job Seekers" },
  { id: "housing", label: "Housing" },
  { id: "commercial-property", label: "Commercial Property" },
  { id: "plots", label: "Plots" },
  { id: "housing-wanted", label: "Housing Wanted" },
  { id: "community", label: "Community" },
  { id: "temp-jobs", label: "Temp Jobs" },
  { id: "business", label: "Business" },
  { id: "services", label: "Services" },
];

export function Hero() {
  const [active, setActive] = useState(categories[0]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = categories.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white dark:bg-[#1d1d1d] border-b border-[#e5e5e5] dark:border-[#333]">
      <div className="max-w-[1128px] mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-[28px] sm:text-[34px] font-semibold text-[#191919] dark:text-white leading-tight">
            What are you looking for?
          </h1>
          <p className="text-[15px] text-[#666] dark:text-[#b0b0b0] mt-2">
            100,000+ expats · 190+ countries · Jobs, housing, services & more
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-[860px] mx-auto bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded-lg p-2">
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Category dropdown */}
            <div ref={ref} className="relative sm:w-[200px] shrink-0">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-2 px-3 py-2.5 bg-white dark:bg-[#1d1d1d] rounded border border-[#e5e5e5] dark:border-[#444] text-[13px] text-[#191919] dark:text-white hover:border-[#0a66c2] transition-colors"
              >
                <span className="truncate">{active.label}</span>
                <svg className={`w-3.5 h-3.5 text-[#999] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#444] rounded-lg shadow-lg z-50 overflow-hidden">
                  <div className="px-3 py-2 border-b border-[#e5e5e5] dark:border-[#333]">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search categories..."
                      className="w-full bg-transparent text-[13px] text-[#191919] dark:text-white placeholder-[#999] outline-none"
                      autoFocus
                    />
                  </div>
                  <div className="max-h-[220px] overflow-y-auto">
                    {filtered.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setActive(cat); setOpen(false); setSearch(""); }}
                        className={`w-full text-left px-3 py-2 text-[13px] transition-colors ${active.id === cat.id ? "bg-[#e5f0fb] dark:bg-[#0a66c2]/20 text-[#0a66c2] font-medium" : "text-[#191919] dark:text-[#e5e5e5] hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a]"}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px bg-[#e5e5e5] dark:bg-[#444] my-2" />

            {/* Search input */}
            <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-white dark:bg-[#1d1d1d] rounded border border-[#e5e5e5] dark:border-[#444] focus-within:border-[#0a66c2] transition-colors">
              <svg className="w-4 h-4 text-[#999] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={`Search ${active.label.toLowerCase()}...`}
                className="w-full bg-transparent text-[14px] text-[#191919] dark:text-white placeholder-[#999] outline-none"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px bg-[#e5e5e5] dark:bg-[#444] my-2" />

            {/* Location */}
            <div className="flex items-center gap-2 px-3 py-2.5 bg-white dark:bg-[#1d1d1d] rounded border border-[#e5e5e5] dark:border-[#444] sm:w-[180px] focus-within:border-[#0a66c2] transition-colors">
              <svg className="w-4 h-4 text-[#999] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                placeholder="City or country"
                className="w-full bg-transparent text-[14px] text-[#191919] dark:text-white placeholder-[#999] outline-none"
              />
            </div>

            {/* Search button */}
            <button className="px-6 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white text-[14px] font-semibold rounded transition-colors shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Popular tags */}
        <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
          <span className="text-[11px] text-[#999]">Popular:</span>
          {["Dubai", "London", "Bangkok", "Singapore", "Remote", "Berlin"].map((tag) => (
            <button
              key={tag}
              className="text-[11px] text-[#666] dark:text-[#b0b0b0] hover:text-[#0a66c2] px-2 py-0.5 rounded border border-[#e5e5e5] dark:border-[#444] hover:border-[#0a66c2] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}