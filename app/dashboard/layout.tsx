import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className={` flex  p-2 h-screen gap-2`}>
      <nav className={`w-[240px] bg-transparent border rounded rounded-sm`}>
      </nav>
      <main className={`flex-1 `}>{children}</main>
    </main>
  );
}
