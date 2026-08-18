import Link from "next/link";

const categories = [
  { title: "Legal & Immigration", desc: "Visa processing, work permits, residency", count: "1,200" },
  { title: "Financial & Tax", desc: "International banking, tax filing", count: "850" },
  { title: "Relocation", desc: "Moving, shipping, settling-in support", count: "2,100" },
  { title: "Health & Insurance", desc: "Medical coverage, insurance plans", count: "650" },
  { title: "Education", desc: "Language courses, schools, tutoring", count: "1,800" },
  { title: "Translation", desc: "Document translation, interpretation", count: "420" },
];

export function Services() {
  return (
    <section id="services" className="bg-white dark:bg-[#1d1d1d]">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
            <h2 className="text-[16px] font-semibold text-[#191919] dark:text-white">
              Services for Expats
            </h2>
            <Link href="/services" className="text-[13px] font-semibold text-[#0a66c2] hover:text-[#004182] hover:underline">
              Show all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e5e5] dark:divide-[#333]">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={`/services/${cat.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="flex items-start gap-3 p-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="w-[40px] h-[40px] bg-[#e5f0fb] dark:bg-[#0a66c2]/10 rounded flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0a66c2]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-[#191919] dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-[12px] text-[#999] mt-0.5">{cat.desc}</p>
                  <p className="text-[11px] text-[#0a66c2] mt-1 font-medium">{cat.count} providers</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}