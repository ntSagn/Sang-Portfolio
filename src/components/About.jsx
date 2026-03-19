import React from "react";
import { motion } from "framer-motion";
import aboutMe from "../assets/about-me.png";

const highlights = [
  {
    title: "Software Engineering Foundation",
    desc: "Solid grounding in software design, API development, and practical full-stack implementation.",
  },
  {
    title: "Team & Product Mindset",
    desc: "Comfortable working in collaborative projects with role-based workflows and clear delivery goals.",
  },
  {
    title: "Continuous Learning",
    desc: "Actively improving through real projects, mentorship, and modern tools in the web ecosystem.",
  },
];

const education = {
  school: "Sai Gon University",
  degree: "Engineer in Software Engineering",
  gpa: "3.37 / 4.0",
  period: "10/2021 - 10/2025",
  location: "Ho Chi Minh City, Vietnam",
};

const achievements = [
  "Academic Excellence Scholarship - Semester 1 (2023-2024)",
  "Academic Excellence Scholarship - Semester 1 (2024-2025)",
  "TOEIC 625 (Listening/Reading), valid 06/2025 - 06/2027",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          className="glass card-glow overflow-hidden rounded-3xl p-3"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={aboutMe}
            alt="About me"
            className="h-[360px] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </motion.div>
        <div>
          <h2 className="mb-4 text-3xl font-bold text-[var(--text)] md:text-4xl">About Me</h2>
          <p className="mb-6 leading-relaxed text-[var(--muted)]">
            I am a fresher Software Engineer with a strong interest in building useful software products. I enjoy turning
            requirements into clean interfaces and dependable backend features, and I am looking to grow through real
            projects, mentorship, and continuous learning.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item, idx) => (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-[var(--line)] bg-[rgba(16,37,51,0.75)] p-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
              >
                <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-[var(--secondary)]">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-2xl border border-[var(--line)] bg-[rgba(16,37,51,0.75)] p-4">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[var(--secondary)]">Education</h3>
              <p className="text-base font-semibold text-[var(--text)]">{education.school}</p>
              <p className="text-sm text-[var(--muted)]">{education.degree}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">GPA: {education.gpa}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[var(--primary)]">{education.period} · {education.location}</p>
            </article>

            <article className="rounded-2xl border border-[var(--line)] bg-[rgba(16,37,51,0.75)] p-4">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[var(--secondary)]">Honors & Awards</h3>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}