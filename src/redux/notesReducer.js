const ADD_NEW_NOTE = "ADD_NEW_NOTE";
const CHANGE_NEW_NOTE = "CHANGE_NEW_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

const initialState = {	
	notes: [
		{
			id: 1,
			comments: [
				{id: 1, img: "", question: "How Long?", details: "Roman Empire lasted for 800 years"}, 
				{id: 2, img: "", question:"Who build pyramids?", details: "Pyramids were built by great civilization"},
				{id: 3, img: "", question:"Who is Aleksander Macedonian?", details: "The greatest general in history"}
			],
			category: "history",
			title: "Fall of Rome",
			topic: "Late Roman Empire",
			conclusion: "the longest"
		},
		{
			id: 2,
			comments: [
				{id: 1, img: "", question: "Infinite Potential Well", details: "Roman Empire lasted for 800 years"}, 
				{id: 2, img: "", question:"Finite Potential Well", details: "Roman Empire lasted for 800 years"}
			],
			category: "quantum mechanics",
			title: "Potential Wells",
			topic: "Particle in Potential Wells",
			conclusion: ""
		},
		{
			id: 3,
			comments: [
				{id: 1, img: "", question: "Differentiation", details: "Roman Empire lasted for 800 years"}, 
				{id: 2, img: "", question:"Integration", details: "Roman Empire lasted for 800 years"}
			],
			category: "math",
			title: "Integration and Differentiation",
			topic: "Calculus",
			conclusion: "",
			images: []
		},
		{
			id: 4,
			comments: [
				{id: 1, img: "", question: "Old Tastement", details: "Roman Empire lasted for 800 years"}, 
				{id: 2, img: "", question:"New Tastement", details: "Roman Empire lasted for 800 years"}
			],
			category: "theology",
			title: "Son of God",
			topic: "Jesus Christ",
			conclusion: "",
			images: []
		}
	],
	newNoteText: ''
}

//Notes Reducer
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

		case DELETE_NOTE:
			const filteredNotes = state.notes.filter((note) => note.id !== Number(action.payload));
			const newItems = filteredNotes.map((item, index) => ({ ...item, id: index + 1 }));

			return {
				notes: [...newItems],
				newNoteText: ''
			}

		default:
			return state;

	}
}

//Actions
export const addNewNoteActionCreator = () => ({type: ADD_NEW_NOTE, payload: ""});
export const updateNewNoteActionCreator = (text) => ({type: CHANGE_NEW_NOTE, payload: text});
export const deleteNoteActionCreator = (id) => ({type: DELETE_NOTE, payload: id});

export default notesReducer;