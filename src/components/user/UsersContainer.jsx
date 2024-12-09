import { addNewUserActionCreator, deleteUserActionCreator, setUsersActionCreator, setUsersCurrentPageActionCreator } from "../../redux/usersReducer";
import UsersPage from "./Users";
import { connect } from "react-redux";



//mapping state to presentational component Users props
const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

//mapping dispatch to presentation component Users props
const mapDispatchToProps = (dispatch) => {
	return {		
		addNewUserHandler: () => dispatch(addNewUserActionCreator()),
		deleteUserHandler: (id) => dispatch(deleteUserActionCreator(id)),
		setUsersHandler: (users) => dispatch(setUsersActionCreator(users)),
		setUsersCurrentPageHandler: (page) => dispatch(setUsersCurrentPageActionCreator(page))

	}
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersPage);