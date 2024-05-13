import Sidebar from "../_components/sidebar";
import React from "react";

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // max-w-6xl 2xl:max-w-screen-xl
    <main className="pt-20 md:pt-24 px-4 mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
}
