import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={css.nav}>

			<div className={css.item}>
				<NavLink to="/profile"  className={({ isActive }) => isActive ? css.active : 'inactive'}>Profile</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to="/notes"  className={({ isActive }) => isActive ? css.active : 'inactive'}>Notes</NavLink>
			</div>

			<div className={css.item}>
				<NavLink to="/dialogs" className={({ isActive }) => isActive ? css.active : 'inactive'}>Dialogs</NavLink>
			</div>

			
			
		</nav>
	)
}

export default Navbar;