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
    title: "Accounts",
    detail: "Class XI & XII core concepts, ledger mastery, and board practice."
  },
  {
    title: "Business Studies",
    detail: "Chapter-wise notes, case-based questions, and board strategy."
  },
  {
    title: "Economics",
    detail: "Concept clarity with numericals, diagrams, and revision plans."
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

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Admission Open
            </p>
            <h2 className="font-display text-4xl sm:text-5xl mt-3">
              XI & XII Accounts Coaching
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

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Programs
              </p>
              <h2 className="font-display text-4xl mt-2">Courses Designed to Win</h2>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent-2)] text-black px-5 py-3 rounded-full font-semibold"
            >
              Get the timetable
            </a>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div key={program.title} className="border rounded-2xl p-5">
                <h3 className="font-semibold text-lg">{program.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{program.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
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
              <div key={item} className="border rounded-2xl p-4 bg-white">
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
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl mt-3">Personal, Structured, Proven</h2>
            <p className="mt-3 text-slate-300">
              Notes, tests, and continuous mentoring keep students confident and
              board-ready. Every batch is supported with backups and progress
              tracking.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-200">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-2)]" />
              Handwritten notes + printed assignments
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-2)]" />
              Weekly tests, mock tests, and cash prizes
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-2)]" />
              SMS reporting system for parents
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-2)]" />
              Online live classes on LG interactive panel
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
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
              className="inline-flex items-center gap-2 bg-[var(--accent-2)] text-black px-5 py-3 rounded-full font-semibold"
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
                  className="w-full rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto glass rounded-3xl p-8 md:p-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">
              Book a Demo Class
            </h2>
            <p className="mt-3 text-slate-700 text-lg">
              Speak with our team to choose the right batch. Limited seats to keep
              personal interaction strong.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-6 py-3 rounded-full font-semibold"
            >
              Enquire on WhatsApp
            </a>
            <a
              href="tel:+919873330978"
              className="inline-flex items-center justify-center border border-slate-400 text-slate-900 px-6 py-3 rounded-full font-semibold"
            >
              Call 9873330978
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
