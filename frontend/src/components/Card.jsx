export default function Card({ project }) {
	return (
		<div className="card--wrapper">
			<div className="card--image--wrapper">
				<img src={project.image} alt={project.title} />
			</div>

			<div className="card--footer--wrapper">
				<h3>{project.title}</h3>
				<p>{project.description}</p>
			</div>
		</div>
	);
}
