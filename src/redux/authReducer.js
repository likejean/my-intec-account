const SET_USER_DATA = "SET_USER_DATA";


const initialState = {	
	id: null,
	email: null,
	login: null,
	firstname: null,
	lastname: null,
	isFetching: false
}

//Users Reducer
const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA: {
			return {
				...state, 
				...action.payload
			}
		}
		
		default:
			return state;

	}
}

//Actions

export const setAuthUserActionCreator = (user) => ({type: SET_USER_DATA, payload: user});


export default authReducer;