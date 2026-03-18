import React, { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-[var(--primary)]" />,
    label: "Email",
    value: "sangthanhnguyen2910@gmail.com",
  },
  {
    icon: <FaPhone className="text-[var(--secondary)]" />,
    label: "Phone",
    value: "+84 962 227 431",
  },
  {
    icon: <FaLocationDot className="text-[var(--primary)]" />,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
  },
];

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold text-[var(--text)] md:text-4xl">Contact</h2>
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <aside className="glass card-glow rounded-3xl p-6">
          <h3 className="mb-5 text-xl font-bold text-[var(--text)]">Lets build something great</h3>
          <div className="space-y-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--line)] bg-[rgba(16,37,51,0.75)] p-4">
                <div className="mb-1 flex items-center gap-2 text-sm text-[var(--muted)]">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <p className="font-semibold text-[var(--text)]">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="glass card-glow rounded-3xl p-6">
          {success ? (
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-4 text-emerald-300">
              Thank you for your message. I will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                className="rounded-xl border border-[var(--line)] bg-[rgba(7,16,21,0.55)] p-3 text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="rounded-xl border border-[var(--line)] bg-[rgba(7,16,21,0.55)] p-3 text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
              />
              <textarea
                required
                placeholder="Tell me about your idea"
                className="rounded-xl border border-[var(--line)] bg-[rgba(7,16,21,0.55)] p-3 text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                rows={6}
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-[var(--secondary)] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:translate-y-[-2px] hover:bg-[#ff9a53]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}