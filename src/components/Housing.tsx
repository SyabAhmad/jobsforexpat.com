import Link from "next/link";

const listings = [
  { id: 1, title: "Modern 2BR Apartment", location: "Dubai Marina, UAE", price: "AED 12,000/mo", beds: 2, baths: 2, tags: ["Furnished", "Pool"], img: "/next.svg" },
  { id: 2, title: "Luxury Villa with Pool", location: "Thonglor, Bangkok", price: "THB 45,000/mo", beds: 3, baths: 3, tags: ["Private Pool", "Garden"], img: "/next.svg" },
  { id: 3, title: "Cozy Studio near BTS", location: "Sukhumvit, Bangkok", price: "THB 15,000/mo", beds: 1, baths: 1, tags: ["Near BTS"], img: "/next.svg" },
  { id: 4, title: "Penthouse City View", location: "Riyadh, Saudi Arabia", price: "SAR 25,000/mo", beds: 3, baths: 2, tags: ["City View"], img: "/next.svg" },
];

export function Housing() {
  return (
    <section id="housing" className="bg-white dark:bg-[#1d1d1d]">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
            <h2 className="text-[16px] font-semibold text-[#191919] dark:text-white">
              Housing & Accommodation
            </h2>
            <Link href="/housing" className="text-[13px] font-semibold text-[#0a66c2] hover:text-[#004182] hover:underline">
              Show all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e5e5] dark:divide-[#333]">
            {listings.map((listing) => (
              <Link
                key={listing.id}
                href="/housing"
                className="p-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="h-[120px] bg-[#f5f5f5] dark:bg-[#2d2d2d] rounded mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#ccc] dark:text-[#555]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <h3 className="text-[13px] font-semibold text-[#191919] dark:text-white truncate">
                  {listing.title}
                </h3>
                <p className="text-[12px] text-[#999] mt-1">{listing.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[14px] font-semibold text-[#191919] dark:text-white">{listing.price}</span>
                </div>
                <p className="text-[11px] text-[#999] mt-1">{listing.beds} bed · {listing.baths} bath</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {listing.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-[#666] dark:text-[#b0b0b0] bg-[#f5f5f5] dark:bg-[#2d2d2d] px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}