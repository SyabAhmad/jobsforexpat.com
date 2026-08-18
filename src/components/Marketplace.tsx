import Link from "next/link";

const items = [
  { id: 1, title: "iPhone 15 Pro Max", price: "AED 4,500", location: "Dubai", condition: "Like New" },
  { id: 2, title: "MacBook Pro M3 14\"", price: "GBP 2,800", location: "London", condition: "Excellent" },
  { id: 3, title: "IKEA Furniture Set", price: "SAR 1,200", location: "Riyadh", condition: "Good" },
  { id: 4, title: "Canon EOS R6 Camera", price: "THB 8,500", location: "Bangkok", condition: "Like New" },
  { id: 5, title: "2022 Toyota Camry", price: "AED 55,000", location: "Abu Dhabi", condition: "Excellent" },
  { id: 6, title: "Standing Desk + Chair", price: "SGD 600", location: "Singapore", condition: "Good" },
];

export function Marketplace() {
  return (
    <section id="marketplace" className="bg-[#f5f5f5] dark:bg-[#121212]">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
            <h2 className="text-[16px] font-semibold text-[#191919] dark:text-white">
              Items for Sale
            </h2>
            <Link href="/marketplace" className="text-[13px] font-semibold text-[#0a66c2] hover:text-[#004182] hover:underline">
              Show all
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-[#e5e5e5] dark:divide-[#333]">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/marketplace/${item.id}`}
                className="p-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="h-[100px] bg-[#f5f5f5] dark:bg-[#2d2d2d] rounded mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ccc] dark:text-[#555]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-[12px] font-medium text-[#191919] dark:text-white line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#999] mt-1">{item.location}</p>
                <p className="text-[13px] font-semibold text-[#191919] dark:text-white mt-1">{item.price}</p>
                <span className="text-[10px] text-[#666] dark:text-[#b0b0b0] bg-[#f5f5f5] dark:bg-[#2d2d2d] px-1.5 py-0.5 rounded mt-2 inline-block">
                  {item.condition}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}