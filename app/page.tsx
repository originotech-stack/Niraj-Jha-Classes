import Hero from "../components/Hero";

const results = [
  "Krishika Arora - 100 ",
  "Mishti Gupta - 100 ",
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
    detail: "Core concepts, journal and ledger mastery, board-ready practice."
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
  "Small batches and individual attention",
  "Handwritten notes and printed assignments",
  "Weekly tests and mock tests",
  "Board Before Board mock examinations",
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
  "/images/WhatsApp Image 2026-02-08 at 12.06.11 AM (1).jpeg",
  "/images/WhatsApp Image 2026-02-11 at 10.26.49 PM.jpeg",
  "/images/WhatsApp Image 2026-02-11 at 10.26.50 PM.jpeg",
  "/images/WhatsApp Image 2026-02-11 at 10.26.50 PM (1).jpeg",
  "/images/WhatsApp Image 2026-02-11 at 10.26.50 PM (2).jpeg",
  "/images/WhatsApp Image 2026-02-11 at 10.26.51 PM.jpeg",
  "/images/WhatsApp Image 2026-02-11 at 10.26.51 PM (1).jpeg"
];

const stats = [
  { stat: "15+ Years", label: "Teaching Experience" },
  { stat: "250+ Toppers", label: "Board Results" },
  { stat: "20-25", label: "Batch Strength" }
];

