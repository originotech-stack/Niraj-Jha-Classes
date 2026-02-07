"use client";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start">
        <div className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Contact
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mt-3">WhatsApp Enquiry</h1>
          <p className="mt-3 text-slate-600">
            Share your class and subject. We will suggest the right batch and
            timetable.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">Call / WhatsApp</p>
              <p>9999800978, 9873330978</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Centers</p>
              <p>D-3/31, 1st Floor, Sec-16, Rohini</p>
              <p>220 (2nd Floor), SG Mall, DC Chowk, Rohini, Sec-9</p>
            </div>
          </div>
        </div>

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
          className="bg-white rounded-3xl p-8 shadow-lg space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" placeholder="Student Name" className="w-full border p-3 rounded-lg" required />
            <input name="class" placeholder="Class (XI / XII)" className="w-full border p-3 rounded-lg" required />
          </div>
          <input
            name="phone"
            placeholder="Phone / WhatsApp Number"
            className="w-full border p-3 rounded-lg"
            required
          />
          <input
            name="subject"
            placeholder="Subject (Accounts)"
            className="w-full border p-3 rounded-lg"
          />
          <textarea name="message" placeholder="Message" className="w-full border p-3 rounded-lg" rows={4} />

          <button className="bg-[var(--accent)] text-white px-6 py-3 rounded-full font-semibold w-full">
            Enquire on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
