import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={css.dialogs}>
			<div className={css.dialogItems}>
				<div className={css.dialog + ' ' + css.active}>
					Sergey
				</div>
				<div className={css.dialog}>
					Olesia
				</div>
				<div className={css.dialog}>
					Ivan
				</div>
				<div className={css.dialog}>
					Halina
				</div>
			</div>
			<div className={css.messageItems}>
				<div className={css.message}>
					Hello!
				</div>
				<div className={css.message}>
					How are you?
				</div>
				<div className={css.message}>
					I'm doing fine so far...
				</div>
			</div>
		</div>
	)
}

export default Dialogs;





