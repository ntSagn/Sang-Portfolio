import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { label: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { label: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { label: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { label: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { label: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
  { label: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
  { label: "NodeJS", icon: <FaNodeJs className="text-green-400" /> },
  { label: "Git", icon: <FaGitAlt className="text-red-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-bold text-[var(--text)] md:text-4xl">Core Skills</h2>
        <p className="text-sm text-[var(--muted)]">Crafting performant and delightful interfaces</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.label}
            className="glass card-glow flex flex-col items-center rounded-2xl p-5 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.07 }}
          >
            <div className="mb-2 text-4xl">{skill.icon}</div>
            <p className="text-base font-semibold text-[var(--text)]">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}