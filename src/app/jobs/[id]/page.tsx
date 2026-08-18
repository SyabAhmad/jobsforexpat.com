"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";

const allJobs = [
  { id: 1, title: "Senior Software Engineer", company: "TechCorp Global", location: "Dubai, UAE", country: "United Arab Emirates", type: "Full-time", salary: "AED 45K–65K/mo", posted: "2d ago", tags: ["Visa Sponsorship"], featured: true, category: "Tech", experience: "Senior", remote: "On-site", logo: "T", description: "We are looking for a Senior Software Engineer to join our growing team in Dubai. You will work on building scalable microservices, mentoring junior developers, and driving technical decisions across the organization.", requirements: ["5+ years of software development experience", "Proficiency in TypeScript, React, and Node.js", "Experience with cloud platforms (AWS/GCP)", "Strong problem-solving skills", "Excellent communication in English"], benefits: ["Competitive tax-free salary", "Annual flight home", "Health insurance", "30 days annual leave", "Visa sponsorship"] },
  { id: 2, title: "English Language Teacher", company: "Global Academy", location: "Bangkok, Thailand", country: "Thailand", type: "Contract", salary: "THB 35K–50K/mo", posted: "1d ago", tags: ["Housing Included"], featured: false, category: "Education", experience: "Mid", remote: "On-site", logo: "G", description: "Join our team of international educators in Bangkok. Teach English to students of various ages and backgrounds in a modern, well-equipped learning environment.", requirements: ["Bachelor's degree in Education or related field", "TEFL/TESOL/CELTA certification", "2+ years teaching experience", "Native English speaker"], benefits: ["Housing provided", "Work permit sponsorship", "Professional development", "End-of-contract bonus"] },
  { id: 3, title: "Marketing Manager", company: "AdVenture Media", location: "London, UK", country: "United Kingdom", type: "Permanent", salary: "GBP 55K–75K/yr", posted: "3d ago", tags: ["Relocation"], featured: false, category: "Marketing", experience: "Senior", remote: "Hybrid", logo: "A", description: "Lead our marketing team in London. Develop and execute marketing strategies, manage campaigns, and drive brand awareness across European markets.", requirements: ["7+ years marketing experience", "Proven track record in B2B marketing", "Strong analytical skills", "Experience with marketing automation tools"], benefits: ["Relocation package", "Flexible hybrid working", "Pension scheme", "25 days holiday"] },
  { id: 4, title: "Financial Analyst", company: "GlobalFinance", location: "Singapore", country: "Singapore", type: "Full-time", salary: "SGD 8K–12K/mo", posted: "5d ago", tags: ["EU Blue Card"], featured: true, category: "Finance", experience: "Mid", remote: "On-site", logo: "G", description: "Analyze financial data, prepare reports, and support strategic decision-making for our Asia-Pacific operations based in Singapore.", requirements: ["CFA or equivalent qualification", "3+ years financial analysis experience", "Advanced Excel and financial modeling", "Strong attention to detail"], benefits: ["Performance bonus", "Health and dental insurance", "Annual training budget", "MacBook Pro provided"] },
  { id: 5, title: "Hospitality Director", company: "LuxStay Resorts", location: "Maldives", country: "Maldives", type: "Full-time", salary: "USD 6K–9K/mo", posted: "1w ago", tags: ["Accommodation"], featured: false, category: "Hospitality", experience: "Senior", remote: "On-site", logo: "L", description: "Oversee all hospitality operations at our luxury resort in the Maldives. Ensure exceptional guest experiences and maintain world-class service standards.", requirements: ["10+ years hospitality management", "Luxury resort experience preferred", "Strong leadership skills", "Multi-language is a plus"], benefits: ["Staff accommodation provided", "Meals included", "Annual flights", "Performance bonuses"] },
  { id: 6, title: "Data Scientist", company: "Analytics Pro", location: "Berlin, Germany", country: "Germany", type: "Full-time", salary: "EUR 70K–95K/yr", posted: "4d ago", tags: ["Remote"], featured: false, category: "Tech", experience: "Senior", remote: "Remote", logo: "A", description: "Build machine learning models, analyze complex datasets, and deliver actionable insights for our clients across various industries.", requirements: ["Masters/PhD in relevant field", "Python, R, SQL proficiency", "Experience with ML frameworks", "Strong statistical knowledge"], benefits: ["Fully remote work", "Flexible hours", "Learning budget", "EU work visa support"] },
  { id: 7, title: "Graphic Designer", company: "CreativeStudio", location: "Dubai, UAE", country: "United Arab Emirates", type: "Freelance", salary: "AED 15K–25K/mo", posted: "3d ago", tags: ["Remote"], featured: false, category: "Design", experience: "Mid", remote: "Remote", logo: "C", description: "Create stunning visual designs for brands across the Middle East. Work on logos, marketing materials, social media content, and more.", requirements: ["Portfolio showcasing design work", "Proficiency in Adobe Creative Suite", "3+ years design experience", "Understanding of brand identity"], benefits: ["Flexible schedule", "Work from anywhere", "Creative freedom", "International clients"] },
  { id: 8, title: "Restaurant Manager", company: "F&B Group", location: "Qatar", country: "Qatar", type: "Full-time", salary: "QAR 18K–25K/mo", posted: "2d ago", tags: ["Meals Included"], featured: false, category: "Hospitality", experience: "Mid", remote: "On-site", logo: "F", description: "Manage daily restaurant operations, lead the kitchen and front-of-house teams, and ensure outstanding dining experiences for our guests.", requirements: ["5+ years restaurant management", "F&B industry knowledge", "Leadership and team management", "Food safety certification"], benefits: ["Accommodation provided", "Meals included", "Annual flight", "Medical insurance"] },
  { id: 9, title: "Mobile App Developer", company: "AppWorks", location: "Remote", country: "Remote", type: "Full-time", salary: "USD 5K–8K/mo", posted: "1d ago", tags: ["Remote", "Flexible Hours"], featured: true, category: "Tech", experience: "Mid", remote: "Remote", logo: "A", description: "Develop cutting-edge mobile applications for iOS and Android. Join a fully remote team building products used by millions.", requirements: ["3+ years mobile development", "React Native or Flutter experience", "Published apps on App/Play Store", "Self-motivated and disciplined"], benefits: ["Fully remote", "Flexible working hours", "Equipment allowance", "Annual team retreat"] },
  { id: 10, title: "HR Manager", company: "Global HR Solutions", location: "Riyadh, Saudi Arabia", country: "Saudi Arabia", type: "Full-time", salary: "SAR 20K–30K/mo", posted: "6d ago", tags: ["Visa Sponsorship"], featured: false, category: "HR", experience: "Senior", remote: "On-site", logo: "G", description: "Lead HR operations in Riyadh. Manage recruitment, employee relations, performance management, and ensure compliance with local labor laws.", requirements: ["7+ years HR experience", "Knowledge of Saudi labor law", "SHRM or CIPD certification", "Strong interpersonal skills"], benefits: ["Tax-free salary", "Housing allowance", "Annual bonus", "Visa sponsorship"] },
  { id: 11, title: "Civil Engineer", company: "BuildCorp", location: "Abu Dhabi, UAE", country: "United Arab Emirates", type: "Contract", salary: "AED 30K–45K/mo", posted: "1w ago", tags: ["Accommodation"], featured: false, category: "Engineering", experience: "Senior", remote: "On-site", logo: "B", description: "Lead civil engineering projects in Abu Dhabi. Oversee construction, ensure quality standards, and manage project timelines.", requirements: ["Bachelors in Civil Engineering", "8+ years construction experience", "PMP or equivalent certification", "Knowledge of UAE building codes"], benefits: ["Accommodation provided", "Transportation", "Annual flight home", "Medical insurance"] },
  { id: 12, title: "Content Writer", company: "MediaHouse", location: "Bangkok, Thailand", country: "Thailand", type: "Remote", salary: "THB 25K–40K/mo", posted: "2d ago", tags: ["Remote"], featured: false, category: "Marketing", experience: "Junior", remote: "Remote", logo: "M", description: "Create engaging content for international brands. Write articles, social media posts, and marketing copy from anywhere in the world.", requirements: ["Excellent English writing skills", "Portfolio of published work", "SEO knowledge", "Self-motivated"], benefits: ["Work from anywhere", "Flexible schedule", "Creative projects", "Growth opportunities"] },
  { id: 13, title: "DevOps Engineer", company: "CloudFirst", location: "Singapore", country: "Singapore", type: "Full-time", salary: "SGD 10K–15K/mo", posted: "1d ago", tags: ["Visa Sponsorship", "Remote"], featured: true, category: "Tech", experience: "Senior", remote: "Remote", logo: "C", description: "Build and maintain cloud infrastructure, automate deployments, and ensure high availability for our global platform.", requirements: ["5+ years DevOps experience", "AWS/GCP expertise", "Kubernetes and Docker", "CI/CD pipeline experience"], benefits: ["Remote work", "Visa sponsorship", "Stock options", "Learning budget"] },
  { id: 14, title: "Product Manager", company: "InnovateTech", location: "Berlin, Germany", country: "Germany", type: "Full-time", salary: "EUR 80K–110K/yr", posted: "3d ago", tags: ["Relocation"], featured: false, category: "Tech", experience: "Senior", remote: "Hybrid", logo: "I", description: "Lead product strategy and development for our SaaS platform. Work with engineering, design, and business teams to deliver exceptional products.", requirements: ["5+ years product management", "SaaS experience", "Data-driven mindset", "Excellent communication"], benefits: ["Relocation package", "Flexible hybrid", "Equity", "30 days holiday"] },
  { id: 15, title: "Sales Executive", company: "GlobalTrade", location: "Dubai, UAE", country: "United Arab Emirates", type: "Full-time", salary: "AED 18K–25K/mo", posted: "4d ago", tags: ["Commission"], featured: false, category: "Sales", experience: "Mid", remote: "On-site", logo: "G", description: "Drive sales growth across the Middle East. Build client relationships, negotiate deals, and exceed quarterly targets.", requirements: ["3+ years B2B sales", "Middle East market experience", "Strong negotiation skills", "Self-motivated"], benefits: ["Competitive base + commission", "Tax-free salary", "Career growth", "International team"] },
  { id: 16, title: "UX Designer", company: "DesignHub", location: "London, UK", country: "United Kingdom", type: "Contract", salary: "GBP 40K–60K/yr", posted: "2d ago", tags: ["Remote"], featured: false, category: "Design", experience: "Mid", remote: "Remote", logo: "D", description: "Design intuitive user experiences for web and mobile applications. Conduct user research, create wireframes, and prototype solutions.", requirements: ["3+ years UX design", "Figma proficiency", "User research experience", "Portfolio required"], benefits: ["Fully remote", "Flexible hours", "Creative freedom", "International clients"] },
  { id: 17, title: "Accountant", company: "FinancePlus", location: "Riyadh, Saudi Arabia", country: "Saudi Arabia", type: "Full-time", salary: "SAR 15K–22K/mo", posted: "5d ago", tags: ["Visa Sponsorship"], featured: false, category: "Finance", experience: "Junior", remote: "On-site", logo: "F", description: "Manage financial records, prepare reports, and ensure compliance with accounting standards for our growing operations.", requirements: ["Accounting degree", "1-2 years experience", "Proficiency in accounting software", "Attention to detail"], benefits: ["Visa sponsorship", "Training programs", "Medical insurance", "Annual flight"] },
  { id: 18, title: "Kitchen Chef", company: "Royal Hotels", location: "Qatar", country: "Qatar", type: "Full-time", salary: "QAR 12K–18K/mo", posted: "3d ago", tags: ["Meals", "Accommodation"], featured: false, category: "Hospitality", experience: "Mid", remote: "On-site", logo: "R", description: "Lead kitchen operations at our luxury hotel restaurant. Create menus, manage food costs, and maintain hygiene standards.", requirements: ["Culinary degree", "3+ years kitchen management", "International cuisine experience", "Food safety certification"], benefits: ["Accommodation provided", "Meals included", "Annual flight", "Medical insurance"] },
  { id: 19, title: "Backend Developer", company: "ServerSide Inc", location: "Remote", country: "Remote", type: "Full-time", salary: "USD 6K–10K/mo", posted: "1d ago", tags: ["Remote", "Flexible"], featured: true, category: "Tech", experience: "Mid", remote: "Remote", logo: "S", description: "Build scalable backend systems and APIs. Work with modern technologies in a fully remote, async-first environment.", requirements: ["3+ years backend development", "Node.js or Python", "Database design", "API development experience"], benefits: ["Fully remote", "Flexible hours", "Equipment budget", "Annual team retreat"] },
  { id: 20, title: "Construction Manager", company: "BuildCorp", location: "Abu Dhabi, UAE", country: "United Arab Emirates", type: "Contract", salary: "AED 35K–50K/mo", posted: "1w ago", tags: ["Accommodation", "Visa"], featured: false, category: "Engineering", experience: "Senior", remote: "On-site", logo: "B", description: "Oversee large-scale construction projects in Abu Dhabi. Manage teams, ensure safety standards, and deliver on time and budget.", requirements: ["Degree in Construction Management", "10+ years experience", "PMP certification", "UAE project experience"], benefits: ["Accommodation provided", "Visa sponsorship", "Annual flight", "Medical insurance"] },
  { id: 21, title: "Nurse", company: "MedCare Hospital", location: "Dubai, UAE", country: "United Arab Emirates", type: "Full-time", salary: "AED 12K–18K/mo", posted: "2d ago", tags: ["Visa Sponsorship", "Housing"], featured: false, category: "Healthcare", experience: "Mid", remote: "On-site", logo: "M", description: "Provide exceptional patient care in our modern hospital. Work with a diverse, international healthcare team.", requirements: ["Nursing degree", "2+ years clinical experience", "Registered Nurse license", "English proficiency"], benefits: ["Visa sponsorship", "Housing allowance", "Medical insurance", "Annual leave"] },
  { id: 22, title: "Software Tester", company: "QualityFirst", location: "Bangkok, Thailand", country: "Thailand", type: "Full-time", salary: "THB 30K–45K/mo", posted: "4d ago", tags: ["Training"], featured: false, category: "Tech", experience: "Junior", remote: "On-site", logo: "Q", description: "Ensure software quality through manual and automated testing. Identify bugs, write test cases, and improve our QA processes.", requirements: ["IT or CS background", "Analytical mindset", "Attention to detail", "Basic testing knowledge"], benefits: ["Training provided", "Career growth", "Health insurance", "Annual bonus"] },
  { id: 23, title: "Warehouse Supervisor", company: "LogiGlobal", location: "Jeddah, Saudi Arabia", country: "Saudi Arabia", type: "Full-time", salary: "SAR 10K–15K/mo", posted: "6d ago", tags: ["Accommodation"], featured: false, category: "Logistics", experience: "Mid", remote: "On-site", logo: "L", description: "Manage warehouse operations, oversee inventory, and lead a team of warehouse staff to ensure efficient logistics.", requirements: ["Logistics or supply chain experience", "3+ years supervisory role", "Forklift certification", "Physical fitness"], benefits: ["Accommodation provided", "Transportation", "Medical insurance", "Annual flight"] },
  { id: 24, title: "Social Media Manager", company: "BrandBoost", location: "Singapore", country: "Singapore", type: "Full-time", salary: "SGD 5K–8K/mo", posted: "3d ago", tags: ["Remote", "Flexible"], featured: false, category: "Marketing", experience: "Junior", remote: "Remote", logo: "B", description: "Manage social media channels, create content, and grow online communities for international brands.", requirements: ["Social media experience", "Content creation skills", "Analytics knowledge", "Creative mindset"], benefits: ["Remote work", "Flexible hours", "Learning budget", "Growth opportunities"] },
];

