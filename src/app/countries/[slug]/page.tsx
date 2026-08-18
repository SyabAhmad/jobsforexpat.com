"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";

const allJobs = [
  { id: 1, title: "Senior Software Engineer", company: "TechCorp Global", location: "Dubai, UAE", country: "united-arab-emirates", type: "Full-time", salary: "AED 45K–65K/mo", posted: "2d ago", tags: ["Visa Sponsorship"], featured: true, logo: "T" },
  { id: 2, title: "English Language Teacher", company: "Global Academy", location: "Bangkok, Thailand", country: "thailand", type: "Contract", salary: "THB 35K–50K/mo", posted: "1d ago", tags: ["Housing Included"], featured: false, logo: "G" },
  { id: 4, title: "Financial Analyst", company: "GlobalFinance", location: "Singapore", country: "singapore", type: "Full-time", salary: "SGD 8K–12K/mo", posted: "5d ago", tags: ["EU Blue Card"], featured: true, logo: "G" },
  { id: 6, title: "Data Scientist", company: "Analytics Pro", location: "Berlin, Germany", country: "germany", type: "Full-time", salary: "EUR 70K–95K/yr", posted: "4d ago", tags: ["Remote"], featured: false, logo: "A" },
  { id: 7, title: "Graphic Designer", company: "CreativeStudio", location: "Dubai, UAE", country: "united-arab-emirates", type: "Freelance", salary: "AED 15K–25K/mo", posted: "3d ago", tags: ["Remote"], featured: false, logo: "C" },
  { id: 8, title: "Restaurant Manager", company: "F&B Group", location: "Qatar", country: "qatar", type: "Full-time", salary: "QAR 18K–25K/mo", posted: "2d ago", tags: ["Meals Included"], featured: false, logo: "F" },
  { id: 10, title: "HR Manager", company: "Global HR Solutions", location: "Riyadh, Saudi Arabia", country: "saudi-arabia", type: "Full-time", salary: "SAR 20K–30K/mo", posted: "6d ago", tags: ["Visa Sponsorship"], featured: false, logo: "G" },
  { id: 11, title: "Civil Engineer", company: "BuildCorp", location: "Abu Dhabi, UAE", country: "united-arab-emirates", type: "Contract", salary: "AED 30K–45K/mo", posted: "1w ago", tags: ["Accommodation"], featured: false, logo: "B" },
  { id: 12, title: "Content Writer", company: "MediaHouse", location: "Bangkok, Thailand", country: "thailand", type: "Remote", salary: "THB 25K–40K/mo", posted: "2d ago", tags: ["Remote"], featured: false, logo: "M" },
  { id: 15, title: "Sales Executive", company: "GlobalTrade", location: "Dubai, UAE", country: "united-arab-emirates", type: "Full-time", salary: "AED 18K–25K/mo", posted: "4d ago", tags: ["Commission"], featured: false, logo: "G" },
  { id: 16, title: "UX Designer", company: "DesignHub", location: "London, UK", country: "united-kingdom", type: "Contract", salary: "GBP 40K–60K/yr", posted: "2d ago", tags: ["Remote"], featured: false, logo: "D" },
  { id: 17, title: "Accountant", company: "FinancePlus", location: "Riyadh, Saudi Arabia", country: "saudi-arabia", type: "Full-time", salary: "SAR 15K–22K/mo", posted: "5d ago", tags: ["Visa Sponsorship"], featured: false, logo: "F" },
  { id: 21, title: "Nurse", company: "MedCare Hospital", location: "Dubai, UAE", country: "united-arab-emirates", type: "Full-time", salary: "AED 12K–18K/mo", posted: "2d ago", tags: ["Visa Sponsorship", "Housing"], featured: false, logo: "M" },
  { id: 23, title: "Warehouse Supervisor", company: "LogiGlobal", location: "Jeddah, Saudi Arabia", country: "saudi-arabia", type: "Full-time", salary: "SAR 10K–15K/mo", posted: "6d ago", tags: ["Accommodation"], featured: false, logo: "L" },
];

