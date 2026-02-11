export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,78,30,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(13,107,122,0.25),transparent_40%)]" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[rgba(242,78,30,0.08)] blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[rgba(13,107,122,0.12)] blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white border border-black/10 overflow-hidden shadow-sm">
              <img
                src="/images/Logo njc.png"
                alt="Niraj Jha Classes logo"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-teal-700">
              Niraj Jha Classes
            </p>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-6 leading-[0.95]">
            Niraj Jha
          </h1>
          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            Admission open for XI & XII. Complete Commerce coaching for Accounts,
            Maths, Economics & Business Studies with CUET, IPMAT & CLAT prep.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-full font-semibold focus-ring shadow-md"
            >
              Enroll via WhatsApp
            </a>
            <a
              href="tel:+919999800978"
              className="inline-flex items-center gap-2 border border-slate-300 bg-white/70 text-slate-900 px-6 py-3 rounded-full font-semibold focus-ring"
            >
              Call: 9999800978
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-600">
            {[
              "Small batches",
              "Weekly tests",
              "3x revision",
              "Notes + assignments"
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full bg-white/80 border border-black/5 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">100+</p>
              <p>Top Scorers in Commerce</p>
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

        <div className="glass rounded-3xl p-7 sm:p-8 interactive">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Why Choose Us
          </p>
          <ul className="mt-5 grid gap-4 text-slate-800">
            {[
              "Handwritten notes + printed assignments for every chapter",
              "Weekly tests, mock tests & motivational cash prizes",
              "3 rounds of revision + unlimited backup classes",
              "Online/Offline classes + SMS reporting system"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                {item}
              </li>
            ))}
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
