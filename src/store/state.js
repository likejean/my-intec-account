import axios from 'axios';
import { rerenderEntireReactDomTree } from '../render';

export const fetchAllUsers = async () => {
	try {
		const { data } = await axios.get("https://express-srv.onrender.com/api/users");
		return data;		
	} catch (err) {
		console.error(err);
	}
};


export const state = {
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
	
}

window.state = state;

export const addNewNote = () => {
	
	state.notesPage.notes.push({
		id: state.notesPage.notes.length + 1,
		comments: [],
		category: "",
		title: "",
		topic: state.notesPage.newNoteText,
		conclusion: "",
		images: []
	});
	state.notesPage.newNoteText = "";
	rerenderEntireReactDomTree(state);
}


export const changeNewNote = (text) => {	
	state.notesPage.newNoteText = text;
	rerenderEntireReactDomTree(state);
}