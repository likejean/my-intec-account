import axios from 'axios';

export const fetchAllUsers = async () => {
	try {
		const { data } = await axios.get("https://express-srv.onrender.com/api/users");
		return data;		
	} catch (err) {
		console.error(err);
	}
};

export const state = {
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
	notes: [
		{
			id: 1,
			note: "Hello!!!!"
		},
		{
			id: 2,
			note: "This is my first post!"
		}
	]
}

export const addNewNote = (newNote) => {
	state.notes.push({
		id: state.notes.length + 1,
		note: newNote
	});
}