import AnimatedHero from "./components/AnimatedHero";

export default function Page() {
	return (
		<div className="siteShell">
			<header
				className="topBar reveal"
				style={{ ["--d" as never]: "60ms" }}>
				<div className="brand">
					<span
						className="brandMark"
						aria-hidden
					/>
					<span className="brandText">My-next-js</span>
				</div>
				<nav className="nav">
					<a
						className="navLink"
						href="#features">
						Features
					</a>
					<a
						className="navLink"
						href="#notes">
						Notes
					</a>
				</nav>
			</header>

			<main className="main">
				<AnimatedHero />

				<section
					id="features"
					className="section">
					<div
						className="sectionHead reveal"
						style={{ ["--d" as never]: "120ms" }}>
						<h2 className="h2">High-impact animation</h2>
						<p className="muted">
							One orchestrated load-in beats scattered motion.
						</p>
					</div>

					<div className="grid">
						<article
							className="card reveal"
							style={{ ["--d" as never]: "160ms" }}>
							<div className="cardTop">
								<span className="tag">Stagger</span>
								<span className="tag tagAlt">Blur-in</span>
							</div>
							<h3 className="h3">Cinematic entrance</h3>
							<p className="muted">
								Hero letters arrive with blur → snap, while
								sections follow with a soft lift.
							</p>
						</article>

						<article
							className="card reveal"
							style={{ ["--d" as never]: "220ms" }}>
							<div className="cardTop">
								<span className="tag">CSS Vars</span>
								<span className="tag tagAlt">Grid</span>
							</div>
							<h3 className="h3">Bold theme system</h3>
							<p className="muted">
								A dominant dark ink base with neon accents, all
								driven by variables.
							</p>
						</article>

						<article
							className="card reveal"
							style={{ ["--d" as never]: "280ms" }}>
							<div className="cardTop">
								<span className="tag">Hover</span>
								<span className="tag tagAlt">Focus</span>
							</div>
							<h3 className="h3">Micro-interactions</h3>
							<p className="muted">
								Buttons and cards lift with crisp shadows and
								accessible focus rings.
							</p>
						</article>
					</div>
				</section>

				<section
					id="notes"
					className="section">
					<div
						className="panel reveal"
						style={{ ["--d" as never]: "160ms" }}>
						<div>
							<h2 className="h2">Want even more motion?</h2>
							<p className="muted">
								Tell me what kind of site this will be
								(portfolio, agency, product, shop) and I’ll tune
								the theme.
							</p>
						</div>
						<div className="panelActions">
							<a
								className="btn btnPrimary"
								href="#features">
								Rewatch the reveal
							</a>
							<a
								className="btn btnGhost"
								href="#">
								Add more sections
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer
				className="footer reveal"
				style={{ ["--d" as never]: "220ms" }}>
				<span className="muted">
					Built with Next.js + Tailwind + Motion
				</span>
				<span className="muted">Jan 2026</span>
			</footer>
		</div>
	);
}
