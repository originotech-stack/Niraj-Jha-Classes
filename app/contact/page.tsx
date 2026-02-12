"use client";

export default function Contact() {
  return (
    <main className="relative overflow-hidden py-14 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(255,90,42,0.12),transparent_30%),radial-gradient(circle_at_100%_35%,rgba(15,118,110,0.12),transparent_35%)]" />

      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
        <section className="glass rounded-3xl p-8 interactive">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
          <h1 className="section-title text-4xl sm:text-5xl mt-3">Book A Demo Class</h1>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Send your details on WhatsApp and get the right batch suggestion for Class XI or XII.
          </p>

          <div className="mt-7 grid gap-5 text-sm text-slate-700">
            <div className="surface rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Call / WhatsApp</p>
              <p className="mt-2 font-semibold text-slate-900">9999800978, 9873330978</p>
            </div>

            <div className="surface rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Centers</p>
              <p className="mt-2">D-3/31, 1st Floor, Sec-16, Rohini</p>
              <p>220 (2nd Floor), SG Mall, DC Chowk, Rohini, Sec-9</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Maps</p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Sec-16 Center
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13993.493053251656!2d77.1129344!3d28.73827055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01ad6f3269c7%3A0x4d7ae2ef383bfa41!2sNiraj%20Jha%20Classes!5e0!3m2!1sen!2sin!4v1770913671090!5m2!1sen!2sin"
                      width="100%"
                      height="220"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Map for Sec-16 Rohini center"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Sec-9 Center
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.120673342775!2d77.11647268384692!3d28.717742783827926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01c4548a96cd%3A0xdcebac7f2eb8a27e!2sNiraj%20Jha%20Classes!5e0!3m2!1sen!2sin!4v1770913771512!5m2!1sen!2sin"
                      width="100%"
                      height="220"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Map for Sec-9 Rohini center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const cls = (form.elements.namedItem("class") as HTMLInputElement).value;
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
            const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
            const msg = (form.elements.namedItem("message") as HTMLInputElement).value;

            const text =
              `Hello Niraj Jha Classes,%0AName: ${name}%0AClass: ${cls}` +
              `%0ASubject: ${subject}%0APhone: ${phone}%0AMessage: ${msg}`;
            window.open(`https://wa.me/919999800978?text=${text}`, "_blank");
          }}
          className="surface rounded-3xl p-8 sm:p-9 space-y-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Quick Enquiry Form</p>
            <h2 className="section-title text-3xl mt-2">Send Details on WhatsApp</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              placeholder="Student Name"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus-ring"
              required
            />
            <input
              name="class"
              placeholder="Class (XI / XII)"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus-ring"
              required
            />
          </div>

          <input
            name="phone"
            placeholder="Phone / WhatsApp Number"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus-ring"
            required
          />

          <input
            name="subject"
            placeholder="Subject (Accounts, Economics, etc.)"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus-ring"
          />

          <textarea
            name="message"
            placeholder="Write your query"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus-ring"
            rows={4}
          />

          <button className="btn-primary w-full rounded-full px-6 py-3 font-semibold focus-ring">
            Enquire on WhatsApp
          </button>

          <p className="text-xs text-slate-500 text-center">Response time: usually within a few hours.</p>
        </form>
      </div>
    </main>
  );
}
