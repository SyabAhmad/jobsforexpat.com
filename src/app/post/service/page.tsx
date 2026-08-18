"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

export default function PostServicePage() {
  const [form, setForm] = useState({ title: "", category: "Legal & Visa", price: "", location: "", description: "" });
  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <PageLayout title="List a Service" subtitle="Offer your services to the expat community">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="max-w-[700px] mx-auto">
          <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
            <div className="space-y-5">
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Service Title *</label>
                <input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Visa Processing Service" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Category *</label>
                  <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Legal & Visa</option>
                    <option>Relocation</option>
                    <option>Financial & Tax</option>
                    <option>Health & Insurance</option>
                    <option>Education</option>
                    <option>Translation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Starting Price</label>
                  <input value={form.price} onChange={(e) => update("price", e.target.value)} placeholder="e.g. AED 500" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Location *</label>
                <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="e.g. Dubai, UAE" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Description *</label>
                <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={5} placeholder="Describe your service, experience, and how you help expats..." className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none resize-none" />
              </div>
              <button className="w-full px-6 py-3 bg-[#0a66c2] text-white text-[14px] font-semibold rounded-lg hover:bg-[#004182] transition-colors">Publish Service</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}