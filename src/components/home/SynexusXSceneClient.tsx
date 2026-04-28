"use client";

import dynamic from "next/dynamic";

const SynexusXScene = dynamic(
  () =>
    import("@/components/home/SynexusXScene").then(
      (mod) => mod.SynexusXScene
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[520px] items-center justify-center">
        <div className="h-40 w-40 rounded-full bg-[#16a79e]/20 blur-3xl" />
      </div>
    ),
  }
);

export function SynexusXSceneClient() {
  return <SynexusXScene />;
}