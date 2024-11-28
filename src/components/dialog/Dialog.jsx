import { useParams, Link } from "react-router-dom";

export default function Dialog() {
	const params = useParams();
	return (
		<div>
			<h1>DIALOG: {params.dialogId}</h1>
			<Link to={`/dialogs`}>BACK</Link>
		</div>
		
	)
}