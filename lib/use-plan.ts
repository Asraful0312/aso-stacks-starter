"use client";

import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { getAnonKey } from "@/lib/anon-user";

export type PlanUsage = {
  plan: "free" | "pro" | "studio";
  name: string | null;
  email: string | null;
  keywordsUsed: number;
  keywordsLimit: number;
  appsUsed: number;
  appsLimit: number;
};

/**
 * Current plan + usage for the signed-in or anonymous user.
 * `plan` defaults to "free" while loading or when no user row exists yet.
 */
export function usePlan() {
  const { isSignedIn, isLoaded } = useUser();
  const [anonKey, setAnonKey] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) setAnonKey(getAnonKey());
  }, [isLoaded, isSignedIn]);

  const queryArgs = isLoaded
    ? isSignedIn
      ? {}
      : anonKey
        ? { anonKey }
        : "skip"
    : "skip";

  const usage: PlanUsage | null | undefined = useQuery(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (api as any).users.usage,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryArgs as any
  );

  const plan = usage?.plan ?? "free";
  return {
    usage: usage ?? null,
    plan,
    isPaid: plan === "pro" || plan === "studio",
    loading: usage === undefined && queryArgs !== "skip",
    anonKey,
  };
}
