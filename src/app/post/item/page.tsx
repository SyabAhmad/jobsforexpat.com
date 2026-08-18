"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

export default function PostItemPage() {
  const [form, setForm] = useState({ title: "", category: "Electronics", price: "", condition: "New", location: "", description: "" });
  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <PageLayout title="Sell an Item" subtitle="List items for sale to the expat community">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="max-w-[700px] mx-auto">
          <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
            <div className="space-y-5">
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Item Title *</label>
                <input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. iPhone 15 Pro Max" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Category *</label>
                  <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Vehicles</option>
                    <option>Clothing</option>
                    <option>Home Appliances</option>
                    <option>Sports</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Price *</label>
                  <input value={form.price} onChange={(e) => update("price", e.target.value)} placeholder="e.g. AED 3,500" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Condition</label>
                  <select value={form.condition} onChange={(e) => update("condition", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>New</option>
                    <option>Like New</option>
                    <option>Used - Good</option>
                    <option>Used - Fair</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Location *</label>
                  <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="e.g. Dubai, UAE" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Description *</label>
                <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={5} placeholder="Describe the item, condition, reason for selling..." className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none resize-none" />
              </div>
              <button className="w-full px-6 py-3 bg-[#0a66c2] text-white text-[14px] font-semibold rounded-lg hover:bg-[#004182] transition-colors">Publish Listing</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}