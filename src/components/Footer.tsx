import Link from "next/link";
import { Logo } from "./Logo";
import { MedicalDisclaimerBanner } from "./Disclaimer";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <MedicalDisclaimerBanner prominent />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size="footer" />
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/newly-diagnosed" className="hover:text-primary-600">What Should I Do First?</Link></li>
              <li><Link href="/learn" className="hover:text-primary-600">Learn</Link></li>
              <li><Link href="/treatments" className="hover:text-primary-600">Treatments</Link></li>
              <li><Link href="/find-care" className="hover:text-primary-600">Hospital Directory</Link></li>
              <li><Link href="/assistant" className="hover:text-primary-600">HemoBot AI</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/community" className="hover:text-primary-600">Community</Link></li>
              <li><Link href="/podcast" className="hover:text-primary-600">Podcast</Link></li>
              <li><Link href="/donate" className="hover:text-primary-600">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600">Contact Us</Link></li>
              <li><Link href="/account" className="hover:text-primary-600">My Account</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-600">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary-600">Medical Disclaimer</Link></li>
              <li><Link href="/accessibility" className="hover:text-primary-600">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-200 pt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} {SITE.fullName}.
        </p>
      </div>
    </footer>
  );
}
