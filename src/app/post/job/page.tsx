"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";

export default function PostJobPage() {
  const [form, setForm] = useState({ title: "", company: "", location: "", type: "Full-time", salary: "", description: "", category: "Tech", experience: "Mid", remote: "On-site", tags: "" });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <PageLayout title="Post a Job" subtitle="Reach 100,000+ expats in 190+ countries">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="max-w-[700px] mx-auto">
          <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
            <div className="space-y-5">
              {/* Job Title */}
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Job Title *</label>
                <input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Senior Software Engineer" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>

              {/* Company */}
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Company Name *</label>
                <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="e.g. TechCorp Global" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>

              {/* Location & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Location *</label>
                  <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="e.g. Dubai, UAE" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Job Type *</label>
                  <select value={form.type} onChange={(e) => update("type", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Freelance</option>
                    <option>Remote</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>

              {/* Salary & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Salary Range</label>
                  <input value={form.salary} onChange={(e) => update("salary", e.target.value)} placeholder="e.g. AED 45K–65K/mo" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Category *</label>
                  <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Tech</option>
                    <option>Education</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Hospitality</option>
                    <option>Design</option>
                    <option>HR</option>
                    <option>Engineering</option>
                    <option>Sales</option>
                    <option>Healthcare</option>
                    <option>Logistics</option>
                  </select>
                </div>
              </div>

              {/* Experience & Remote */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Experience Level</label>
                  <select value={form.experience} onChange={(e) => update("experience", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>Junior</option>
                    <option>Mid</option>
                    <option>Senior</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Work Setup</label>
                  <select value={form.remote} onChange={(e) => update("remote", e.target.value)} className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none">
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Tags (comma separated)</label>
                <input value={form.tags} onChange={(e) => update("tags", e.target.value)} placeholder="e.g. Visa Sponsorship, Housing Included" className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none" />
              </div>

              {/* Description */}
              <div>
                <label className="text-[12px] font-medium text-[#191919] dark:text-white mb-1.5 block">Job Description *</label>
                <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={6} placeholder="Describe the role, responsibilities, and what you're looking for..." className="w-full px-3 py-2 text-[13px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded focus:border-[#0a66c2] outline-none resize-none" />
              </div>

              {/* Preview */}
              <div className="bg-[#f5f5f5] dark:bg-[#2d2d2d] rounded-lg p-4">
                <h3 className="text-[12px] font-medium text-[#999] uppercase tracking-wider mb-2">Preview</h3>
                <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-4">
                  <h4 className="text-[14px] font-semibold text-[#191919] dark:text-white">{form.title || "Job Title"}</h4>
                  <p className="text-[12px] text-[#666] dark:text-[#b0b0b0]">{form.company || "Company"} · {form.location || "Location"}</p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-[#999]">
                    <span>{form.type}</span>
                    <span>·</span>
                    <span>{form.remote}</span>
                    <span>·</span>
                    <span>{form.experience}</span>
                  </div>
                  {form.salary && <p className="text-[13px] font-medium text-[#191919] dark:text-white mt-2">{form.salary}</p>}
                  {form.tags && (
                    <div className="flex items-center gap-1 mt-2 flex-wrap">
                      {form.tags.split(",").map((t, i) => t.trim() && <span key={i} className="text-[10px] font-medium text-[#0a66c2] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 px-2 py-0.5 rounded-full">{t.trim()}</span>)}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-2">
                <button className="flex-1 px-6 py-3 bg-[#0a66c2] text-white text-[14px] font-semibold rounded-lg hover:bg-[#004182] transition-colors">Publish Job</button>
                <button className="px-6 py-3 border border-[#e5e5e5] dark:border-[#444] text-[14px] font-medium text-[#666] dark:text-[#b0b0b0] rounded-lg hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors">Save Draft</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}