const testimonials = [
  {
    name: "Abhishek Asiwal",
    rating: 5,
    time: "3 weeks ago",
    text:
      "The classes are well-organized and engaging. Teachers are highly knowledgeable, friendly, and always ready to help. They explain concepts clearly and encourage students to do their best. Learning here is a great experience."
  },
  {
    name: "Vidita Kotiyal",
    rating: 5,
    time: "",
    text:
      "My tuition teacher is absolutely amazing. Super smart, fun, and really good at explaining things in a simple way. Classes are never boring, they are interactive, clear, and actually enjoyable. I have learned a lot and feel way more confident now. Honestly, one of the best teachers I have had. Highly recommend."
  },
  {
    name: "Daksh Rana",
    rating: 5,
    time: "Edited 7 months ago",
    text:
      "Niraj Sir explains concepts clearly, making even complex topics easy to understand. Their teaching style is engaging, and they ensure every student grasps the fundamentals. With their guidance, learning accounts feels both structured and enjoyable. Good to be a part of Niraj Jha Classes."
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(242,78,30,0.12),transparent_35%),radial-gradient(circle_at_100%_30%,rgba(13,107,122,0.12),transparent_35%),linear-gradient(to_bottom,#f7f4ef,#f4f1ea)]" />

      <Hero />

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="glass rounded-3xl p-8 interactive relative overflow-hidden">
            <div className="absolute -top-20 -right-12 h-44 w-44 rounded-full bg-[var(--accent)]/10 blur-2xl" />
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Admission Open</p>
            <h2 className="section-title text-4xl sm:text-5xl mt-3 leading-tight">XI & XII Commerce Coaching</h2>
            <p className="mt-4 text-slate-700 text-lg">
              Learn with a structured plan: weekly tests, chapter-wise assignments, and 3 rounds of revision to
              keep every concept sharp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="px-3 py-1.5 rounded-full bg-white border">Small batches</span>
              <span className="px-3 py-1.5 rounded-full bg-white border">Personal attention</span>
              <span className="px-3 py-1.5 rounded-full bg-white border">Online / Offline</span>
            </div>
          </div>

          <div className="bg-[var(--ink)] text-white rounded-3xl p-8 interactive border border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Centers</p>
            <h3 className="font-display text-3xl mt-3">Rohini Locations</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li>D-3/31, 1st Floor, Sec-16, Rohini</li>
              <li>220 (2nd Floor), SG Mall, DC Chowk, Rohini, Sec-9</li>
            </ul>
            <div className="mt-6 text-slate-300 text-sm">Call/WhatsApp: 9999800978, 9873330978</div>
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl p-6 text-center interactive border border-white/60 bg-gradient-to-b from-white/90 to-white/65"
            >
              <p className="font-display text-4xl text-[var(--ink)]">{item.stat}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="py-14 px-6 bg-white/90">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Courses</p>
              <h2 className="section-title text-4xl mt-2">All Commerce Subjects</h2>
            </div>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold focus-ring"
            >
              Get the timetable
            </a>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="border border-slate-200 rounded-2xl p-5 interactive bg-gradient-to-br from-white to-orange-50/40"
              >
                <h3 className="font-semibold text-lg text-slate-900">{program.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{program.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="glass rounded-3xl p-8 interactive">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Why Students Choose Us</p>
            <h2 className="section-title text-4xl mt-2">Structured + Supportive</h2>
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--ink)] text-white rounded-3xl p-8 interactive border border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Guidance</p>
            <h3 className="font-display text-3xl mt-3">Niraj Jha</h3>
            <p className="mt-3 text-slate-300">
              B.Com(H), M.Com (IGNOU), B.Ed (MDU). Trusted mentor for commerce students with consistent results and
              strong fundamentals.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200">
              <span className="px-3 py-1.5 rounded-full bg-white/10">Personal mentoring</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10">Parent updates</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10">Doubt sessions</span>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="glass rounded-3xl p-8 interactive">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Results</p>
            <h2 className="section-title text-4xl mt-2">Accounts Toppers</h2>
            <p className="mt-3 text-slate-600">Consistent board-level performance with top scores every year.</p>
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
              <div key={item} className="border border-slate-200 rounded-2xl p-4 bg-white interactive shadow-sm">
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[var(--ink)] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-28 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Testimonials</p>
            <h2 className="section-title text-4xl sm:text-5xl mt-3">Parents Love the Results</h2>
            <p className="mt-4 text-slate-300 max-w-lg">
              Consistent results and strong foundations built through structured teaching and personal attention.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <span className="text-yellow-300 font-semibold">5.0 Rating</span>
                <span>Google Reviews</span>
              </span>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-slate-200 overflow-x-auto snap-x snap-mandatory pb-2">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="bg-gradient-to-br from-white/15 to-white/5 rounded-2xl p-5 border border-white/10 interactive min-w-[280px] sm:min-w-[360px] snap-start"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center text-sm font-semibold">
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-yellow-300 font-semibold">{review.rating}.0 / 5</span>
                      {review.time ? <span>- {review.time}</span> : null}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-slate-200 leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Gallery</p>
              <h2 className="section-title text-4xl mt-2">Classroom Highlights</h2>
            </div>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold focus-ring"
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
                  className="w-full rounded-2xl shadow-md interactive border border-slate-200"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8 interactive">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">FAQ</p>
            <h2 className="section-title text-4xl mt-2">Common Questions</h2>
            <div className="mt-6 grid gap-4 text-sm text-slate-700">
              <div className="border rounded-2xl p-4 interactive bg-white/75">
                <p className="font-semibold">Do you offer demo classes?</p>
                <p className="mt-2 text-slate-600">Yes, demo sessions are available for new admissions.</p>
              </div>
              <div className="border rounded-2xl p-4 interactive bg-white/75">
                <p className="font-semibold">Are online classes available?</p>
                <p className="mt-2 text-slate-600">Yes, online and offline batches are available.</p>
              </div>
              <div className="border rounded-2xl p-4 interactive bg-white/75">
                <p className="font-semibold">How are tests conducted?</p>
                <p className="mt-2 text-slate-600">Weekly tests, mock tests, and revision assessments.</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--ink)] text-white rounded-3xl p-8 interactive border border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Admission Support</p>
            <h3 className="font-display text-3xl mt-3">Talk to Us</h3>
            <p className="mt-3 text-slate-300">
              We will suggest the right batch and timeline based on your goals.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold focus-ring"
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
            <div className="mt-6 text-sm text-slate-300">Sec-16 & Sec-9, Rohini - Limited seats</div>
          </div>
        </div>
      </section>
    </main>
  );
}
