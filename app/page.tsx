import Hero from "../components/Hero";

const results = [
  "Krishika Arora - 100 (St. Angel's School)",
  "Mishti Gupta - 100 (St. Angel's School)",
  "Sparsh Gupta - 100",
  "Divyansh Garg - 100",
  "Lakshay Lamba - 100",
  "Daksh Sehgal - 100",
  "Vansh Bothara - 99",
  "Ishpreet Kaur - 96",
  "Riya Arora - 96",
  "Himanshu Yadav - 96",
  "Saanvi Gupta - 95",
  "Ananya Madan - 95",
  "Sarvesh Kathayat - 95",
  "Muskan - 95",
  "Gurbani Kohli - 94",
  "Abhishek Singh - 92"
];

const programs = [
  {
    title: "Accounts (XI & XII)",
    detail: "Core concepts, journal & ledger mastery, board-ready practice."
  },
  {
    title: "Business Studies",
    detail: "Case-based learning, chapter notes, and smart answer writing."
  },
  {
    title: "Economics",
    detail: "Concept clarity, numericals, diagrams, and revision plans."
  },
  {
    title: "Mathematics",
    detail: "Problem-solving focus with timed practice and doubt sessions."
  },
  {
    title: "CUET Commerce",
    detail: "Compact notes, high-yield MCQs, and mock tests."
  },
  {
    title: "IPMAT & CLAT",
    detail: "Aptitude prep with strategy, speed drills, and testing."
  }
];

const highlights = [
  "Small batches & individual attention",
  "Handwritten notes + printed assignments",
  "Weekly tests & mock tests",
  "3 rounds of revision",
  "SMS reporting system",
  "Unlimited backup classes"
];

const gallery = [
  "/images/WhatsApp Image 2026-02-08 at 12.06.06 AM.jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.06 AM (1).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.06 AM (2).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.07 AM.jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.07 AM (1).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.07 AM (2).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.08 AM.jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.08 AM (1).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.08 AM (2).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.09 AM.jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.09 AM (1).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.10 AM.jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.10 AM (1).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.10 AM (2).jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.11 AM.jpeg",
  "/images/WhatsApp Image 2026-02-08 at 12.06.11 AM (1).jpeg"
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Admission Open
            </p>
            <h2 className="font-display text-4xl sm:text-5xl mt-3">
              XI & XII Commerce Coaching
            </h2>
            <p className="mt-4 text-slate-700 text-lg">
              Learn with a structured plan: weekly tests, chapter-wise assignments,
              and 3 rounds of revision to keep every concept sharp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="px-3 py-1.5 rounded-full bg-white border">
                Small batches
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border">
                Personal attention
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border">
                Online / Offline
              </span>
            </div>
          </div>

          <div className="bg-[var(--ink)] text-white rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Centers
            </p>
            <h3 className="font-display text-3xl mt-3">Rohini Locations</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li>D-3/31, 1st Floor, Sec-16, Rohini</li>
              <li>220 (2nd Floor), SG Mall, DC Chowk, Rohini, Sec-9</li>
            </ul>
            <div className="mt-6 text-slate-300 text-sm">
              Call/WhatsApp: 9999800978, 9873330978
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-3">
          {[
            { stat: "15+ Years", label: "Teaching Experience" },
            { stat: "100+ Toppers", label: "Board Results" },
            { stat: "20-25", label: "Batch Strength" }
          ].map((item) => (
            <div key={item.label} className="glass rounded-2xl p-6 text-center interactive">
              <p className="font-display text-4xl">{item.stat}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Courses
              </p>
              <h2 className="font-display text-4xl mt-2">All Commerce Subjects</h2>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent-2)] text-black px-5 py-3 rounded-full font-semibold focus-ring"
            >
              Get the timetable
            </a>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div key={program.title} className="border rounded-2xl p-5 interactive">
                <h3 className="font-semibold text-lg">{program.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{program.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Why Students Choose Us
            </p>
            <h2 className="font-display text-4xl mt-2">Structured + Supportive</h2>
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--ink)] text-white rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Guidance
            </p>
            <h3 className="font-display text-3xl mt-3">Niraj Jha</h3>
            <p className="mt-3 text-slate-300">
              B.Com(H), M.Com (IGNOU), B.Ed (MDU). Trusted mentor for commerce
              students with consistent results and strong fundamentals.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200">
              <span className="px-3 py-1.5 rounded-full bg-white/10">
                Personal mentoring
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10">
                Parent updates
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10">
                Doubt sessions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Results 2023-24
            </p>
            <h2 className="font-display text-4xl mt-2">Accounts Toppers</h2>
            <p className="mt-3 text-slate-600">
              Consistent board-level performance with top scores every year.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-slate-800">
              {results.slice(0, 8).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">And many more...</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {results.slice(8).map((item) => (
              <div key={item} className="border rounded-2xl p-4 bg-white interactive">
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-[var(--ink)] text-white">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Testimonials
            </p>
            <h2 className="font-display text-4xl mt-3">Parents Love the Results</h2>
            <p className="mt-3 text-slate-300">
              Consistent results and strong foundations built through structured
              teaching and personal attention.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-200">
            <div className="bg-white/10 rounded-2xl p-4 interactive">
              “Weekly tests and personal guidance helped my child stay confident.”
            </div>
            <div className="bg-white/10 rounded-2xl p-4 interactive">
              “Great notes and doubt clearing. Highly recommended for commerce.”
            </div>
            <div className="bg-white/10 rounded-2xl p-4 interactive">
              “Structured revision and mock tests made board prep easy.”
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Gallery
              </p>
              <h2 className="font-display text-4xl mt-2">Classroom Highlights</h2>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent-2)] text-black px-5 py-3 rounded-full font-semibold focus-ring"
            >
              Visit the Center
            </a>
          </div>
          <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4">
            {gallery.map((src) => (
              <div key={src} className="mb-4 break-inside-avoid">
                <img
                  src={src}
                  alt="Niraj Jha Classes gallery"
                  className="w-full rounded-2xl shadow-md interactive"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">FAQ</p>
            <h2 className="font-display text-4xl mt-2">Common Questions</h2>
            <div className="mt-6 grid gap-4 text-sm text-slate-700">
              <div className="border rounded-2xl p-4 interactive">
                <p className="font-semibold">Do you offer demo classes?</p>
                <p className="mt-2 text-slate-600">
                  Yes, demo sessions are available for new admissions.
                </p>
              </div>
              <div className="border rounded-2xl p-4 interactive">
                <p className="font-semibold">Are online classes available?</p>
                <p className="mt-2 text-slate-600">
                  Yes, online and offline batches are available.
                </p>
              </div>
              <div className="border rounded-2xl p-4 interactive">
                <p className="font-semibold">How are tests conducted?</p>
                <p className="mt-2 text-slate-600">
                  Weekly tests, mock tests, and revision assessments.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--ink)] text-white rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Admission Support
            </p>
            <h3 className="font-display text-3xl mt-3">Talk to Us</h3>
            <p className="mt-3 text-slate-300">
              We will suggest the right batch and timeline based on your goals.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-6 py-3 rounded-full font-semibold focus-ring"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+919873330978"
                className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full font-semibold focus-ring"
              >
                Call 9873330978
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-300">
              Sec-16 & Sec-9, Rohini - Limited seats
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
