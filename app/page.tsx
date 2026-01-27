"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollSection from "./components/ScrollSection";
import LoopStrip from "./components/LoopStrip";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const ctaOpacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.72, 0.82], [12, 0]);

  const sections = useMemo(
    () => [
      {
        kicker: "oneday.capital",
        titleLines: ["Trade one day.", "Protect capital.", "Repeat."],
        bodyLines: ["A discipline-first platform for intraday and 0DTE traders."],
        emphasize: ["one day", "Protect", "Repeat"],
        cta: { label: "Start Today", href: "/start" },
        variant: "hero" as const,
      },
      {
        titleLines: ["Capital is not built in a week."],
        bodyLines: [
          "It’s built — or destroyed — in single sessions.",
          "One day at a time.",
        ],
        emphasize: ["Capital", "single sessions", "One day"],
      },
      {
        titleLines: ["0DTE compresses time."],
        bodyLines: [
          "Errors compound fast.",
          "Emotion gets expensive.",
          "Discipline must be daily.",
        ],
        emphasize: ["0DTE", "Errors", "Discipline"],
      },
      {
        titleLines: ["You don’t need better predictions."],
        bodyLines: [
          "You need cleaner execution.",
          "You don’t need more trades.",
          "You need fewer mistakes.",
        ],
        emphasize: ["predictions", "execution", "fewer mistakes"],
      },
      {
        titleLines: ["Not signals.", "Not alerts.", "Not speed."],
        bodyLines: ["Structure."],
        emphasize: ["Not", "Structure"],
      },
      {
        titleLines: ["The One-Day Loop"],
        bodyLines: ["Prepare → Execute → Protect → Review → Return"],
        emphasize: ["Prepare", "Execute", "Protect", "Review", "Return"],
        slot: <LoopStrip />,
      },
      {
        titleLines: ["Inside"],
        bodyLines: [
          "Learn — short lessons. one sitting.",
          "Playbook — rules. setups. decisions.",
          "Plan — today’s levels. today’s risk.",
          "Review — what worked. what didn’t.",
        ],
        emphasize: ["Learn", "Playbook", "Plan", "Review"],
      },
      {
        titleLines: ["This is for traders who:"],
        bodyLines: [
          "Operate intraday or trade 0DTE",
          "Value rules over reactions",
          "Prefer consistency to excitement",
          "If you want shortcuts, keep scrolling.",
          "If you want control, continue.",
        ],
        emphasize: ["rules", "consistency", "control"],
      },
      {
        titleLines: ["Your only job:"],
        bodyLines: ["Execute today correctly.", "Tomorrow is earned."],
        emphasize: ["today", "correctly", "Tomorrow"],
      },
      {
        titleLines: ["Start Today"],
        bodyLines: ["Build capital", "one day at a time."],
        emphasize: ["Start Today", "capital", "one day"],
        cta: { label: "Start Today", href: "/start" },
        footerNote: "Educational content only. Not financial advice.",
      },
    ],
    []
  );

  return (
    <main className="relative">
      {/* Top bar */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div className="text-sm tracking-wide text-zinc-200">
            <span className="text-zinc-400">oneday</span>.capital
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/70 to-transparent" />
      </div>

      {/* Sticky CTA */}
      <motion.a
        href="/start"
        style={{ opacity: ctaOpacity, y: ctaY }}
        className="fixed bottom-5 right-5 z-50 rounded-2xl bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-950 shadow-lg hover:bg-white"
      >
        Start Today
      </motion.a>

      {/* Sections */}
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-28">
        {sections.map((s, i) => (
          <ScrollSection key={i} {...s} />
        ))}
      </div>

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-200px,rgba(244,244,245,0.08),transparent_55%)]" />
      </div>
    </main>
  );
}