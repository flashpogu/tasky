import React from "react";
import Org_Control from "./_components/org_Control";

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Org_Control />
      {children}
    </>
  );
}
