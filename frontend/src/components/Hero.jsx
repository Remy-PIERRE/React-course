export default function Hero() {
	return (
		<section className="hero--section">
			<div className="hero--wrapper">
				<div className="hero--portrait--wrapper">
					<img
						src="/public/images/portrait.webp"
						alt="Portrait de Rémy Pierre"
					/>
				</div>

				<div className="hero--content--wrapper">
					<h2>Portfolio</h2>
					<p>
						Bonjour et bienvenue sur mon portfolio.
						<br></br>
						C'est ici que je présente mes travaux.{" "}
					</p>
				</div>
			</div>
		</section>
	);
}
