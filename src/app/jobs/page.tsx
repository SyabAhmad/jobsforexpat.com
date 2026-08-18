"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageLayout } from "@/components/PageLayout";

const allJobs = [
  { id: 1, title: "Senior Software Engineer", company: "TechCorp Global", location: "Dubai, UAE", country: "united-arab-emirates", type: "Full-time", salary: "AED 45K–65K/mo", posted: "2d ago", tags: ["Visa Sponsorship"], featured: true, category: "Tech", experience: "Senior", remote: "On-site", logo: "T" },
  { id: 2, title: "English Language Teacher", company: "Global Academy", location: "Bangkok, Thailand", country: "thailand", type: "Contract", salary: "THB 35K–50K/mo", posted: "1d ago", tags: ["Housing Included"], featured: false, category: "Education", experience: "Mid", remote: "On-site", logo: "G" },
  { id: 3, title: "Marketing Manager", company: "AdVenture Media", location: "London, UK", country: "united-kingdom", type: "Permanent", salary: "GBP 55K–75K/yr", posted: "3d ago", tags: ["Relocation"], featured: false, category: "Marketing", experience: "Senior", remote: "Hybrid", logo: "A" },
  { id: 4, title: "Financial Analyst", company: "GlobalFinance", location: "Singapore", country: "singapore", type: "Full-time", salary: "SGD 8K–12K/mo", posted: "5d ago", tags: ["EU Blue Card"], featured: true, category: "Finance", experience: "Mid", remote: "On-site", logo: "G" },
  { id: 5, title: "Hospitality Director", company: "LuxStay Resorts", location: "Maldives", country: "maldives", type: "Full-time", salary: "USD 6K–9K/mo", posted: "1w ago", tags: ["Accommodation"], featured: false, category: "Hospitality", experience: "Senior", remote: "On-site", logo: "L" },
  { id: 6, title: "Data Scientist", company: "Analytics Pro", location: "Berlin, Germany", country: "germany", type: "Full-time", salary: "EUR 70K–95K/yr", posted: "4d ago", tags: ["Remote"], featured: false, category: "Tech", experience: "Senior", remote: "Remote", logo: "A" },
  { id: 7, title: "Graphic Designer", company: "CreativeStudio", location: "Dubai, UAE", country: "united-arab-emirates", type: "Freelance", salary: "AED 15K–25K/mo", posted: "3d ago", tags: ["Remote"], featured: false, category: "Design", experience: "Mid", remote: "Remote", logo: "C" },
  { id: 8, title: "Restaurant Manager", company: "F&B Group", location: "Qatar", country: "qatar", type: "Full-time", salary: "QAR 18K–25K/mo", posted: "2d ago", tags: ["Meals Included"], featured: false, category: "Hospitality", experience: "Mid", remote: "On-site", logo: "F" },
  { id: 9, title: "Mobile App Developer", company: "AppWorks", location: "Remote", country: "remote", type: "Full-time", salary: "USD 5K–8K/mo", posted: "1d ago", tags: ["Remote", "Flexible Hours"], featured: true, category: "Tech", experience: "Mid", remote: "Remote", logo: "A" },
  { id: 10, title: "HR Manager", company: "Global HR Solutions", location: "Riyadh, Saudi Arabia", country: "saudi-arabia", type: "Full-time", salary: "SAR 20K–30K/mo", posted: "6d ago", tags: ["Visa Sponsorship"], featured: false, category: "HR", experience: "Senior", remote: "On-site", logo: "G" },
  { id: 11, title: "Civil Engineer", company: "BuildCorp", location: "Abu Dhabi, UAE", country: "united-arab-emirates", type: "Contract", salary: "AED 30K–45K/mo", posted: "1w ago", tags: ["Accommodation"], featured: false, category: "Engineering", experience: "Senior", remote: "On-site", logo: "B" },
  { id: 12, title: "Content Writer", company: "MediaHouse", location: "Bangkok, Thailand", country: "thailand", type: "Remote", salary: "THB 25K–40K/mo", posted: "2d ago", tags: ["Remote"], featured: false, category: "Marketing", experience: "Junior", remote: "Remote", logo: "M" },
  { id: 13, title: "DevOps Engineer", company: "CloudFirst", location: "Singapore", country: "singapore", type: "Full-time", salary: "SGD 10K–15K/mo", posted: "1d ago", tags: ["Visa Sponsorship", "Remote"], featured: true, category: "Tech", experience: "Senior", remote: "Remote", logo: "C" },
  { id: 14, title: "Product Manager", company: "InnovateTech", location: "Berlin, Germany", country: "germany", type: "Full-time", salary: "EUR 80K–110K/yr", posted: "3d ago", tags: ["Relocation"], featured: false, category: "Tech", experience: "Senior", remote: "Hybrid", logo: "I" },
  { id: 15, title: "Sales Executive", company: "GlobalTrade", location: "Dubai, UAE", country: "united-arab-emirates", type: "Full-time", salary: "AED 18K–25K/mo", posted: "4d ago", tags: ["Commission"], featured: false, category: "Sales", experience: "Mid", remote: "On-site", logo: "G" },
  { id: 16, title: "UX Designer", company: "DesignHub", location: "London, UK", country: "united-kingdom", type: "Contract", salary: "GBP 40K–60K/yr", posted: "2d ago", tags: ["Remote"], featured: false, category: "Design", experience: "Mid", remote: "Remote", logo: "D" },
  { id: 17, title: "Accountant", company: "FinancePlus", location: "Riyadh, Saudi Arabia", country: "saudi-arabia", type: "Full-time", salary: "SAR 15K–22K/mo", posted: "5d ago", tags: ["Visa Sponsorship"], featured: false, category: "Finance", experience: "Junior", remote: "On-site", logo: "F" },
  { id: 18, title: "Kitchen Chef", company: "Royal Hotels", location: "Qatar", country: "qatar", type: "Full-time", salary: "QAR 12K–18K/mo", posted: "3d ago", tags: ["Meals", "Accommodation"], featured: false, category: "Hospitality", experience: "Mid", remote: "On-site", logo: "R" },
  { id: 19, title: "Backend Developer", company: "ServerSide Inc", location: "Remote", country: "remote", type: "Full-time", salary: "USD 6K–10K/mo", posted: "1d ago", tags: ["Remote", "Flexible"], featured: true, category: "Tech", experience: "Mid", remote: "Remote", logo: "S" },
  { id: 20, title: "Construction Manager", company: "BuildCorp", location: "Abu Dhabi, UAE", country: "united-arab-emirates", type: "Contract", salary: "AED 35K–50K/mo", posted: "1w ago", tags: ["Accommodation", "Visa"], featured: false, category: "Engineering", experience: "Senior", remote: "On-site", logo: "B" },
  { id: 21, title: "Nurse", company: "MedCare Hospital", location: "Dubai, UAE", country: "united-arab-emirates", type: "Full-time", salary: "AED 12K–18K/mo", posted: "2d ago", tags: ["Visa Sponsorship", "Housing"], featured: false, category: "Healthcare", experience: "Mid", remote: "On-site", logo: "M" },
  { id: 22, title: "Software Tester", company: "QualityFirst", location: "Bangkok, Thailand", country: "thailand", type: "Full-time", salary: "THB 30K–45K/mo", posted: "4d ago", tags: ["Training"], featured: false, category: "Tech", experience: "Junior", remote: "On-site", logo: "Q" },
  { id: 23, title: "Warehouse Supervisor", company: "LogiGlobal", location: "Jeddah, Saudi Arabia", country: "saudi-arabia", type: "Full-time", salary: "SAR 10K–15K/mo", posted: "6d ago", tags: ["Accommodation"], featured: false, category: "Logistics", experience: "Mid", remote: "On-site", logo: "L" },
  { id: 24, title: "Social Media Manager", company: "BrandBoost", location: "Singapore", country: "singapore", type: "Full-time", salary: "SGD 5K–8K/mo", posted: "3d ago", tags: ["Remote", "Flexible"], featured: false, category: "Marketing", experience: "Junior", remote: "Remote", logo: "B" },
];

