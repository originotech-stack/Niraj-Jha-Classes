import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Niraj Jha Classes | Accounts Coaching Rohini Delhi",
  description: "Accounts coaching for Class 11 and 12 in Rohini, Delhi by Niraj Jha",
  icons: {
    icon: "/images/Logo njc.png"
  }
};

const navItems = [
  { href: "/#courses", label: "Courses" },
  { href: "/#results", label: "Results" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${bebas.variable}`}>
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--paper)]/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <a href="/" className="group flex items-center gap-3 focus-ring rounded-xl">
                <div className="h-11 w-11 rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm">
                  <img
                    src="/images/Logo njc.png"
                    alt="Niraj Jha Classes logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <p className="font-display text-xl sm:text-2xl">Niraj Jha Classes</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Rohini, Delhi</p>
                </div>
              </a>

              <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-1 transition-colors hover:text-black focus-ring"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="/contact"
                className="btn-primary inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold focus-ring"
              >
                Enquire Now
              </a>
            </div>

            <nav className="mt-3 grid grid-cols-4 gap-2 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-center text-xs font-medium text-slate-700 focus-ring"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-16 bg-[var(--ink)] text-white relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-12 h-64 w-64 rounded-full bg-[var(--accent)]/25 blur-3xl" />

          <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[1.2fr_0.9fr_1fr] relative">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-white/10 overflow-hidden border border-white/20">
                  <img
                    src="/images/Logo njc.png"
                    alt="Niraj Jha Classes logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-2xl">Niraj Jha Classes</p>
                  <p className="text-sm text-slate-300">Offline + Online Coaching</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300 max-w-md">
                Accounts-focused coaching for Class XI and XII Commerce with structured revision, testing, and personal mentoring.
              </p>

              <div className="mt-6 flex gap-3">
                <a href="https://wa.me/919999800978" aria-label="WhatsApp" className="h-10 w-10 rounded-xl bg-[#25D366] grid place-items-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M12.04 2.02c-5.5 0-9.98 4.45-9.98 9.93 0 1.75.48 3.46 1.39 4.96L2 22l5.24-1.37a9.96 9.96 0 0 0 4.8 1.22h.01c5.5 0 9.98-4.45 9.98-9.93 0-2.64-1.03-5.13-2.9-7-1.88-1.86-4.38-2.9-7.09-2.9Z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCS-Fnpw95CBqg-WfnfCPWpw" aria-label="YouTube" className="h-10 w-10 rounded-xl bg-[#FF0000] grid place-items-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/nirajjha.16/" aria-label="Instagram" className="h-10 w-10 rounded-xl bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_5%,#fd5949_35%,#d6249f_60%,#285AEB_90%)] grid place-items-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1ZM20.9 8.2A7.3 7.3 0 0 0 19.7 5a7.3 7.3 0 0 0-3.2-1.2C15.3 3.6 8.7 3.6 7.5 3.8A7.3 7.3 0 0 0 4.3 5 7.3 7.3 0 0 0 3.1 8.2C2.9 9.4 2.9 14.6 3.1 15.8A7.3 7.3 0 0 0 4.3 19a7.3 7.3 0 0 0 3.2 1.2c1.2.2 7.8.2 9 .1a7.3 7.3 0 0 0 3.2-1.2 7.3 7.3 0 0 0 1.2-3.2c.2-1.2.2-6.4 0-7.6ZM12 17.9a5.9 5.9 0 1 1 5.9-5.9A5.9 5.9 0 0 1 12 17.9Z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/" aria-label="Facebook" className="h-10 w-10 rounded-xl bg-[#1877F2] grid place-items-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9v-2.9h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Programs</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>Accounts, Maths, Economics, Business Studies</li>
                <li>Class XI and XII Commerce</li>
                <li>CUET, IPMAT and CLAT Preparation</li>
                <li>Weekly Tests and Full Revision Cycles</li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Contact</p>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                <div>
                  <p className="font-semibold text-white">Locations</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">Branch 1</p>
                  <a
                    href="https://maps.app.goo.gl/ctAkC2Fsj3nbEjg28"
                    className="underline underline-offset-4 hover:text-white block mt-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    D-3/31, 1st Floor, Sec-16, Rohini
                  </a>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">Branch 2</p>
                  <a
                    href="https://maps.app.goo.gl/PnqRGSCPYMuCLvHBA"
                    className="underline underline-offset-4 hover:text-white block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    220 (2nd Floor), SG Mall, DC Chowk, Rohini, Sec-9
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-white">Call / WhatsApp</p>
                  <a href="tel:+919999800978" className="underline underline-offset-4 hover:text-white block mt-1">+91 99998 00978</a>
                  <a href="tel:+919873330978" className="underline underline-offset-4 hover:text-white block">+91 98733 30978</a>
                </div>

                <a href="/contact" className="btn-primary inline-flex rounded-full px-4 py-2 font-semibold text-sm focus-ring">
                  Quick Enquiry
                </a>
              </div>
            </div>
          </div>

          <div className="divider">
            <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>Copyright 2026 Niraj Jha Classes. All rights reserved.</span>
              <span>
                Designed by{" "}
                <a href="https://originotech.com" className="underline hover:text-white" target="_blank" rel="noreferrer">
                  Origino Tech
                </a>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
