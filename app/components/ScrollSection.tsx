"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  kicker?: string;
  titleLines: string[];
  bodyLines?: string[];
  emphasize?: string[];
  cta?: { label: string; href: string };
  variant?: "hero";
  slot?: React.ReactNode;
  footerNote?: string;
};

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function emphasizeLine(line: string, emphasize: string[] = []) {
  let out: React.ReactNode[] = [line];

  emphasize.forEach((term) => {
    out = out.flatMap((chunk, idx): React.ReactNode[] => {
      if (typeof chunk !== "string") return [chunk];
      const parts = chunk.split(new RegExp(`(${escapeRegExp(term)})`, "gi"));
      return parts.map((p, j) => {
        if (p.toLowerCase() === term.toLowerCase()) {
          return (
            <strong key={`${idx}-${j}-${term}`} className="font-semibold text-zinc-50">
              {p}
            </strong>
          );
        }
        return <React.Fragment key={`${idx}-${j}-${term}`}>{p}</React.Fragment>;
      });
    });
  });

  return out;
}

export default function ScrollSection({
  kicker,
  titleLines,
  bodyLines = [],
  emphasize = [],
  cta,
  variant,
  slot,
  footerNote,
}: Props) {
  const isHero = variant === "hero";

  return (
    <section className={isHero ? "min-h-[88vh]" : "min-h-[70vh]"}>
      <div className="flex min-h-[inherit] flex-col justify-center">
        <div className="max-w-2xl">
          {kicker ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-sm tracking-wide text-zinc-400"
            >
              {kicker}
            </motion.div>
          ) : null}

          <div className="space-y-2">
            {titleLines.map((line, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={
                  isHero
                    ? "text-4xl font-medium tracking-tight text-zinc-50 md:text-6xl"
                    : "text-3xl font-medium tracking-tight text-zinc-50 md:text-4xl"
                }
              >
                {emphasizeLine(line, emphasize)}
              </motion.h2>
            ))}
          </div>

          {bodyLines.length ? (
            <div className="mt-7 space-y-3">
              {bodyLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.55, delay: 0.12 + i * 0.07 }}
                  className={isHero ? "text-lg text-zinc-300 md:text-xl" : "text-base text-zinc-300 md:text-lg"}
                >
                  {emphasizeLine(line, emphasize)}
                </motion.p>
              ))}
            </div>
          ) : null}

          {slot ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-8"
            >
              {slot}
            </motion.div>
          ) : null}

          {cta ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-10"
            >
              <a
                href={cta.href}
                className="inline-flex items-center justify-center rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 shadow-lg shadow-black/30 hover:bg-white"
              >
                {cta.label}
              </a>
            </motion.div>
          ) : null}

          {footerNote ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 text-xs text-zinc-500"
            >
              {footerNote}
            </motion.div>
          ) : null}
        </div>
      </div>

      <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
    </section>
  );
}