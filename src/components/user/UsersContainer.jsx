import { addNewUserActionCreator, deleteUserActionCreator, setUsersActionCreator } from "../../redux/usersReducer";
import UsersPage from "./Users";
import { connect } from "react-redux";



//mapping state to presentational component Users props
const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

//mapping dispatch to presentation component Users props
const mapDispatchToProps = (dispatch) => {
	return {		
		addNewUserHandler: () => dispatch(addNewUserActionCreator()),
		deleteUserHandler: (id) => dispatch(deleteUserActionCreator(id)),
		setUsersHandler: (users) => dispatch(setUsersActionCreator(users))

	}
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersPage);