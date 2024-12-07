const ADD_NEW_USER = "ADD_NEW_USER";
const DELETE_USER = "DELETE_USER";
const SET_USERS = "SET_USERS";


const initialState = {	
	users: [
		{
			id: 1,
			avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
			firstname: "Sergey",
			lastname: "Popach",
			level: "Admin",
			location: {
				city: "Seattle",
				country: "United States"
			},
			username: "likejean",
			age: 47,
			aboutYourself: "TBD"
		},
		{
			id: 2,
			avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
			firstname: "Olesia",
			lastname: "Popach",
			level: "User",
			location: {
				city: "Seattle",
				country: "United States"
			},
			username: "olesiapopach",
			age: 39,
			aboutYourself: "TBD"
		},
		{
			id: 3,
			avatar: "https://i.pinimg.com/564x/63/13/b6/6313b6d4f9dc17bd7ffc2a08c4bb3ffa.jpg",
			firstname: "Alex",
			lastname: "Popach",
			level: "User",
			location: {
				city: "Everett",
				country: "United States"
			},
			username: "electric",
			age: 35,
			aboutYourself: "TBD"
		},
	]
}

//Users Reducer
const usersReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_NEW_USER: {
			let newUser = {
				id: 1,
				avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
				firstname: action.payload.firstname,
				lastname:  action.payload.lastname,
				level: "User",
				location: {
					city: action.payload.city,
					country: action.payload.country
				},
				username: action.payload.username,
				age: action.payload.age,
				aboutYourself: action.payload.aboutYourself
			};
			return {
				...state,
				users: [...state.users, newUser]				
			}
		}

		case SET_USERS: {
			return {
				...state, 
				users: [...state.users, ...action.payload]
			}
		}

		case DELETE_USER:
			const filteredUsers = state.users.filter((user) => user.id !== Number(action.payload));
			const newItems = filteredUsers.map((item, index) => ({ ...item, id: index + 1 }));

			return {
				...state,
				users: [...newItems]
			}

		default:
			return state;

	}
}

//Actions
export const addNewUserActionCreator = () => ({type: ADD_NEW_USER, payload: ""});
export const deleteUserActionCreator = (id) => ({type: DELETE_USER, payload: id});
export const setUsersActionCreator = (users) => ({type: SET_USERS, payload: users});

export default usersReducer;