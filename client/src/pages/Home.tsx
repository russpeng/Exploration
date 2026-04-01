/**
 * Home.tsx
 *
 * Design: Luminous Minimal
 * - Off-white (#FAFAFA) hero → deep ink (#0C0C14) below fold
 * - Playfair Display (display) + DM Sans (body)
 * - Periwinkle (#7C8CF8) accent
 * - Frosted-glass nav bar
 * - Soft radial glow behind hero animation
 * - Fade-up entrance animations on below-fold sections
 */

import { useEffect, useRef, useState } from "react";
import IntroAnimation from "@/components/ui/scroll-morph-hero";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Sparkles, Layers, Zap, Globe } from "lucide-react";

// --- Fade-up animation wrapper ---
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Frosted Nav ---
function Nav({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles
            size={18}
            className={`transition-colors duration-300 ${scrolled ? "text-[#7C8CF8]" : "text-gray-400"}`}
          />
          <span
            className={`font-semibold text-sm tracking-wide transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-gray-600"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Morph
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Vision", "Features", "Explore"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 hover:text-[#7C8CF8] ${
                scrolled ? "text-gray-500" : "text-gray-400"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#explore"
          className="text-xs font-semibold tracking-wide px-4 py-2 rounded-full border border-[#7C8CF8]/60 text-[#7C8CF8] hover:bg-[#7C8CF8] hover:text-white transition-all duration-200"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

// --- Feature Card ---
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <FadeUp delay={delay} className="group">
      <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-[#7C8CF8]/30 hover:-translate-y-1">
        <div className="w-10 h-10 rounded-xl bg-[#7C8CF8]/15 flex items-center justify-center mb-5 group-hover:bg-[#7C8CF8]/25 transition-colors duration-300">
          <Icon size={18} className="text-[#7C8CF8]" />
        </div>
        <h3
          className="text-lg font-semibold text-white mb-3 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-gray-400 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>
      </div>
    </FadeUp>
  );
}

// --- Main Page ---
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Nav scrolled={scrolled} />

      {/* ── Hero Section ── */}
      <section
        id="vision"
        className="relative w-full h-screen overflow-hidden"
        style={{
          background: "#FAFAFA",
        }}
      >
        {/* Soft radial glow background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504561471/j5PFnxbTBVUqbHaF8vYKGL/hero-glow-nthNLNJPsATjuxNa34Zz4z.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        />

        {/* The animation component — full viewport */}
        <div className="absolute inset-0">
          <IntroAnimation />
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <span
            className="text-[10px] tracking-[0.25em] uppercase text-gray-400"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Scroll to morph
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Transition gradient ── */}
      <div
        className="h-24 w-full"
        style={{
          background: "linear-gradient(to bottom, #FAFAFA 0%, #0C0C14 100%)",
        }}
      />

      {/* ── Vision Section ── */}
      <section
        id="features"
        className="relative py-32 px-6"
        style={{
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504561471/j5PFnxbTBVUqbHaF8vYKGL/section-dark-bg-QZtnqksDbzN8RcxugYVjmj.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0C0C14",
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <FadeUp>
            <p
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7C8CF8] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What We Build
            </p>
          </FadeUp>

          {/* Heading */}
          <FadeUp delay={0.1}>
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Technology that
              <br />
              <span className="text-[#7C8CF8]">feels alive.</span>
            </h2>
          </FadeUp>

          {/* Body */}
          <FadeUp delay={0.2}>
            <p
              className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mb-20"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We craft interfaces that respond, breathe, and evolve. Every interaction is
              intentional — designed to delight without distraction, to inform without
              overwhelming.
            </p>
          </FadeUp>

          {/* Thin rule */}
          <FadeUp delay={0.25}>
            <div
              className="w-full h-px mb-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, #7C8CF8 30%, #7C8CF8 70%, transparent)",
                opacity: 0.3,
              }}
            />
          </FadeUp>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Layers}
              title="Layered Motion"
              description="Multi-phase animations that guide the eye through a narrative — from scatter to arc, from chaos to clarity."
              delay={0.1}
            />
            <FeatureCard
              icon={Zap}
              title="Spring Physics"
              description="Every movement is governed by real spring dynamics. Nothing snaps — everything flows with natural weight and momentum."
              delay={0.2}
            />
            <FeatureCard
              icon={Globe}
              title="Responsive by Design"
              description="Layouts and animation radii adapt fluidly to any screen. The experience is consistent from mobile to ultrawide."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── Explore Section ── */}
      <section
        id="explore"
        className="relative py-32 px-6"
        style={{ backgroundColor: "#0C0C14" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Thin rule */}
          <FadeUp>
            <div
              className="w-full h-px mb-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, #7C8CF8 30%, #7C8CF8 70%, transparent)",
                opacity: 0.2,
              }}
            />
          </FadeUp>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="flex-1">
              <FadeUp>
                <p
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7C8CF8] mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  How It Works
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Three phases.
                  <br />
                  One seamless arc.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p
                  className="text-sm text-gray-400 leading-relaxed max-w-md"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  The hero begins with images scattered across the viewport. A spring
                  animation pulls them into a single line, then curves them into a rotating
                  arc that responds to your scroll — each card hoverable, each moment
                  intentional.
                </p>
              </FadeUp>
            </div>

            {/* Steps */}
            <div className="flex-1 flex flex-col gap-6">
              {[
                { num: "01", label: "Scatter", desc: "Images appear from random positions across the viewport." },
                { num: "02", label: "Line", desc: "Spring physics pulls every card into a single horizontal line." },
                { num: "03", label: "Arc", desc: "Scroll to morph the line into a rotating bottom arc of flip-cards." },
              ].map(({ num, label, desc }, i) => (
                <FadeUp key={num} delay={0.1 + i * 0.1}>
                  <div className="flex items-start gap-5 group">
                    <span
                      className="text-3xl font-bold text-white/10 group-hover:text-[#7C8CF8]/40 transition-colors duration-300 leading-none mt-1 select-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {num}
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold text-white mb-1 tracking-wide"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-xs text-gray-500 leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-12 px-6 border-t border-white/5"
        style={{ backgroundColor: "#0C0C14" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#7C8CF8]" />
            <span
              className="text-xs font-semibold text-gray-500 tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Morph
            </span>
          </div>
          <p
            className="text-[11px] text-gray-600"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Built with React · Framer Motion · Tailwind CSS · shadcn/ui
          </p>
          <p
            className="text-[11px] text-gray-600"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Morph. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
