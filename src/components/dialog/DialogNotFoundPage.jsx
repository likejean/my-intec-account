import { Link } from "react-router-dom";

export default function DialogNotFoundPage() {
	return (
		<div>
			<h1>Error 404: DIALOG Not Found</h1>
			<Link to="/dialogs">Dialogs</Link>
		</div>
		
	)
}