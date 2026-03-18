import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "SocialPicture",
    desc: "Full-stack social app for image sharing with moderation workflows, privacy controls, and admin analytics.",
    tech: ["React.js", "Tailwind CSS", "ASP.NET Core", "EF Core"],
    link: "https://github.com",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Department Management System",
    desc: "Team and project management platform with role-based access, Gantt tracking, and real-time updates.",
    tech: ["React", "Redux", "Tailwind CSS", "ASP.NET Core", "SignalR"],
    link: "https://github.com",
    img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "eClass Web Meeting Integration",
    desc: "Contributed a web meeting module for an online learning platform, improving collaboration and classroom UX.",
    tech: ["PHP", "Node.js", "WebRTC", "Git/GitHub"],
    link: "https://eclass.edu.vn/",
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-[var(--text)] md:text-4xl">Featured Projects</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="glass card-glow group overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-xl font-bold text-[var(--text)]">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm text-[var(--muted)]">{project.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--line)] bg-[rgba(16,37,51,0.85)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--primary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] transition hover:text-[#ff9a53]"
              >
                Explore <FaArrowUpRightFromSquare />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}