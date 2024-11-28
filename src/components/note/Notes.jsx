import { Link, Outlet } from "react-router-dom";
import { Flex } from 'antd';


export default function NotesPage() {
	const notes = [1, 2, 3, 4, 5, 6]
	return (
		<div>
			<Flex gap="start" vertical>
				{notes.map((item) => (
					<Link 
						key={item} to={`/notes/${item}`}
						className={({isActive}) => {
							return isActive ? 'active' : 'inactive'
						}}
					>
						Note {item}
					</Link>
				))}
				
			</Flex>			
			<Outlet />			
		</div>
	);
}