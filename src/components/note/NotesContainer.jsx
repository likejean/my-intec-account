import { addNewNoteActionCreator, updateNewNoteActionCreator, deleteNoteActionCreator } from "../../redux/notesReducer";
import NotesPage from "./Notes";

const NotesContainer = (props) => {	

	const state = props.store.getState();
	const addNewNoteDispatch = () => props.store.dispatch(addNewNoteActionCreator());
	const changeNewNoteDispatch = (text) => props.store.dispatch(updateNewNoteActionCreator(text));
	const deleteSelectedNote = (id) => props.store.dispatch(deleteNoteActionCreator(id));

	return <NotesPage 
		addNewNoteHandler={addNewNoteDispatch} 
		inputOnChangeHandler={changeNewNoteDispatch}
		deleteNoteHandler={deleteSelectedNote}
		newNoteText={state.notesPage.newNoteText} 
		notes={state.notesPage.notes}
	/>;
}

export default NotesContainer;