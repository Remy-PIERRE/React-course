import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	// état mode sombre / claire
	const [theme, setTheme] = useState();

	// au rendu du composant, on regarde les préférences de l'utilisateur
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: light)")) setTheme("light");
		if (window.matchMedia("(prefers-color-scheme: dark)")) setTheme("dark");
	}, []);

	// cette fonction est activée au click du bouton du header et inverse le theme courant
	const handleThemeChange = () => {
		if (theme === "light") setTheme("dark");
		if (theme === "dark") setTheme("light");
	};

	return (
		<>
			<div className={theme === "dark" && "dark"}>
				<Header changeTheme={handleThemeChange} />
				<main>
					<Hero />
					<Gallery />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
