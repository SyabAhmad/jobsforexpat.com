import Link from "next/link";

const jobs = [
  { id: 1, title: "Senior Software Engineer", company: "TechCorp Global", location: "Dubai, UAE", type: "Full-time", salary: "AED 45K–65K/mo", posted: "2d ago", tags: ["Visa Sponsorship"], featured: true },
  { id: 2, title: "English Language Teacher", company: "Global Academy", location: "Bangkok, Thailand", type: "Contract", salary: "THB 35K–50K/mo", posted: "1d ago", tags: ["Housing Included"], featured: false },
  { id: 3, title: "Marketing Manager", company: "AdVenture Media", location: "London, UK", type: "Permanent", salary: "GBP 55K–75K/yr", posted: "3d ago", tags: ["Relocation"], featured: false },
  { id: 4, title: "Financial Analyst", company: "GlobalFinance", location: "Singapore", type: "Full-time", salary: "SGD 8K–12K/mo", posted: "5d ago", tags: ["EU Blue Card"], featured: true },
  { id: 5, title: "Hospitality Director", company: "LuxStay Resorts", location: "Maldives", type: "Full-time", salary: "USD 6K–9K/mo", posted: "1w ago", tags: ["Accommodation"], featured: false },
  { id: 6, title: "Data Scientist", company: "Analytics Pro", location: "Berlin, Germany", type: "Full-time", salary: "EUR 70K–95K/yr", posted: "4d ago", tags: ["Remote"], featured: false },
];

export function Jobs() {
  return (
    <section id="jobs" className="bg-[#f5f5f5] dark:bg-[#121212]">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
            <h2 className="text-[16px] font-semibold text-[#191919] dark:text-white">
              Featured Jobs
            </h2>
            <Link href="/jobs" className="text-[13px] font-semibold text-[#0a66c2] hover:text-[#004182] hover:underline">
              Show all
            </Link>
          </div>

          <div className="divide-y divide-[#e5e5e5] dark:divide-[#333]">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.id}`}
                className="flex gap-4 px-5 py-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="w-[48px] h-[48px] bg-[#e5e5e5] dark:bg-[#333] rounded flex items-center justify-center text-[16px] font-bold text-[#666] dark:text-[#b0b0b0] shrink-0">
                  {job.company.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[14px] font-semibold text-[#0a66c2] hover:underline truncate">
                      {job.title}
                    </h3>
                    {job.featured && (
                      <span className="shrink-0 px-1.5 py-0.5 bg-[#e5f0fb] dark:bg-[#0a66c2]/20 text-[#0a66c2] text-[10px] font-semibold rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-[#191919] dark:text-[#e5e5e5] mt-0.5">{job.company}</p>
                  <p className="text-[12px] text-[#999] mt-0.5">{job.location} · {job.type}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[12px] text-[#666] dark:text-[#b0b0b0]">{job.salary}</span>
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-[#0a66c2] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[11px] text-[#999] shrink-0 pt-0.5">{job.posted}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
