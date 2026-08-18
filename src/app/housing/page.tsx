"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

const allListings = [
  { id: 1, title: "Modern 2BR Apartment", location: "Dubai Marina, UAE", price: "AED 12,000/mo", beds: 2, baths: 2, tags: ["Furnished", "Pool", "Gym"], type: "Apartment" },
  { id: 2, title: "Luxury Villa with Pool", location: "Thonglor, Bangkok", price: "THB 45,000/mo", beds: 3, baths: 3, tags: ["Private Pool", "Garden"], type: "Villa" },
  { id: 3, title: "Cozy Studio near BTS", location: "Sukhumvit, Bangkok", price: "THB 15,000/mo", beds: 1, baths: 1, tags: ["Near BTS", "Utilities Incl"], type: "Studio" },
  { id: 4, title: "Penthouse City View", location: "Riyadh, Saudi Arabia", price: "SAR 25,000/mo", beds: 3, baths: 2, tags: ["City View", "Concierge"], type: "Penthouse" },
  { id: 5, title: "Family Home in Compound", location: "Jeddah, Saudi Arabia", price: "SAR 18,000/mo", beds: 4, baths: 3, tags: ["Compound", "Security"], type: "House" },
  { id: 6, title: "1BR Flat near Metro", location: "Singapore", price: "SGD 3,500/mo", beds: 1, baths: 1, tags: ["Near MRT", "Furnished"], type: "Apartment" },
  { id: 7, title: "Beachfront Condo", location: "Pattaya, Thailand", price: "THB 22,000/mo", beds: 2, baths: 2, tags: ["Beach View", "Pool"], type: "Condo" },
  { id: 8, title: "Studio in City Center", location: "Berlin, Germany", price: "EUR 900/mo", beds: 1, baths: 1, tags: ["Central", "Renovated"], type: "Studio" },
  { id: 9, title: "Shared Room", location: "London, UK", price: "GBP 800/mo", beds: 1, baths: 1, tags: ["Bills Incl", "Shared"], type: "Room" },
  { id: 10, title: "3BR Townhouse", location: "Abu Dhabi, UAE", price: "AED 15,000/mo", beds: 3, baths: 3, tags: ["Townhouse", "Parking"], type: "House" },
];

const types = ["All", "Apartment", "Villa", "Studio", "Penthouse", "House", "Condo", "Room"];

export default function HousingPage() {
  const [type, setType] = useState("All");

  const filtered = allListings.filter((l) => type === "All" || l.type === type);

  return (
    <PageLayout title="Housing & Accommodation" subtitle="Find your next home abroad">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        {/* Filters */}
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg px-5 py-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-[12px] text-[#999] shrink-0">Type:</span>
            {types.map((t) => (
              <button key={t} onClick={() => setType(t)} className={`px-3 py-1 text-[12px] font-medium rounded-full whitespace-nowrap transition-colors ${type === t ? "bg-[#0a66c2] text-white" : "text-[#666] dark:text-[#b0b0b0] hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] border border-[#e5e5e5] dark:border-[#444]"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{filtered.length} listings</span>
        </div>

        {/* Listings grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((listing) => (
            <a
              key={listing.id}
              href={`/housing/${listing.id}`}
              className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg overflow-hidden hover:border-[#0a66c2] transition-colors"
            >
              <div className="h-[160px] bg-[#f5f5f5] dark:bg-[#2d2d2d] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#ccc] dark:text-[#555]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-semibold text-[#191919] dark:text-white">{listing.title}</h3>
                <p className="text-[12px] text-[#999] mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {listing.location}
                </p>
                <p className="text-[12px] text-[#999] mt-0.5">{listing.beds} bed · {listing.baths} bath</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[16px] font-bold text-[#191919] dark:text-white">{listing.price}</span>
                  <span className="text-[10px] text-[#999] bg-[#f5f5f5] dark:bg-[#2d2d2d] px-2 py-0.5 rounded">{listing.type}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {listing.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-[#666] dark:text-[#b0b0b0] bg-[#f5f5f5] dark:bg-[#2d2d2d] px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}