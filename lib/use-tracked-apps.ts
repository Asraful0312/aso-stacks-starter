"use client";

import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { api } from "../../convex/_generated/api";
import { getAnonKey } from "./anon-user";

export type TrackedApp = {
  id: string;
  name: string;
  platform: "ios" | "android";
  bundleId?: string;
  trackId?: number;
  iconUrl?: string;
  sellerName?: string;
};

export function useTrackedApps() {
  const { isSignedIn, isLoaded } = useUser();
  const [anonKey, setAnonKey] = useState<string | null>(null);

  useEffect(() => {
    if (!isSignedIn) setAnonKey(getAnonKey());
  }, [isSignedIn]);

  const queryArgs = isLoaded
    ? isSignedIn
      ? {}
      : anonKey
        ? { anonKey }
        : "skip"
    : "skip";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw = useQuery((api as any).tracking.listApps, queryArgs);

  const apps: TrackedApp[] = (raw ?? []).map((a: any) => ({
    id: a._id,
    name: a.name,
    platform: a.platform,
    bundleId: a.bundleId,
    trackId: a.trackId,
    iconUrl: a.iconUrl,
    sellerName: a.sellerName,
  }));

  return { apps, hydrated: raw !== undefined };
}
