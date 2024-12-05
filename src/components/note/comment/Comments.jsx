import {useParams, NavLink, Link, useOutletContext, Outlet } from "react-router-dom";
import { Flex } from 'antd';

export default function CommentsPage() {
	const params = useParams();
	const { comments } = useOutletContext();
	return (
		<div>
			<Flex gap="start" vertical>
				{comments.map((item) => (
					<NavLink 
						key={item.id} 
						to={`/notes/${params.noteId}/comments/${item.id}`}
						className={({isActive}) => {
							return isActive ? 'active' : 'inactive'
						}}
					>
						{item.question}
					</NavLink>
				))}
				<Link to={`/notes/${params.noteId}`}>BACK</Link>
			</Flex>
			<Outlet context={{comments}}/>
		</div>
	);
}