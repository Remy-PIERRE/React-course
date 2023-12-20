export default function Footer() {
	return (
		<footer className="page--footer">
			<div className="footer--wrapper">
				<h2>Pour me contacter</h2>

				<div className="footer--content--wrapper">
					<div className="footer--content--left">
						<p>Rémy Pierre</p>
						<p>42 bis rue inconnue</p>
						<p>00 111</p>
						<p>La commune sur Rivière</p>
					</div>
					<div className="footer--content--right">
						<p>01 02 03 04 05</p>
						<p>remy.pierre@gmail.com</p>

						<div className="footer--socials--wrapper">
							<img src="/public/images/linkedin_white.png" />
							<img src="/public/images/facebook_white.png" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
