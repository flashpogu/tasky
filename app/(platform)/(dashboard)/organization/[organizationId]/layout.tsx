import React from "react";
import Org_Control from "./_components/org_Control";
import { startCase } from "lodash";
import { auth } from "@clerk/nextjs/server";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

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
