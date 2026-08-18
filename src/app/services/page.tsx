"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

const allServices = [
  { id: 1, title: "Visa Processing", provider: "Global Visa Solutions", location: "Dubai, UAE", price: "AED 3,500", rating: "4.9", reviews: 312, category: "Legal & Immigration" },
  { id: 2, title: "Work Permit Application", provider: "Immigration Pro", location: "London, UK", price: "GBP 800", rating: "4.8", reviews: 245, category: "Legal & Immigration" },
  { id: 3, title: "International Tax Filing", provider: "Expat Tax Advisors", location: "Singapore", price: "SGD 1,200", rating: "4.7", reviews: 189, category: "Financial & Tax" },
  { id: 4, title: "Home Relocation Package", provider: "MoveRight International", location: "Bangkok, Thailand", price: "THB 25,000", rating: "4.9", reviews: 423, category: "Relocation" },
  { id: 5, title: "Health Insurance Plan", provider: "CoverGlobal", location: "Riyadh, Saudi Arabia", price: "SAR 800/mo", rating: "4.6", reviews: 156, category: "Health & Insurance" },
  { id: 6, title: "English Language Course", provider: "Lingua Academy", location: "Berlin, Germany", price: "EUR 200/mo", rating: "4.8", reviews: 278, category: "Education" },
  { id: 7, title: "Document Translation", provider: "TranslatePro", location: "Dubai, UAE", price: "AED 150/page", rating: "4.7", reviews: 198, category: "Translation" },
  { id: 8, title: "Residency Application", provider: "Global Visa Solutions", location: "Abu Dhabi, UAE", price: "AED 5,000", rating: "4.9", reviews: 312, category: "Legal & Immigration" },
  { id: 9, title: "Corporate Tax Advisory", provider: "Expat Tax Advisors", location: "Singapore", price: "SGD 2,500", rating: "4.7", reviews: 189, category: "Financial & Tax" },
  { id: 10, title: "Pet Relocation", provider: "PawsMoving", location: "Bangkok, Thailand", price: "THB 45,000", rating: "4.5", reviews: 87, category: "Relocation" },
  { id: 11, title: "International School Search", provider: "EduGlobal", location: "Hong Kong", price: "HKD 5,000", rating: "4.8", reviews: 165, category: "Education" },
  { id: 12, title: "Legal Consultation", provider: "Expat Law Firm", location: "London, UK", price: "GBP 250/hr", rating: "4.6", reviews: 134, category: "Legal & Immigration" },
];

const categories = ["All", "Legal & Immigration", "Financial & Tax", "Relocation", "Health & Insurance", "Education", "Translation"];

export default function ServicesPage() {
  const [cat, setCat] = useState("All");

  const filtered = allServices.filter((s) => cat === "All" || s.category === cat);

  return (
    <PageLayout title="Services" subtitle="Find verified professionals and companies serving expats">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        {/* Filters */}
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg px-5 py-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-[12px] text-[#999] shrink-0">Category:</span>
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-3 py-1 text-[12px] font-medium rounded-full whitespace-nowrap transition-colors ${cat === c ? "bg-[#0a66c2] text-white" : "text-[#666] dark:text-[#b0b0b0] hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] border border-[#e5e5e5] dark:border-[#444]"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{filtered.length} services</span>
        </div>

        {/* Services list */}
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
          <div className="divide-y divide-[#e5e5e5] dark:divide-[#333]">
            {filtered.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.id}`}
                className="flex gap-4 px-5 py-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="w-[48px] h-[48px] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 rounded flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0a66c2]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[14px] font-semibold text-[#191919] dark:text-white">{service.title}</h3>
                  <p className="text-[12px] text-[#999] mt-0.5">{service.provider} · {service.location}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-[12px] text-[#666] dark:text-[#b0b0b0]">{service.price}</span>
                    <span className="text-[11px] text-[#0a66c2] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 px-2 py-0.5 rounded-full">{service.category}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-[12px] font-medium text-[#191919] dark:text-white">{service.rating}</span>
                  </div>
                  <p className="text-[11px] text-[#999] mt-0.5">{service.reviews} reviews</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}