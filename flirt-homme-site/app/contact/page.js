import SwingTag from "@/components/SwingTag";

export const metadata = {
  title: "Contact — FLIRT HOMME | Avi Couture Private Limited",
  description:
    "Get in touch with Avi Couture Private Limited for FLIRT HOMME shirt enquiries, private-label manufacturing and bulk orders.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-ink text-bone">
        <div className="container-px py-20 md:py-28">
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-5">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-2xl leading-tight">
            Let&rsquo;s talk shirts.
          </h1>
          <p className="mt-6 max-w-lg text-bone/70 leading-relaxed">
            Retail enquiry, private-label brief or a bulk order — send us the
            details and we&rsquo;ll get back with next steps.
          </p>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-px py-16 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-14">
          {/* Details */}
          <div className="space-y-10">
            <div>
              <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-3">
                Email
              </p>
              <a
                href="mailto:mis@avicouture.com"
                className="font-display text-2xl hover:text-brass transition-colors"
              >
                mis@avicouture.com
              </a>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-3">
                Phone
              </p>
              <a
                href="tel:+91XXXXXXXXXX"
                className="font-display text-2xl hover:text-brass transition-colors"
              >
                +91 XXXXX XXXXX
              </a>
              <p className="text-xs text-ink/45 mt-1 font-mono">
                Replace with your direct line before launch
              </p>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass mb-3">
                Workshop Address
              </p>
              <p className="font-display text-xl leading-snug">
                Avi Couture Private Limited
                <br />
                Moti Nagar, New Delhi
                <br />
                India
              </p>
              <p className="text-xs text-ink/45 mt-1 font-mono">
                Add full street address &amp; PIN code before launch
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <SwingTag code="MON–SAT" label="10 AM – 7 PM" tone="bone" rotate="-rotate-2" />
            </div>
          </div>

          {/* Form */}
          <div className="border hairline p-6 md:p-10 bg-bone-card">
            <h2 className="font-display text-2xl mb-6">Send an Enquiry</h2>
            <form
              action="https://formsubmit.co/mis@avicouture.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New enquiry — FLIRT HOMME website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] tracking-widest2 uppercase text-ink/60 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-bone border hairline px-4 py-3 focus:outline-none focus:border-brass"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block font-mono text-[11px] tracking-widest2 uppercase text-ink/60 mb-2">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full bg-bone border hairline px-4 py-3 focus:outline-none focus:border-brass"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] tracking-widest2 uppercase text-ink/60 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-bone border hairline px-4 py-3 focus:outline-none focus:border-brass"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-mono text-[11px] tracking-widest2 uppercase text-ink/60 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-bone border hairline px-4 py-3 focus:outline-none focus:border-brass"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiry_type" className="block font-mono text-[11px] tracking-widest2 uppercase text-ink/60 mb-2">
                  Enquiry Type
                </label>
                <select
                  id="enquiry_type"
                  name="enquiry_type"
                  className="w-full bg-bone border hairline px-4 py-3 focus:outline-none focus:border-brass"
                >
                  <option>Retail / Individual Order</option>
                  <option>Private Label</option>
                  <option>Bulk / Wholesale</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[11px] tracking-widest2 uppercase text-ink/60 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-bone border hairline px-4 py-3 focus:outline-none focus:border-brass"
                />
              </div>

              <button
                type="submit"
                className="font-mono text-[11px] tracking-widest2 uppercase bg-ink text-bone px-7 py-4 hover:bg-ink-soft transition-colors"
              >
                Send Enquiry
              </button>

              <p className="text-xs text-ink/45 font-mono leading-relaxed">
                Powered by FormSubmit — first submission will ask you to
                confirm mis@avicouture.com once. No backend server required.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="w-full h-[420px] grayscale contrast-125 opacity-90">
          <iframe
            title="Avi Couture Private Limited location"
            src="https://www.google.com/maps?q=Moti+Nagar,+New+Delhi,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="container-px py-4 text-xs text-bone/40 font-mono">
          Map centered on Moti Nagar, New Delhi — update the query in
          app/contact/page.js with your exact address for a precise pin.
        </p>
      </section>
    </>
  );
}
