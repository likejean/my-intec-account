import { NavLink, Outlet } from "react-router-dom";
import { Flex } from 'antd';

export default function ProfilesPage() {

	const profiles = [1, 2, 3, 4, 5, 6, 7, 8]
	return (
		<div>
			<Flex gap="start" vertical>
				{profiles.map((item) => (
					<NavLink 
						key={item} 
						to={`/profiles/${item}`}
						className={({isActive}) => {
							return isActive ? 'active' : 'inactive'
						}}
					>
						Profile {item}
					</NavLink>
				))}
			</Flex>
			<Outlet />
		</div>
	);
}