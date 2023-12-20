import { useEffect, useState } from "react";

export default function Header({ changeTheme }) {
	// état du bouton
	const [isButtonActivated, setIsButtonActivated] = useState(false);

	// au rendu du composant, on regarde les préférences de l'utilisateur et place le bouton dans l'état correspondant
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)"))
			setIsButtonActivated(true);
	}, []);

	// cette fonction est activée au click sur le bouton, change son état et appel la fonction correspondante dans app.jss
	const handleButtonActivation = () => {
		setIsButtonActivated((prevState) => !prevState);
		changeTheme();
	};

	return (
		<header className="page--header">
			<div className="header--wrapper">
				<h1>Rémy Pierre</h1>

				<div
					className="header--lightDark--wrapper"
					onClick={handleButtonActivation}>
					<div
						className={
							"header--lightDark--button " +
							(isButtonActivated ? "active" : null)
						}></div>
					<img
						src="/public/images/soleil_white.png"
						alt="icone d'un soleil pour activer le mode clair"
						className="header--lightDark--sun"
					/>
					<img
						src="/public/images/lune_yellow.png"
						alt="iconed'une lune pour activer le mode sombre"
						className="header--lightDark--moon"
					/>
				</div>

				<div className="header--user--wrapper">
					<a href="#">Login</a>
				</div>
			</div>
		</header>
	);
}
