import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaRegLightbulb } from "react-icons/fa";

const items = [
  {
    icon: <FaClock className="text-[var(--primary)]" />,
    title: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: <FaMapMarkerAlt className="text-[var(--secondary)]" />,
    title: "Based In",
    value: "Ho Chi Minh City, Viet Nam",
  },
  {
    icon: <FaRegLightbulb className="text-[var(--primary)]" />,
    title: "Current Focus",
    value: "React + .NET",
  },
];

export default function StatusWidget() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="glass card-glow rounded-3xl p-5 md:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-2xl font-bold text-[var(--text)]">Quick Snapshot</h2>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Available for internship & fresher & freelance
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-[var(--line)] bg-[rgba(16,37,51,0.75)] p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="mb-3 text-xl">{item.icon}</div>
              <p className="text-sm text-[var(--muted)]">{item.title}</p>
              <p className="mt-1 font-semibold text-[var(--text)]">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
