const ADD_NEW_USER = "ADD_NEW_USER";
const DELETE_USER = "DELETE_NOTE";


const initialState = {	
	users: [
		{
			id: 1,
			firstname: "Sergey",
			lastnmae: "Popach",
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
	]
}

//Users Reducer
const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		
		default:
			return state;

	}
}

//Actions
export const addNewUserActionCreator = () => ({type: ADD_NEW_USER, payload: ""});
export const deleteUserActionCreator = (id) => ({type: DELETE_USER, payload: id});

export default usersReducer;