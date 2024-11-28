import { Link, Outlet } from "react-router-dom";
import { Flex } from 'antd';

export default function DialogsPage() {
	const dialogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<div>
			<Flex gap="start" vertical>
				{dialogs.map((item) => (
					<Link 
						key={item} 
						to={`/dialogs/${item}`}
						className={({isActive}) => {
							return isActive ? 'active' : 'inactive'
						}}
					>
					Dialog {item}
					</Link>
				))}
			</Flex>
			<Outlet />
		</div>
	);
}