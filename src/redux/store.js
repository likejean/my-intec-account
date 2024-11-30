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
					comments: [],
					category: "",
					title: "",
					topic: "Hello!!!",
					conclusion: "",
					images: []
				},
				{
					id: 2,
					comments: [],
					category: "",
					title: "",
					topic: "This is my first post!",
					conclusion: "",
					images: []
				},
				{
					id: 3,
					comments: [],
					category: "",
					title: "",
					topic: "How are you?",
					conclusion: "",
					images: []
				},
				{
					id: 4,
					comments: [],
					category: "",
					title: "",
					topic: "Not much... Just resting on my chair",
					conclusion: "",
					images: []
				}
			],
			newNoteText: ''
		}
		
	},

	getState() {
		return this._state;
	},

	_subscribe (observer) {
		this._rerenderEntireReactDomTree = observer;
	},

	_rerenderEntireReactDomTree() {
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
		this._rerenderEntireReactDomTree(this._state);

	},

	changeNewNote (text) {
		console.log(this._state.notesPage)
		this._state.notesPage.newNoteText = text;
		console.log(text)
		this._rerenderEntireReactDomTree(this._state);

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