const countriesData: Record<string, { name: string; flag: string; expats: string; description: string }> = {
  "united-arab-emirates": { name: "United Arab Emirates", flag: "🇦🇪", expats: "28,500+", description: "The UAE is a top destination for expats seeking tax-free income, modern infrastructure, and a vibrant multicultural environment. Dubai and Abu Dhabi lead with world-class career opportunities." },
  "thailand": { name: "Thailand", flag: "🇹🇭", expats: "22,000+", description: "Thailand attracts expats with its affordable cost of living, rich culture, tropical climate, and growing job market in tourism, education, and tech." },
  "saudi-arabia": { name: "Saudi Arabia", flag: "🇸🇦", expats: "18,000+", description: "Saudi Arabia offers lucrative tax-free packages, especially in oil & gas, healthcare, and construction. Vision 2030 is creating new opportunities across sectors." },
  "singapore": { name: "Singapore", flag: "🇸🇬", expats: "15,500+", description: "Singapore is a global financial hub with excellent career opportunities, high quality of life, and a strategic location in Asia-Pacific." },
  "united-kingdom": { name: "United Kingdom", flag: "🇬🇧", expats: "14,200+", description: "The UK remains a top choice for expats with its world-class healthcare, diverse job market, and rich cultural heritage spanning London, Manchester, and beyond." },
  "germany": { name: "Germany", flag: "🇩🇪", expats: "12,800+", description: "Germany offers strong worker protections, excellent engineering and tech jobs, and a high standard of living. Berlin and Munich are expat hotspots." },
  "malaysia": { name: "Malaysia", flag: "🇲🇾", expats: "11,500+", description: "Malaysia is popular for its affordable lifestyle, English-friendly environment, and growing opportunities in tech and education." },
  "france": { name: "France", flag: "🇫🇷", expats: "10,200+", description: "France combines career opportunities with an exceptional quality of life, world-class cuisine, and a rich cultural experience." },
  "qatar": { name: "Qatar", flag: "🇶🇦", expats: "9,800+", description: "Qatar offers tax-free salaries, modern infrastructure, and a rapidly diversifying economy with opportunities in finance, construction, and energy." },
  "netherlands": { name: "Netherlands", flag: "🇳🇱", expats: "8,500+", description: "The Netherlands is known for its work-life balance, innovative tech scene, and international-friendly work culture." },
  "australia": { name: "Australia", flag: "🇦🇺", expats: "8,200+", description: "Australia attracts expats with its outdoor lifestyle, strong economy, and opportunities in mining, healthcare, and technology." },
  "japan": { name: "Japan", flag: "🇯🇵", expats: "7,500+", description: "Japan offers unique cultural experiences, advanced technology sectors, and growing demand for English-speaking professionals." },
};

export default function CountryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const country = countriesData[slug];
  const jobs = allJobs.filter((j) => j.country === slug);

  if (!country) {
    return (
      <PageLayout title="Country Not Found" subtitle="">
        <div className="max-w-[1128px] mx-auto px-4 py-12 text-center">
          <h2 className="text-[18px] font-semibold text-[#191919] dark:text-white">Country not found</h2>
          <Link href="/countries" className="text-[14px] text-[#0a66c2] hover:underline mt-2 inline-block">Back to countries</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${country.flag} ${country.name}`} subtitle={country.description}>
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Expats", value: country.expats },
            { label: "Open Jobs", value: jobs.length.toString() },
            { label: "Companies", value: `${new Set(jobs.map((j) => j.company)).size}+` },
            { label: "Categories", value: `${new Set(jobs.map((j) => j.title.split(" ").pop())).size}+` },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-4 text-center">
              <p className="text-[20px] font-bold text-[#191919] dark:text-white">{stat.value}</p>
              <p className="text-[11px] text-[#999] uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Jobs in this country */}
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg mb-6">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
            <h2 className="text-[15px] font-semibold text-[#191919] dark:text-white">Jobs in {country.name}</h2>
            <Link href={`/jobs?country=${slug}`} className="text-[12px] font-semibold text-[#0a66c2] hover:underline">View all</Link>
          </div>
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5] dark:bg-[#333]">
              {jobs.map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}`} className="flex items-center gap-3 bg-white dark:bg-[#1d1d1d] p-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors">
                  <div className="w-[40px] h-[40px] bg-[#e5e5e5] dark:bg-[#333] rounded flex items-center justify-center text-[14px] font-bold text-[#666] dark:text-[#b0b0b0] shrink-0">{job.logo}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13px] font-semibold text-[#191919] dark:text-white line-clamp-1">{job.title}</h3>
                    <p className="text-[11px] text-[#999]">{job.company} · {job.type}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[12px] font-medium text-[#191919] dark:text-white">{job.salary}</p>
                    <p className="text-[10px] text-[#999]">{job.posted}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-[13px] text-[#999]">No jobs currently listed in {country.name}</p>
              <Link href="/jobs" className="text-[13px] text-[#0a66c2] hover:underline mt-1 inline-block">Browse all jobs</Link>
            </div>
          )}
        </div>

        {/* Other countries */}
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
          <div className="px-5 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
            <h2 className="text-[15px] font-semibold text-[#191919] dark:text-white">Explore Other Countries</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#e5e5e5] dark:bg-[#333]">
            {Object.entries(countriesData)
              .filter(([s]) => s !== slug)
              .slice(0, 8)
              .map(([s, c]) => (
                <Link key={s} href={`/countries/${s}`} className="flex items-center gap-2 bg-white dark:bg-[#1d1d1d] p-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors">
                  <span className="text-[20px]">{c.flag}</span>
                  <span className="text-[12px] font-medium text-[#191919] dark:text-white">{c.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}