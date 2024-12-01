//BUSINESS LOGIC LAYER (BLL)
import axios from 'axios';
import notesReducer from './notesReducer';

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
			selectedNote: undefined
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
	
	dispatch(action) {
		
		this._state.notesPage = notesReducer(this._state.notesPage, action);		
		this._callSubscriber(this._state);
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



