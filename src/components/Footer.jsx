import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-6xl px-4 pb-8 pt-6">
      <div className="glass rounded-2xl px-5 py-6 text-center text-[var(--muted)]">
        <div className="mb-3 flex justify-center gap-5">
          <a
            href="https://github.com/ntSagn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--primary)]"
          >
          <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/ntsang03/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--secondary)]"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://facebook.com/nowfteesang"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--primary)]"
          >
            <FaFacebook size={28} />
          </a>
        </div>
        <div className="text-sm">Built with React + Tailwind. Crafted by Sang Nguyen.</div>
        <div className="mt-1 text-xs">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
}