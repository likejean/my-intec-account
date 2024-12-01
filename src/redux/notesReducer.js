const ADD_NEW_NOTE = "ADD_NEW_NOTE";
const UPDATE_NEW_NOTE = "UPDATE_NEW_NOTE";
const SELECT_NOTE = "SELECT_NOTE";

const initialState = {	
	notes: [
		{
			id: 1,
			comments: ["history", "quantum mechanics"],
			category: "",
			title: "",
			topic: "Hello!!!",
			conclusion: "",
			images: []
		},
		{
			id: 2,
			comments: ["math"],
			category: "",
			title: "",
			topic: "This is my first post!",
			conclusion: "",
			images: []
		},
		{
			id: 3,
			comments: ["music"],
			category: "",
			title: "",
			topic: "How are you?",
			conclusion: "",
			images: []
		},
		{
			id: 4,
			comments: ["theology"],
			category: "",
			title: "",
			topic: "Not much... Just resting on my chair",
			conclusion: "",
			images: []
		}
	],
	newNoteText: '',
	selectedNote: undefined
	

}

const notesReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case ADD_NEW_NOTE:
			state.notes.push({
				id: state.notes.length + 1,
				comments: [],
				category: "",
				title: "",
				topic: state.newNoteText,
				conclusion: "",
				images: []
			});
			state.newNoteText = "";
			return state;

		case UPDATE_NEW_NOTE:
			state.newNoteText = action.payload;	
			return state;	

		case SELECT_NOTE:
			let selectedNote = state.notes.find(note => note.id === Number(action.payload));			
			state.selectedNote = selectedNote;
			return state;

		default:
			return state;

	}
}

//Actions
export const addNewNoteActionCreator = () => ({type: ADD_NEW_NOTE, payload: ""});
export const updateNewNoteActionCreator = (text) => ({type: UPDATE_NEW_NOTE, payload: text});
export const getNoteActionCreator = (id) => ({type: SELECT_NOTE, payload: id});

export default notesReducer;