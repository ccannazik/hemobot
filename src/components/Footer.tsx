import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Reliable hemophilia information, nearby specialized care, and community support
              for patients and families.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/find-care" className="hover:text-primary-600">Find Care</Link></li>
              <li><Link href="/learn" className="hover:text-primary-600">Learn</Link></li>
              <li><Link href="/assistant" className="hover:text-primary-600">Hemophilia Assistant</Link></li>
              <li><Link href="/newly-diagnosed" className="hover:text-primary-600">Newly Diagnosed</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Community</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/community" className="hover:text-primary-600">Forum</Link></li>
              <li><Link href="/journal" className="hover:text-primary-600">My Journal</Link></li>
              <li><Link href="/resources" className="hover:text-primary-600">Government Resources</Link></li>
              <li><Link href="/team" className="hover:text-primary-600">Meet the Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary-600">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
            <strong>Medical Disclaimer:</strong> HEMOBOT provides educational information only and
            does not diagnose medical conditions or provide individualized medical advice. Always
            consult a qualified healthcare professional or Hemophilia Treatment Center for personal
            medical questions. In an emergency, call 911.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} HEMOBOT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
