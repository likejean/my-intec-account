import axios from 'axios';

let store = {
	_state: {
		usersPage: {
			users: [
				{
					id: 1,
					name: "Sergey"
				},
				{
					id: 2,
					name: "Olesia"
				}
			],
		},	
		notesPage: {
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
			allCommentsList: undefined
		}
		
	},

	getState() {
		return this._state;
	},

	subscribe (observer) {
		this._callSubscriber = observer;
	},

	_callSubscriber() {
		console.log("changed");
	},

	addNewNote () {
		this._state.notesPage.notes.push({
			id: this._state.notesPage.notes.length + 1,
			comments: [],
			category: "",
			title: "",
			topic: this._state.notesPage.newNoteText,
			conclusion: "",
			images: []
		});
		this._state.notesPage.newNoteText = "";
		this._callSubscriber(this._state);

	},

	changeNewNote (text) {
		this._state.notesPage.newNoteText = text;		
		this._callSubscriber(this._state);

	},
	
	dispatch(action) {
		if (action.type === "ADD_NEW_NOTE"){
			this._state.notesPage.notes.push({
				id: this._state.notesPage.notes.length + 1,
				comments: [],
				category: "",
				title: "",
				topic: this._state.notesPage.newNoteText,
				conclusion: "",
				images: []
			});
			this._state.notesPage.newNoteText = "";
			this._callSubscriber(this._state);
		}
		else if (action.type === "UPDATE_NEW_NOTE"){
			this._state.notesPage.newNoteText = action.payload;		
			this._callSubscriber(this._state);
		}
		else if (action.type === "GET_ALL_COMMENTS"){
			let comments = this._state.notesPage.notes.find(note => note.id === Number(action.payload)).comments;			
			this._state.notesPage.allCommentsList = comments;
		}
	}
}

export default store;



export const fetchAllUsers = async () => {
	try {
		const { data } = await axios.get("https://express-srv.onrender.com/api/users");
		return data;		
	} catch (err) {
		console.error(err);
	}
};


export const addNewNoteActionCreator = () => {
	return {
		type: 'ADD_NEW_NOTE',
		payload: ''
	}
}

export const updateNewNoteActionCreator = (text) => {
	return {
		type: 'UPDATE_NEW_NOTE',
		payload: text
	}
}

export const getAllCommentsActionCreator = (id) => {	
	return {
		type: 'GET_ALL_COMMENTS',
		payload: id
	}
}


