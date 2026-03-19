import React from "react";
import {
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { motion } from "framer-motion";

const keySkills = [
  { label: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { label: "C#", icon: <FaCode className="text-purple-300" /> },
  { label: "PHP", icon: <FaPhp className="text-indigo-300" /> },
  { label: "ReactJS", icon: <FaReact className="text-cyan-300" /> },
  { label: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-300" /> },
  { label: "ASP.NET", icon: <FaCode className="text-sky-300" /> },
  { label: "MSSQL Server", icon: <FaDatabase className="text-red-300" /> },
  { label: "MySQL", icon: <FaDatabase className="text-blue-300" /> },
];

const toolLogos = [
  { label: "Bootstrap 5", icon: <FaCss3Alt className="text-violet-300" /> },
  { label: "Git", icon: <FaGitAlt className="text-orange-300" /> },
  { label: "GitHub", icon: <FaGithub className="text-slate-200" /> },
  { label: "Postman", icon: <FaCode className="text-orange-300" /> },
  { label: "Docker", icon: <FaDocker className="text-sky-300" /> },
  { label: "Visual Studio", icon: <FaCode className="text-purple-300" /> },
  { label: "Figma", icon: <FaFigma className="text-pink-300" /> },
  { label: "Basic AWS", icon: <FaAws className="text-amber-300" /> },
];

const slidingLogos = [...toolLogos, ...toolLogos];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-bold text-[var(--text)] md:text-4xl">Core Skills</h2>
        <p className="text-sm text-[var(--muted)]">Focused stack from my CV and project practice</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {keySkills.map((skill, idx) => (
          <motion.div
            key={skill.label}
            className="glass card-glow flex flex-col items-center rounded-2xl p-5 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.07 }}
          >
            <div className="mb-2 text-4xl">{skill.icon}</div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)]">{skill.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)] bg-[rgba(16,37,51,0.55)] px-3 py-4">
        <div className="skills-logo-slider flex w-max items-center gap-3">
          {slidingLogos.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex min-w-[148px] items-center justify-center gap-2 rounded-xl border border-[var(--line)] bg-[rgba(7,16,21,0.65)] px-4 py-3"
              aria-label={item.label}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}