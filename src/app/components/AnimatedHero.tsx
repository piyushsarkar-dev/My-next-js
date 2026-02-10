"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type AnimatedHeroProps = {
  kicker?: string;
  title?: string;
  subtitle?: string;
};
function splitToGraphemes(text: string) {
  if (!text) return [];
  // Fixes Bengali/emoji/combining marks being split incorrectly.
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Seg = (Intl as any)?.Segmenter;
    if (Seg) {
      const segmenter = new Seg(undefined, { granularity: "grapheme" });
      return Array.from(
        segmenter.segment(text),
        (s: { segment: string }) => s.segment,
      );
    }
  } catch {
    // ignore
  }
  return Array.from(text);
}

export default function AnimatedHero({
  kicker = "NEXT.JS // START",
  title = "Hello!",
  subtitle = "A small page with big motion — crisp typography, bold color, and a cinematic load-in.",
}: AnimatedHeroProps) {
  const reduceMotion = useReducedMotion();
  const storageKey = "my-next-js:name";

  const [name, setName] = React.useState<string>("");
  const [draft, setDraft] = React.useState<string>("");

  React.useEffect(() => {
    try {
      const existing = window.localStorage.getItem(storageKey);
      if (existing && existing.trim()) {
        setName(existing.trim());
        setDraft(existing.trim());
      }
    } catch {
      // ignore storage failures
    }
  }, []);

  const displayTitle = name ? `Hello, ${name}` : title;

  const container = {
    hidden: {},
    show: {
      transition:
        reduceMotion ?
          { duration: 0 }
        : { staggerChildren: 0.035, delayChildren: 0.15 },
    },
  };

  const char = {
    hidden:
      reduceMotion ?
        { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 18, filter: "blur(10px)" },
    show:
      reduceMotion ?
        { opacity: 1, y: 0, filter: "blur(0px)" }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            ease: [0.2, 0.85, 0.2, 1] as const,
          },
        },
  };

  return (
    <section className="hero">
      <div className="heroTop">
        <div
          className="kicker reveal"
          style={{ ["--d" as never]: "40ms" }}>
          <span
            className="kickerDot"
            aria-hidden
          />
          {kicker}
        </div>

        <motion.h1
          key={displayTitle}
          className="heroTitle"
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={displayTitle}>
          <span
            className="heroTitleGlow"
            aria-hidden
          />
          {name ?
            <>
              {splitToGraphemes("Hello,").map((c, idx) => (
                <motion.span
                  key={`hello-${c}-${idx}`}
                  className={c === " " ? "heroChar heroCharSpace" : "heroChar"}
                  variants={char}>
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
              <motion.span
                className="heroChar heroCharSpace"
                variants={char}
                aria-hidden
              />
              {splitToGraphemes(name).map((c, idx) => (
                <motion.span
                  key={`name-${c}-${idx}`}
                  className={
                    c === " " ?
                      "heroChar heroCharName heroCharSpace"
                    : "heroChar heroCharName"
                  }
                  variants={char}>
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </>
          : splitToGraphemes(displayTitle).map((c, idx) => (
              <motion.span
                key={`${c}-${idx}`}
                className={c === " " ? "heroChar heroCharSpace" : "heroChar"}
                variants={char}>
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))
          }
        </motion.h1>

        <p
          className="heroSubtitle reveal"
          style={{ ["--d" as never]: "220ms" }}>
          {name ?
            <>
              Welcome back, <span className="nameAccent">{name}</span>.{" "}
              {subtitle}
            </>
          : subtitle}
        </p>

        {!name && (
          <form
            className="nameForm reveal"
            style={{ ["--d" as never]: "300ms" }}
            onSubmit={(e) => {
              e.preventDefault();
              const next = draft.trim().slice(0, 28);
              if (!next) return;
              setName(next);
              try {
                window.localStorage.setItem(storageKey, next);
              } catch {
                // ignore storage failures
              }
            }}>
            <label
              className="srOnly"
              htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              className="input"
              autoComplete="name"
              inputMode="text"
              placeholder="Type your name…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button
              className="btn btnPrimary"
              type="submit">
              Continue
            </button>
          </form>
        )}

        {name && (
          <div
            className="nameTools reveal"
            style={{ ["--d" as never]: "300ms" }}>
            <button
              type="button"
              className="linkBtn"
              onClick={() => {
                setName("");
                setDraft("");
                try {
                  window.localStorage.removeItem(storageKey);
                } catch {
                  // ignore
                }
              }}>
              Not you? Reset name
            </button>
          </div>
        )}

        <div
          className="heroCtas reveal"
          style={{ ["--d" as never]: "360ms" }}>
          <motion.a
            href="#features"
            className="btn btnPrimary"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
            Explore the vibe
          </motion.a>
          <motion.a
            href="#"
            className="btn btnGhost"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
            Make it yours
          </motion.a>
        </div>
      </div>

      <div
        className="heroOrbs"
        aria-hidden>
        <div className="orb orbA" />
        <div className="orb orbB" />
        <div className="orb orbC" />
      </div>
    </section>
  );
}
