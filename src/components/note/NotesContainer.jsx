import { addNewNoteActionCreator, updateNewNoteActionCreator, deleteNoteActionCreator } from "../../redux/notesReducer";
import NotesPage from "./Notes";
import { connect } from "react-redux";


//mapping state to presentational component Notes props
const mapStateToProps = (state) => {
	return {
		notes: state.notesPage.notes,
		newNoteText: state.notesPage.newNoteText
	}
}

//mapping dispatch to presentation component Notes props
const mapDispatchToProps = (dispatch) => {
	return {
		addNewNoteHandler: () => dispatch(addNewNoteActionCreator()),
		inputOnChangeHandler: (text) => dispatch(updateNewNoteActionCreator(text)),
		deleteNoteHandler: (id) => dispatch(deleteNoteActionCreator(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage)
