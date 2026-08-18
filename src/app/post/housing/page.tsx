"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

export default function PostHousingPage() {
  const [form, setForm] = useState({ title: "", location: "", type: "Apartment", bedrooms: "1", price: "", furnished: "Yes", available: "", description: "" });
  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <PageLayout title="Post Housing" subtitle="List your property for the expat community">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="max-w-[700px] mx-auto">
          <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
            <div className="space-y-5">
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Listing Title *</label>
                <input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Modern 2BR Apartment in Dubai Marina" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Location *</label>
                  <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="e.g. Dubai Marina, UAE" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Property Type *</label>
                  <select value={form.type} onChange={(e) => update("type", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Studio</option>
                    <option>Room</option>
                    <option>Penthouse</option>
                    <option>Townhouse</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Bedrooms</label>
                  <select value={form.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Studio</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Monthly Rent *</label>
                  <input value={form.price} onChange={(e) => update("price", e.target.value)} placeholder="e.g. AED 8,000" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Furnished</label>
                  <select value={form.furnished} onChange={(e) => update("furnished", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Yes</option>
                    <option>Partially</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Available From</label>
                <input type="date" value={form.available} onChange={(e) => update("available", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Description *</label>
                <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={5} placeholder="Describe the property, amenities, nearby facilities..." className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none resize-none" />
              </div>
              <button className="w-full px-6 py-3 bg-[#0a66c2] text-white text-[14px] font-semibold rounded-lg hover:bg-[#004182] transition-colors">Publish Listing</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}