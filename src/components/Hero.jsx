import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import bannerImage1 from "../assets/banner-1.jpg";
import bannerImage2 from "../assets/banner-2.png";
import bannerImage3 from "../assets/banner-3.jpg";

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "3+", label: "Years learning" },
  { value: "99%", label: "Delivery focus" },
];

const HERO_SLIDE_MS = 3600;

const heroSlides = [
  {
    src: bannerImage1,
    alt: "Developer workspace with laptop",
  },
  {
    src: bannerImage2,
    alt: "Code editor on a modern monitor setup",
  },
  {
    src: bannerImage3,
    alt: "Programming desk with keyboard and screen",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, HERO_SLIDE_MS);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section
      id="hero"
      className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-4 py-10 md:grid-cols-[1.15fr_0.85fr]"
    >
      <div>
        <motion.p
          className="mb-4 inline-flex rounded-full border border-[rgba(45,212,191,0.35)] bg-[rgba(45,212,191,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Full-stack Developer
        </motion.p>
        <motion.h1
          className="mb-4 text-4xl font-extrabold leading-tight text-[var(--text)] md:text-6xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi I'm
          <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            Sang Nguyen
          </span>
        </motion.h1>
        <motion.p
          className="mb-8 max-w-xl text-base text-[var(--muted)] md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          I design and build modern web apps using React and .NET, optimizing user experience, performance, and scalability.
        </motion.p>
        <motion.div
          className="mb-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:translate-y-[-2px] hover:bg-[#5de8d5]"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[var(--line)] bg-[rgba(16,37,51,0.7)] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--text)] transition hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
          >
            Contact Me
          </Link>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              className="glass card-glow rounded-2xl p-4"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + idx * 0.1, duration: 0.5 }}
            >
              <p className="text-2xl font-extrabold text-[var(--secondary)]">{item.value}</p>
              <p className="text-sm text-[var(--muted)]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="relative mx-auto w-full max-w-sm"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <div className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-[rgba(45,212,191,0.35)] to-[rgba(249,115,22,0.35)] blur-2xl" />
        <div className="glass card-glow relative overflow-hidden rounded-3xl p-3">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlides[activeSlide].src}
              src={heroSlides[activeSlide].src}
              alt={heroSlides[activeSlide].alt}
              className="h-[420px] w-full rounded-2xl object-cover"
              loading="lazy"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-[var(--line)] bg-[rgba(7,16,21,0.55)] px-3 py-2">
            {heroSlides.map((slide, idx) => (
              <span
                key={slide.src}
                className={[
                  "h-2 w-2 rounded-full transition-all duration-300",
                  idx === activeSlide ? "w-6 bg-[var(--secondary)]" : "bg-[rgba(255,255,255,0.35)]",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}