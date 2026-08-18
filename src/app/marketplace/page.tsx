"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

const allItems = [
  { id: 1, title: "iPhone 15 Pro Max 256GB", price: "AED 4,500", location: "Dubai, UAE", condition: "Like New", category: "Electronics" },
  { id: 2, title: "MacBook Pro M3 14\" 16GB", price: "GBP 2,800", location: "London, UK", condition: "Excellent", category: "Electronics" },
  { id: 3, title: "IKEA Sofa + Coffee Table Set", price: "SAR 1,200", location: "Riyadh, KSA", condition: "Good", category: "Furniture" },
  { id: 4, title: "Canon EOS R6 Mark II + Lens", price: "THB 8,500", location: "Bangkok, TH", condition: "Like New", category: "Electronics" },
  { id: 5, title: "2022 Toyota Camry SE", price: "AED 55,000", location: "Abu Dhabi, UAE", condition: "Excellent", category: "Vehicles" },
  { id: 6, title: "Standing Desk + Herman Miller Chair", price: "SGD 600", location: "Singapore", condition: "Good", category: "Furniture" },
  { id: 7, title: "Samsung 65\" 4K Smart TV", price: "QAR 3,200", location: "Doha, Qatar", condition: "Like New", category: "Electronics" },
  { id: 8, title: "IKEA Bed Frame + Mattress", price: "EUR 450", location: "Berlin, DE", condition: "Good", category: "Furniture" },
  { id: 9, title: "PlayStation 5 + 2 Controllers", price: "AED 1,800", location: "Dubai, UAE", condition: "Excellent", category: "Electronics" },
  { id: 10, title: "Dining Table + 6 Chairs", price: "SAR 2,000", location: "Jeddah, KSA", condition: "Good", category: "Furniture" },
  { id: 11, title: "2021 Honda Civic", price: "SGD 42,000", location: "Singapore", condition: "Excellent", category: "Vehicles" },
  { id: 12, title: "Dyson V15 Vacuum Cleaner", price: "GBP 350", location: "London, UK", condition: "Like New", category: "Electronics" },
];

const categories = ["All", "Electronics", "Furniture", "Vehicles"];

export default function MarketplacePage() {
  const [cat, setCat] = useState("All");

  const filtered = allItems.filter((i) => cat === "All" || i.category === cat);

  return (
    <PageLayout title="Marketplace" subtitle="Buy and sell within the expat community">
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
          <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{filtered.length} items</span>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <a
              key={item.id}
              href={`/marketplace/${item.id}`}
              className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg overflow-hidden hover:border-[#0a66c2] transition-colors"
            >
              <div className="h-[140px] bg-[#f5f5f5] dark:bg-[#2d2d2d] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#ccc] dark:text-[#555]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="p-3">
                <h3 className="text-[13px] font-medium text-[#191919] dark:text-white line-clamp-2 leading-snug min-h-[34px]">{item.title}</h3>
                <p className="text-[11px] text-[#999] mt-1">{item.location}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[14px] font-bold text-[#191919] dark:text-white">{item.price}</span>
                  <span className="text-[9px] text-[#999] bg-[#f5f5f5] dark:bg-[#2d2d2d] px-1.5 py-0.5 rounded">{item.condition}</span>
                </div>
                <span className="inline-block text-[10px] text-[#0a66c2] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 px-2 py-0.5 rounded mt-2">{item.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}