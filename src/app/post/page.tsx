"use client";

import { useState } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

const postTypes = [
  { id: "job", label: "Post a Job", icon: "💼", description: "Hire talent from 190+ countries" },
  { id: "housing", label: "Post Housing", icon: "🏠", description: "List your property for expats" },
  { id: "item", label: "Sell an Item", icon: "📦", description: "Sell goods to the expat community" },
  { id: "service", label: "List a Service", icon: "🔧", description: "Offer services to expats" },
  { id: "business", label: "Post a Business", icon: "🏢", description: "Promote your business" },
  { id: "community", label: "Community Post", icon: "👥", description: "Connect with expats" },
];

export default function PostPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <PageLayout title="Post" subtitle="Create a listing for the expat community">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="max-w-[600px] mx-auto">
          <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
            <h2 className="text-[18px] font-semibold text-[#191919] dark:text-white mb-2">What would you like to post?</h2>
            <p className="text-[13px] text-[#999] mb-6">Select a category to get started</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {postTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelected(type.id)}
                  className={`flex items-center gap-4 p-4 rounded-lg border text-left transition-all ${selected === type.id ? "border-[#0a66c2] bg-[#e5f0fb] dark:bg-[#0a66c2]/10" : "border-[#e5e5e5] dark:border-[#333] hover:border-[#0a66c2]/50"}`}
                >
                  <span className="text-[28px]">{type.icon}</span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#191919] dark:text-white">{type.label}</h3>
                    <p className="text-[12px] text-[#999] mt-0.5">{type.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {selected && (
              <div className="mt-6 pt-6 border-t border-[#e5e5e5] dark:border-[#333]">
                <Link
                  href={`/post/${selected}`}
                  className="block w-full text-center px-6 py-3 bg-[#0a66c2] text-white text-[14px] font-semibold rounded-lg hover:bg-[#004182] transition-colors"
                >
                  Continue
                </Link>
              </div>
            )}

            <p className="text-[11px] text-[#999] text-center mt-4">
              By posting, you agree to our <Link href="/terms" className="text-[#0a66c2] hover:underline">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}