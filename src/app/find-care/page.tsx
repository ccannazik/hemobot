import { Suspense } from "react";
import FindCareContent from "./FindCareContent";

export default function FindCarePage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-10 text-center text-slate-500">
          Loading care directory…
        </div>
      }
    >
      <FindCareContent />
    </Suspense>
  );
}
