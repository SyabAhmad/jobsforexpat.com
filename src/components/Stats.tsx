export function Stats() {
  const stats = [
    { value: "100K+", label: "Active Expats" },
    { value: "190+", label: "Countries" },
    { value: "25K+", label: "Jobs Posted" },
    { value: "8.5K+", label: "Services" },
  ];

  return (
    <section className="bg-white dark:bg-[#1d1d1d] border-b border-[#e5e5e5] dark:border-[#333]">
      <div className="max-w-[1128px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between overflow-x-auto gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 shrink-0">
              <span className="text-[20px] font-bold text-[#191919] dark:text-white">{stat.value}</span>
              <span className="text-[13px] text-[#666] dark:text-[#b0b0b0]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}