const countries = [
  { name: "United Arab Emirates", flag: "🇦🇪", slug: "united-arab-emirates" },
  { name: "Thailand", flag: "🇹🇭", slug: "thailand" },
  { name: "Saudi Arabia", flag: "🇸🇦", slug: "saudi-arabia" },
  { name: "Singapore", flag: "🇸🇬", slug: "singapore" },
  { name: "United Kingdom", flag: "🇬🇧", slug: "united-kingdom" },
  { name: "Germany", flag: "🇩🇪", slug: "germany" },
  { name: "Qatar", flag: "🇶🇦", slug: "qatar" },
];

export default function JobDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const job = allJobs.find((j) => j.id === id);

  if (!job) {
    return (
      <PageLayout title="Job Not Found" subtitle="">
        <div className="max-w-[1128px] mx-auto px-4 py-12 text-center">
          <h2 className="text-[18px] font-semibold text-[#191919] dark:text-white">Job not found</h2>
          <Link href="/jobs" className="text-[14px] text-[#0a66c2] hover:underline mt-2 inline-block">Back to jobs</Link>
        </div>
      </PageLayout>
    );
  }

  const suggested = allJobs.filter((j) => j.id !== job.id && (j.category === job.category || j.country === job.country)).slice(0, 4);

  return (
    <PageLayout title="" subtitle="">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Job header card */}
            <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-[56px] h-[56px] bg-[#e5e5e5] dark:bg-[#333] rounded-lg flex items-center justify-center text-[20px] font-bold text-[#666] dark:text-[#b0b0b0] shrink-0">
                  {job.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {job.featured && <span className="inline-block px-2 py-0.5 bg-[#0a66c2] text-white text-[10px] font-semibold rounded mb-2">Featured</span>}
                      <h1 className="text-[20px] font-bold text-[#191919] dark:text-white">{job.title}</h1>
                      <p className="text-[14px] text-[#666] dark:text-[#b0b0b0] mt-0.5">{job.company}</p>
                    </div>
                    <span className="text-[12px] text-[#999] shrink-0">{job.posted}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[13px] text-[#666] dark:text-[#b0b0b0]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="text-[#e5e5e5] dark:text-[#444]">·</span>
                    <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{job.type}</span>
                    <span className="text-[#e5e5e5] dark:text-[#444]">·</span>
                    <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{job.remote}</span>
                    <span className="text-[#e5e5e5] dark:text-[#444]">·</span>
                    <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{job.experience}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-[16px] font-bold text-[#191919] dark:text-white">{job.salary}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium text-[#0a66c2] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 px-6 py-2.5 bg-[#0a66c2] text-white text-[14px] font-semibold rounded-lg hover:bg-[#004182] transition-colors">Apply Now</button>
                <button className="px-4 py-2.5 border border-[#e5e5e5] dark:border-[#444] text-[14px] font-medium text-[#666] dark:text-[#b0b0b0] rounded-lg hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors">Save</button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
              <h2 className="text-[15px] font-semibold text-[#191919] dark:text-white mb-3">Description</h2>
              <p className="text-[13px] text-[#666] dark:text-[#b0b0b0] leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
              <h2 className="text-[15px] font-semibold text-[#191919] dark:text-white mb-3">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-[#666] dark:text-[#b0b0b0]">
                    <span className="w-1.5 h-1.5 bg-[#0a66c2] rounded-full mt-1.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-6">
              <h2 className="text-[15px] font-semibold text-[#191919] dark:text-white mb-3">Benefits</h2>
              <ul className="space-y-2">
                {job.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-[#666] dark:text-[#b0b0b0]">
                    <svg className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggested jobs */}
            {suggested.length > 0 && (
              <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
                <div className="px-6 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
                  <h2 className="text-[15px] font-semibold text-[#191919] dark:text-white">Suggested Jobs</h2>
                </div>
                <div className="divide-y divide-[#e5e5e5] dark:divide-[#333]">
                  {suggested.map((s) => (
                    <Link key={s.id} href={`/jobs/${s.id}`} className="flex items-center gap-4 px-6 py-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors">
                      <div className="w-[40px] h-[40px] bg-[#e5e5e5] dark:bg-[#333] rounded flex items-center justify-center text-[14px] font-bold text-[#666] dark:text-[#b0b0b0] shrink-0">{s.logo}</div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[13px] font-semibold text-[#191919] dark:text-white line-clamp-1">{s.title}</h3>
                        <p className="text-[12px] text-[#999]">{s.company} · {s.location}</p>
                      </div>
                      <span className="text-[12px] font-medium text-[#191919] dark:text-white shrink-0">{s.salary}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] shrink-0 space-y-4">
            {/* Job overview */}
            <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-5">
              <h3 className="text-[13px] font-semibold text-[#191919] dark:text-white mb-4">Job Overview</h3>
              <div className="space-y-3">
                {[
                  { icon: "📍", label: "Location", value: job.location },
                  { icon: "💼", label: "Type", value: job.type },
                  { icon: "🏠", label: "Work Setup", value: job.remote },
                  { icon: "📊", label: "Experience", value: job.experience },
                  { icon: "💰", label: "Salary", value: job.salary },
                  { icon: "🏷️", label: "Category", value: job.category },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-[16px]">{item.icon}</span>
                    <div>
                      <p className="text-[10px] text-[#999] uppercase tracking-wider">{item.label}</p>
                      <p className="text-[13px] text-[#191919] dark:text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browse by country */}
            <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg p-5">
              <h3 className="text-[13px] font-semibold text-[#191919] dark:text-white mb-3">Browse by Country</h3>
              <div className="space-y-1">
                {countries.map((c) => (
                  <Link key={c.slug} href={`/jobs?country=${c.slug}`} className="flex items-center gap-2.5 px-2 py-1.5 rounded hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors">
                    <span className="text-[16px]">{c.flag}</span>
                    <span className="text-[12px] text-[#333] dark:text-[#d0d0d0]">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}