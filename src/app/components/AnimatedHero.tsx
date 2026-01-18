"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedHeroProps = {
	kicker?: string;
	title?: string;
	subtitle?: string;
};

function splitToCharacters(text: string) {
	return Array.from(text);
}

export default function AnimatedHero({
	kicker = "NEXT.JS // START",
	title = "Hello!",
	subtitle = "A small page with big motion — crisp typography, bold color, and a cinematic load-in.",
}: AnimatedHeroProps) {
	const reduceMotion = useReducedMotion();

	const container = {
		hidden: {},
		show: {
			transition:
				reduceMotion ?
					{ duration: 0 }
				:	{ staggerChildren: 0.035, delayChildren: 0.15 },
		},
	};

	const char = {
		hidden:
			reduceMotion ?
				{ opacity: 1, y: 0, filter: "blur(0px)" }
			:	{ opacity: 0, y: 18, filter: "blur(10px)" },
		show:
			reduceMotion ?
				{ opacity: 1, y: 0, filter: "blur(0px)" }
			:	{
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
					className="heroTitle"
					variants={container}
					initial="hidden"
					animate="show"
					aria-label={title}>
					<span
						className="heroTitleGlow"
						aria-hidden
					/>
					{splitToCharacters(title).map((c, idx) => (
						<motion.span
							key={`${c}-${idx}`}
							className={
								c === " " ?
									"heroChar heroCharSpace"
								:	"heroChar"
							}
							variants={char}>
							{c === " " ? "\u00A0" : c}
						</motion.span>
					))}
				</motion.h1>

				<p
					className="heroSubtitle reveal"
					style={{ ["--d" as never]: "220ms" }}>
					{subtitle}
				</p>

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
