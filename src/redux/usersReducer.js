const ADD_NEW_USER = "ADD_NEW_USER";
const DELETE_USER = "DELETE_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


const initialState = {	
	users: [],
	pageSize: 5,
	totalUsersCount: 40,
	currentPage: 2
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
				users: [...state.users.concat(newUser)]				
			}
		}

		case SET_USERS: {
			return {
				...state, 
				users: [...action.payload]
			}
		}

		case SET_CURRENT_PAGE: {
			return {
				...state, 
				currentPage: action.payload
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
export const setUsersCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, payload: page});

export default usersReducer;