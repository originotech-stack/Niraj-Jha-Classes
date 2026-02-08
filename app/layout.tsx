import "./globals.css";
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

export const metadata = {
  title: "Niraj Jha Classes | Accounts Coaching Rohini Delhi",
  description:
    "Accounts coaching for Class 11 and 12 in Rohini, Delhi by Niraj Jha",
  icons: {
    icon: "/images/Logo njc.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${bebas.variable}`}>
        <header className="sticky top-0 z-50 bg-[var(--paper)]/90 backdrop-blur border-b border-black/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white border border-black/10 overflow-hidden">
                <img
                  src="/images/Logo njc.png"
                  alt="Niraj Jha Classes logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-display text-xl">Niraj Jha Classes</p>
                <p className="text-xs text-slate-600">Rohini, Delhi</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <a href="/#courses" className="hover:text-black">
                Courses
              </a>
              <a href="/#results" className="hover:text-black">
                Results
              </a>
              <a href="/#gallery" className="hover:text-black">
                Gallery
              </a>
              <a href="/contact" className="hover:text-black">
                Contact
              </a>
            </nav>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Enquire Now
            </a>
          </div>
        </header>
        {children}
        <footer className="mt-16 bg-[#2c2c2c] text-white">
          <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[1.2fr_0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
                  <img
                    src="/images/Logo njc.png"
                    alt="Niraj Jha Classes logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-2xl">Niraj Jha Classes</p>
                  <p className="text-sm text-slate-300">Offline + Online</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 max-w-md">
                Accounts only coaching for Class XI & XII, taught by Niraj Jha.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://wa.me/919999800978"
                  className="h-10 w-10 rounded-lg bg-[#25D366] hover:opacity-90 flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M12.04 2.02c-5.5 0-9.98 4.45-9.98 9.93 0 1.75.48 3.46 1.39 4.96L2 22l5.24-1.37a9.96 9.96 0 0 0 4.8 1.22h.01c5.5 0 9.98-4.45 9.98-9.93 0-2.64-1.03-5.13-2.9-7-1.88-1.86-4.38-2.9-7.09-2.9Zm.01 17.98h-.01a7.96 7.96 0 0 1-4.06-1.1l-.29-.17-3.11.81.83-3.03-.19-.31a7.94 7.94 0 0 1-1.23-4.23c0-4.41 3.6-7.99 8.03-7.99 2.14 0 4.15.83 5.66 2.32a7.9 7.9 0 0 1 2.35 5.67c0 4.41-3.6 7.99-7.98 7.99Zm4.39-6.01c-.24-.12-1.42-.69-1.64-.77-.22-.08-.39-.12-.55.12-.16.24-.63.77-.77.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.62-1.19-1.39-1.33-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.31-.76-1.8-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="h-10 w-10 rounded-lg bg-[#FF0000] hover:opacity-90 flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="h-10 w-10 rounded-lg bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_5%,#fd5949_35%,#d6249f_60%,#285AEB_90%)] hover:opacity-90 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1ZM20.9 8.2A7.3 7.3 0 0 0 19.7 5a7.3 7.3 0 0 0-3.2-1.2C15.3 3.6 8.7 3.6 7.5 3.8A7.3 7.3 0 0 0 4.3 5 7.3 7.3 0 0 0 3.1 8.2C2.9 9.4 2.9 14.6 3.1 15.8A7.3 7.3 0 0 0 4.3 19a7.3 7.3 0 0 0 3.2 1.2c1.2.2 7.8.2 9 .1a7.3 7.3 0 0 0 3.2-1.2 7.3 7.3 0 0 0 1.2-3.2c.2-1.2.2-6.4 0-7.6ZM12 17.9a5.9 5.9 0 1 1 5.9-5.9A5.9 5.9 0 0 1 12 17.9Z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="h-10 w-10 rounded-lg bg-[#1877F2] hover:opacity-90 flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9v-2.9h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="h-10 w-10 rounded-lg bg-[#0A66C2] hover:opacity-90 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M20.4 20.4h-3.3v-5.2c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.3-2 2.6v5.3H10V9h3.2v1.5h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v6.8ZM6.1 7.5a1.9 1.9 0 1 1 0-3.9 1.9 1.9 0 0 1 0 3.9Zm-1.7 12.9h3.3V9H4.4v11.4Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Courses
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>Accounts, Maths, Economics, B.St</li>
                <li>Class XI & XII Commerce</li>
                <li>CUET, IPMAT & CLAT</li>
                <li>Board Exam Preparation</li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Contact
              </p>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                <div className="flex gap-3">
                  <span className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
                    📍
                  </span>
                  <p>
                    D-3/31, 1st Floor, Sec-16, Rohini
                    <br />
                    220 (2nd Floor), SG Mall, DC Chowk, Rohini, Sec-9
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
                    📞
                  </span>
                  <p>+91 99998 00978, +91 98733 30978</p>
                </div>
                <div className="flex gap-3">
                  <span className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
                    💬
                  </span>
                  <a className="underline" href="/contact">
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>© 2026 Niraj Jha Classes. All rights reserved.</span>
              <span>
                Designed by{" "}
                <a
                  href="https://originotech.com"
                  className="underline hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
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
