import type { Metadata } from "next";
import { CommunityForum } from "@/components/CommunityForum";

export const metadata: Metadata = {
  title: "Hemophilia Community",
  description: "Peer support forum for patients, parents, and caregivers affected by hemophilia.",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Hemophilia Community</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Connect with other patients, parents, and caregivers. Share experiences, ask questions, and
          find support in a moderated community space.
        </p>
      </div>
      <CommunityForum />
    </div>
  );
}
