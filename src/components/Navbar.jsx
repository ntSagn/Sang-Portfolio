import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cvUrl = "/cv/fresher-sw.pdf";

  const linkClass = ({ isActive }) =>
    [
      "rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition",
      isActive
        ? "bg-[rgba(45,212,191,0.2)] text-[var(--primary)]"
        : "text-[var(--text)] hover:bg-[rgba(249,115,22,0.12)] hover:text-[var(--secondary)]",
    ].join(" ");

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div className="glass card-glow mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
        <Link to="/" className="text-lg font-extrabold tracking-tight text-[var(--primary)] md:text-xl">
          Sang Portfolio
        </Link>
        <div className="hidden md:flex md:items-center md:gap-3">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <div className="group relative">
            <button
              className="rounded-full border border-[var(--line)] bg-[rgba(16,37,51,0.7)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              type="button"
            >
              My CV
            </button>
            <div className="invisible absolute right-0 top-[calc(100%+0.55rem)] z-50 min-w-44 rounded-2xl border border-[var(--line)] bg-[rgba(8,22,30,0.95)] p-2 opacity-0 shadow-2xl shadow-black/30 transition duration-200 before:absolute before:-top-[0.55rem] before:left-0 before:h-[0.55rem] before:w-full before:content-[''] group-hover:visible group-hover:opacity-100">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[rgba(45,212,191,0.15)] hover:text-[var(--primary)]"
              >
                View CV
              </a>
              <a
                href={cvUrl}
                download="NGUYEN_THANH_SANG_Fresher_SW.pdf"
                className="mt-1 block rounded-xl px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[rgba(249,115,22,0.16)] hover:text-[var(--secondary)]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <button
          className="rounded-xl border border-[var(--line)] bg-[rgba(16,37,51,0.6)] p-2 text-[var(--text)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="glass card-glow mx-auto mt-2 flex max-w-6xl flex-col gap-2 rounded-2xl px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-1 rounded-xl border border-[var(--line)] bg-[rgba(16,37,51,0.45)] p-2">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">My CV</p>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(45,212,191,0.15)] hover:text-[var(--primary)]"
            >
              View CV
            </a>
            <a
              href={cvUrl}
              download="NGUYEN_THANH_SANG_Fresher_SW.pdf"
              className="mt-1 block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[rgba(249,115,22,0.16)] hover:text-[var(--secondary)]"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}