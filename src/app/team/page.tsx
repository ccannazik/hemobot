import type { Metadata } from "next";
import { teamMembers } from "@/data/resources";
import { Card } from "@/components/Card";
import { Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the HEMOBOT team building accessible hemophilia care navigation and community support.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-teal-600 text-white mb-6">
          <Droplets className="h-8 w-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Meet the HEMOBOT Team</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          We&apos;re a dedicated team of engineers, healthcare advocates, and designers working to
          make hemophilia care navigation accessible for every family.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-teal-100 text-2xl font-bold text-primary-700">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{member.name}</h2>
            <p className="text-sm font-medium text-primary-600 mt-1">{member.role}</p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{member.bio}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center rounded-2xl bg-slate-50 border border-slate-200 p-8">
        <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          HEMOBOT exists to help patients, parents, and caregivers quickly find nearby specialized
          care, access reliable educational information, and connect with a supportive community —
          starting in Palo Alto and expanding to serve families everywhere.
        </p>
      </div>
    </div>
  );
}
