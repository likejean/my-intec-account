import React from 'react';
import user from '../../img/MissingAvatarIcon.png';
import css from './Header.module.css';

const Header = () => {
	return (
		<header className={css.header}>
			<img alt="" src={user} />
		</header>
	)
}

export default Header;





