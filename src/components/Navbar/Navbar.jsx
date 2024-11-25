/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import css from './Navbar.module.css';


const Navbar = () => {
	return (
		<div className={css.nav}>
			<ul>
				
				<li>
					<a href="/profile">Profile</a>
				</li>
				<li>
					<a href="/notes">Notes</a>
				</li>
				
			</ul>
		</div>
	)
}

export default Navbar;