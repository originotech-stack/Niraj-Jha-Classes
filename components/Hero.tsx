export default function Hero() {
  return (
    <section className="relative overflow-hidden mesh">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,90,42,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.25),transparent_40%)]" />
      <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-[rgba(255,90,42,0.14)] blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[rgba(15,118,110,0.18)] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-24 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-teal-700">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Admission Open 2026-2027
          </div>

          <h1 className="section-title text-5xl sm:text-6xl lg:text-7xl mt-6">
            Niraj Jha Classes
            <span className="block text-[var(--accent)]">That Delivers Results</span>
          </h1>

          <p className="mt-5 text-lg text-slate-700 max-w-xl leading-relaxed">
            Accounts, Economics, Business Studies, and Maths with weekly tests, board-level answer writing,
            and revision systems designed to improve marks fast.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold focus-ring"
            >
              Start Your Enquiry
            </a>
            <a
              href="tel:+919999800978"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold focus-ring"
            >
              Call 9999800978
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-700">
            {["Small batches", "Weekly tests", "3 revision rounds", "Notes included"].map((item) => (
              <div key={item} className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-7 sm:p-8 interactive relative overflow-hidden">
          <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[var(--accent)]/10 blur-2xl" />
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Why Choose Us</p>
          <ul className="mt-5 grid gap-4 text-slate-800">
            {[
              "Handwritten notes and printed assignments for every chapter",
              "Weekly tests, mock tests, and performance tracking",
              "Three rounds of revision before final exams",
              "Online and offline batches with unlimited backup classes"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Mentor: Niraj Jha (B.Com H, M.Com, B.Ed)</p>
            <p>Focused guidance with consistent academic outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
