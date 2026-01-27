"use client";

import { motion } from "framer-motion";

const items = ["Prepare", "Execute", "Protect", "Review", "Return"];

export default function LoopStrip() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/40">
      <div className="px-5 py-4">
        <div className="text-sm text-zinc-400">The loop</div>

        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-200"
            >
              <span className="font-medium">{t}</span>
              {i < items.length - 1 ? (
                <span className="ml-2 text-zinc-600">→</span>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}