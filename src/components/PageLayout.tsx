import { ReactNode } from "react";

export function PageLayout({ children, title, subtitle }: { children: ReactNode; title: string; subtitle: string }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#121212]">
      {/* Page header */}
      <div className="bg-white dark:bg-[#1d1d1d] border-b border-[#e5e5e5] dark:border-[#333]">
        <div className="max-w-[1128px] mx-auto px-4 py-6">
          <h1 className="text-[22px] font-semibold text-[#191919] dark:text-white">{title}</h1>
          <p className="text-[14px] text-[#666] dark:text-[#b0b0b0] mt-1">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <main>{children}</main>
    </div>
  );
}