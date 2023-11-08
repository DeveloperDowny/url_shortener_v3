// "use client";

import { UserProfile } from "@/components/user-profile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth/nextAuthOptions";
import { AnalyticsPage } from "@/components/analytics-page";

export default async function UserProfilePage() {
  const session = await getServerSession(authOptions);
  if (session && session.user) return <AnalyticsPage session={session} />;
  return redirect("/signin");
}
