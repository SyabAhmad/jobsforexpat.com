import Link from "next/link";

const countries = [
  { name: "United Arab Emirates", expats: "28,500+", flag: "🇦🇪" },
  { name: "Thailand", expats: "22,000+", flag: "🇹🇭" },
  { name: "Saudi Arabia", expats: "18,000+", flag: "🇸🇦" },
  { name: "Singapore", expats: "15,500+", flag: "🇸🇬" },
  { name: "United Kingdom", expats: "14,200+", flag: "🇬🇧" },
  { name: "Germany", expats: "12,800+", flag: "🇩🇪" },
  { name: "Malaysia", expats: "11,500+", flag: "🇲🇾" },
  { name: "France", expats: "10,200+", flag: "🇫🇷" },
];

export function Countries() {
  return (
    <section id="countries" className="bg-[#f5f5f5] dark:bg-[#121212]">
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="bg-white dark:bg-[#1d1d1d] border border-[#e5e5e5] dark:border-[#333] rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5] dark:border-[#333]">
            <h2 className="text-[16px] font-semibold text-[#191919] dark:text-white">
              Popular Destinations
            </h2>
            <Link href="/countries" className="text-[13px] font-semibold text-[#0a66c2] hover:text-[#004182] hover:underline">
              Show all
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#e5e5e5] dark:divide-[#333]">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={`/countries/${country.name.toLowerCase().replace(/ /g, "-")}`}
                className="p-4 hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <span className="text-[24px]">{country.flag}</span>
                <h3 className="text-[13px] font-semibold text-[#191919] dark:text-white mt-2">
                  {country.name}
                </h3>
                <p className="text-[12px] text-[#0a66c2] font-medium mt-0.5">{country.expats} expats</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}