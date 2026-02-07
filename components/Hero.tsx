export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,78,30,0.35),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(13,107,122,0.35),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-teal-700">
            Niraj Jha Classes
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 leading-[0.95]">
            Accounts
            <span className="block text-teal-700">by Niraj Jha</span>
          </h1>
          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            Admission open for XI & XII. Focused coaching for Accounts, Economics,
            B.ST and CUET with rigorous tests, intensive revision, and personal
            mentoring.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-full font-semibold"
            >
              Enroll via WhatsApp
            </a>
            <a
              href="tel:+919999800978"
              className="inline-flex items-center gap-2 border border-slate-400 text-slate-900 px-6 py-3 rounded-full font-semibold"
            >
              Call: 9999800978
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">100+</p>
              <p>Top Scorers in Accounts</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">2 Centers</p>
              <p>Sec-16 & Sec-9, Rohini</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Small Batches</p>
              <p>Individual attention</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Why Choose Us
          </p>
          <ul className="mt-4 grid gap-3 text-slate-800">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              Handwritten notes + printed assignments for every chapter
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              Weekly tests, mock tests & motivational cash prizes
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              3 rounds of revision + unlimited backup classes
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              Online/Offline classes + SMS reporting system
            </li>
          </ul>
          <div className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">B.Com(H), M.Com (IGNOU), B.Ed (MDU)</p>
            <p>Guided learning with personal interaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
