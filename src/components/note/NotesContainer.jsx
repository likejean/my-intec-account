import { addNewNoteActionCreator, updateNewNoteActionCreator } from "../../redux/notesReducer";
import NotesPage from "./Notes";

const NotesContainer = (props) => {	

	const state = props.store.getState();
	const addNewNoteDispatch = () => props.store.dispatch(addNewNoteActionCreator());
	const changeNewNoteDispatch = () => props.store.dispatch(updateNewNoteActionCreator());

	return <NotesPage 
		addNewNoteHandler={addNewNoteDispatch} 
		inputOnChangeHandler={changeNewNoteDispatch}
		newNoteText={state.notesPage.newNoteText} 
		notes={state.notesPage.notes}
	/>;
}

export default NotesContainer;