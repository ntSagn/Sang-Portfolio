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
  const cvUrl = "https://drive.google.com/file/d/1HwX_n4oWRAue1cSwY-1YSiAy-fuY6a79/view?usp=sharing";

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
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] bg-[rgba(16,37,51,0.7)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            My CV
          </a>
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
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block rounded-xl border border-[var(--line)] bg-[rgba(16,37,51,0.45)] px-3 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            My CV
          </a>
        </div>
      )}
    </nav>
  );
}