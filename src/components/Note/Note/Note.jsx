import React from 'react';
import css from './Note.module.css';

const Note = (props) => {
	return (
		<div className={css.note}>
			<span>{props.message}</span>
		</div>
	)
}

export default Note;