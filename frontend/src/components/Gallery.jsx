import { useState, useEffect } from "react";
import Card from "./Card";

export default function Gallery() {
	// permet d'indiquer si les projets sont en cours de chargement ou non
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);

	// au rendu du composant, on récupère les données depuis l'api puis désactive l'état loading
	useEffect(() => {
		const getProjects = async () => {
			try {
				const resp = await fetch("http://localhost:4000/api/projects");
				const data = await resp.json();
				if (!data.ok) throw new Error(data.message);
				setProjects(data.data);
				setLoading(false);
			} catch (error) {
				console.log("Error fetching projects data: ", error.message);
				setLoading(false);
			}
		};

		// comme la fonction est asynchrone, elle doit être appelée à l'interieur du useEffect
		getProjects();
	}, []);

	return (
		<section className="gallery--section">
			<div className="gallery--wrapper">
				{/* si loading === true */}
				{loading && (
					<div className="gallery--loading--wrapper">
						<p>Chargement des données ...</p>
					</div>
				)}

				{/* si loading === false et que aucun projet n'est présent */}
				{!loading && projects.length === 0 && (
					<div className="gallery--error--wrapper">
						<p>
							Erreur lors du chargement des projets.
							<br></br>
							Veuillez réessayer utlerieurement.
						</p>
					</div>
				)}

				{/* si loading === false et que des projets sont bien présents */}
				{!loading &&
					projects.length > 0 &&
					projects.map((project, index) => (
						<Card key={index} project={project} />
					))}
			</div>
		</section>
	);
}
