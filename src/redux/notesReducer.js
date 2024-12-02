const ADD_NEW_NOTE = "ADD_NEW_NOTE";
const CHANGE_NEW_NOTE = "CHANGE_NEW_NOTE";

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
	newNoteText: ''

}

const notesReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case ADD_NEW_NOTE:
			let newNote = {
				id: state.notes.length + 1,
				comments: [],
				category: "",
				title: "",
				topic: state.newNoteText,
				conclusion: "",
				images: []
			};

			return {
				notes: [...state.notes.concat(newNote)],
				newNoteText: ''
			}

		case CHANGE_NEW_NOTE:
			return {
				notes: [...state.notes],
				newNoteText: action.payload
			}	

		default:
			return state;

	}
}

//Actions
export const addNewNoteActionCreator = () => ({type: ADD_NEW_NOTE, payload: ""});
export const updateNewNoteActionCreator = (text) => ({type: CHANGE_NEW_NOTE, payload: text});

export default notesReducer;