const categories = ["All", "Tech", "Education", "Marketing", "Finance", "Hospitality", "Design", "HR", "Engineering", "Sales", "Healthcare", "Logistics"];
const types = ["All Types", "Full-time", "Contract", "Freelance", "Remote", "Permanent"];
const experienceLevels = ["All Levels", "Junior", "Mid", "Senior"];
const remoteOptions = ["All", "On-site", "Remote", "Hybrid"];
const sortOptions = ["Most Recent", "Most Relevant", "Salary: High to Low", "Salary: Low to High"];

const countryOptions: Record<string, string> = {
  "all": "All Countries",
  "united-arab-emirates": "United Arab Emirates",
  "thailand": "Thailand",
  "saudi-arabia": "Saudi Arabia",
  "singapore": "Singapore",
  "united-kingdom": "United Kingdom",
  "germany": "Germany",
  "qatar": "Qatar",
  "remote": "Remote",
};

const ITEMS_PER_PAGE = 10;

function JobsContent() {
  const searchParams = useSearchParams();
  const initialCountry = searchParams.get("country") || "all";

  const [cat, setCat] = useState("All");
  const [type, setType] = useState("All Types");
  const [exp, setExp] = useState("All Levels");
  const [remote, setRemote] = useState("All");
  const [country, setCountry] = useState(initialCountry);
  const [sort, setSort] = useState("Most Recent");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const c = searchParams.get("country");
    if (c) { setCountry(c); setPage(1); }
  }, [searchParams]);

  const filtered = allJobs
    .filter((j) => {
      if (cat !== "All" && j.category !== cat) return false;
      if (type !== "All Types" && j.type !== type) return false;
      if (exp !== "All Levels" && j.experience !== exp) return false;
      if (remote !== "All" && j.remote !== remote) return false;
      if (country !== "all" && j.country !== country) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "Most Recent") return 0;
      if (sort === "Most Relevant") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const activeFilters = [
    cat !== "All" ? cat : null,
    type !== "All Types" ? type : null,
    exp !== "All Levels" ? exp : null,
    remote !== "All" ? remote : null,
    country !== "all" ? countryOptions[country] : null,
  ].filter(Boolean);

  const clearAll = () => { setCat("All"); setType("All Types"); setExp("All Levels"); setRemote("All"); setCountry("all"); setPage(1); };

  return (
    <PageLayout title="Jobs" subtitle="Find your next international career opportunity">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        {/* Search + Sort bar */}
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg px-5 py-3 mb-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-[#f5f5f5] dark:bg-[#2d2d2d] rounded border border-transparent focus-within:border-[#0a66c2] focus-within:bg-white dark:focus-within:bg-[#1d1d1d] transition-colors">
              <svg className="w-4 h-4 text-[#999] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search job title, company, or keyword" className="w-full bg-transparent text-[13px] text-[#191919] dark:text-white placeholder-[#999] outline-none" />
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#f5f5f5] dark:bg-[#2d2d2d] rounded border border-transparent focus-within:border-[#0a66c2] focus-within:bg-white dark:focus-within:bg-[#1d1d1d] transition-colors sm:w-[200px]">
              <svg className="w-4 h-4 text-[#999] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input type="text" placeholder="City or country" className="w-full bg-transparent text-[13px] text-[#191919] dark:text-white placeholder-[#999] outline-none" />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-transparent focus:border-[#0a66c2] rounded text-[13px] text-[#191919] dark:text-white outline-none cursor-pointer">
              {sortOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {activeFilters.map((f) => (
              <span key={f} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#e5f0fb] dark:bg-[#0a66c2]/10 text-[#0a66c2] text-[11px] font-medium rounded-full">
                {f}
                <button onClick={() => {
                  if (cat === f) setCat("All");
                  if (type === f) setType("All Types");
                  if (exp === f) setExp("All Levels");
                  if (remote === f) setRemote("All");
                  if (countryOptions[country] === f) setCountry("all");
                  setPage(1);
                }} className="ml-0.5 hover:text-[#004182]">×</button>
              </span>
            ))}
            <button onClick={clearAll} className="text-[11px] text-[#999] hover:text-[#0a66c2] underline">Clear all</button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters sidebar */}
          <aside className="w-full lg:w-[220px] shrink-0">
            <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#e5e5e5] dark:border-[#333]">
                <span className="text-[13px] font-semibold text-[#191919] dark:text-white">Filters</span>
                <button onClick={clearAll} className="text-[11px] text-[#0a66c2] hover:underline font-medium">Reset</button>
              </div>

              <div className="p-4 space-y-3">
                {/* Country */}
                <div>
                  <label className="text-[10px] font-medium text-[#999] uppercase tracking-wider mb-1 block">Country</label>
                  <select value={country} onChange={(e) => { setCountry(e.target.value); setPage(1); }} className="w-full px-3 py-1.5 text-[12px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded appearance-none cursor-pointer outline-none focus:border-[#0a66c2]">
                    {Object.entries(countryOptions).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="text-[10px] font-medium text-[#999] uppercase tracking-wider mb-1 block">Category</label>
                  <select value={cat} onChange={(e) => { setCat(e.target.value); setPage(1); }} className="w-full px-3 py-1.5 text-[12px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded appearance-none cursor-pointer outline-none focus:border-[#0a66c2]">
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Job Type */}
                <div>
                  <label className="text-[10px] font-medium text-[#999] uppercase tracking-wider mb-1 block">Job Type</label>
                  <select value={type} onChange={(e) => { setType(e.target.value); setPage(1); }} className="w-full px-3 py-1.5 text-[12px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded appearance-none cursor-pointer outline-none focus:border-[#0a66c2]">
                    {types.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="text-[10px] font-medium text-[#999] uppercase tracking-wider mb-1 block">Experience</label>
                  <select value={exp} onChange={(e) => { setExp(e.target.value); setPage(1); }} className="w-full px-3 py-1.5 text-[12px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded appearance-none cursor-pointer outline-none focus:border-[#0a66c2]">
                    {experienceLevels.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>

                {/* Work Setup */}
                <div>
                  <label className="text-[10px] font-medium text-[#999] uppercase tracking-wider mb-1 block">Work Setup</label>
                  <select value={remote} onChange={(e) => { setRemote(e.target.value); setPage(1); }} className="w-full px-3 py-1.5 text-[12px] text-[#191919] dark:text-white bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#444] rounded appearance-none cursor-pointer outline-none focus:border-[#0a66c2]">
                    {remoteOptions.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Job listings */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">
                <span className="font-semibold text-[#191919] dark:text-white">{filtered.length}</span> jobs found
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {paginated.map((job) => (
                <a
                  key={job.id}
                  href={`/jobs/${job.id}`}
                  className={`flex flex-col bg-white dark:bg-[#1d1d1d] border rounded-lg p-4 transition-all hover:shadow-md ${job.featured ? "border-[#0a66c2]/30 dark:border-[#0a66c2]/20" : "border-[#e5e5e5] dark:border-[#333] hover:border-[#0a66c2]/50 dark:hover:border-[#0a66c2]/30"}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-[40px] h-[40px] bg-[#e5e5e5] dark:bg-[#333] rounded flex items-center justify-center text-[14px] font-bold text-[#666] dark:text-[#b0b0b0] shrink-0">
                      {job.logo}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-[14px] font-semibold text-[#191919] dark:text-white line-clamp-1 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] transition-colors">{job.title}</h3>
                        {job.featured && <span className="px-1.5 py-0.5 bg-[#0a66c2] text-white text-[9px] font-semibold rounded shrink-0">Featured</span>}
                      </div>
                      <p className="text-[12px] text-[#666] dark:text-[#b0b0b0] line-clamp-1">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#999] mb-3 flex-wrap">
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span>·</span>
                    <span>{job.type}</span>
                    <span>·</span>
                    <span>{job.remote}</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-[#191919] dark:text-white">{job.salary}</span>
                    <div className="flex items-center gap-1">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-medium text-[#0a66c2] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 px-1.5 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Empty state */}
            {paginated.length === 0 && (
              <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-12 text-center">
                <svg className="w-12 h-12 text-[#ccc] dark:text-[#555] mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-[15px] font-semibold text-[#191919] dark:text-white">No jobs found</h3>
                <p className="text-[13px] text-[#999] mt-1">Try adjusting your filters or search terms</p>
                <button onClick={clearAll} className="mt-4 px-4 py-2 bg-[#0a66c2] text-white text-[13px] font-medium rounded-lg hover:bg-[#004182] transition-colors">Clear filters</button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-[12px] text-[#999]">
                  Showing {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
                </p>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="px-3 py-1.5 text-[12px] font-medium text-[#666] dark:text-[#b0b0b0] border border-[#e5e5e5] dark:border-[#333] rounded hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-8 h-8 text-[12px] font-medium rounded transition-colors ${p === page ? "bg-[#0a66c2] text-white" : "text-[#666] dark:text-[#b0b0b0] hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] border border-[#e5e5e5] dark:border-[#333]"}`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1.5 text-[12px] font-medium text-[#666] dark:text-[#b0b0b0] border border-[#e5e5e5] dark:border-[#333] rounded hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default function JobsPage() {
  return (
    <Suspense fallback={null}>
      <JobsContent />
    </Suspense>
  );
}