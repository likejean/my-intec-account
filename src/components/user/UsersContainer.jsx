import { addNewUserActionCreator, deleteUserActionCreator, setUsersActionCreator, setUsersCurrentPageActionCreator, isUsersDataLoadingActionCreator } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import UsersPage from './Users';
import { Spin } from 'antd';
import { arrayBufferToBase64, base64Flag } from '../../utils/arrayBufferToBase64';


//API: GET axios request to server
const UsersContainer = ({
	setUsersDataLoadingStatus,
	setUsersHandler, 
	setUsersCurrentPageHandler,
	users,
	pageSize,
	totalUsersCount,
	currentPage,
	isFetching
}) => {

	useEffect(() => {
		const itKamasutraUsers = async() => {
			setUsersDataLoadingStatus(false);
			const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`);			
			const data = await response.data.items;
			setUsersDataLoadingStatus(true);
			if (setUsersHandler) setUsersHandler(data);	
		}

		itKamasutraUsers();
	},[setUsersHandler, currentPage, pageSize, setUsersDataLoadingStatus]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		// Fetch data here
	// 		const response = await axios.get("https://express-srv.onrender.com/api/users");
	// 		const data = await response.data.payload;
	// 		if (setUsersHandler) setUsersHandler(data);			
	// 	};

	// 	fetchData();
	// }, [setUsersHandler]); // The empty dependency array ensures the effect runs only once on mount
	
	return (
		<UsersPage 
			setUsersCurrentPageHandler={setUsersCurrentPageHandler}
			users={users}
			isFetching={isFetching}
			pageSize={pageSize}
			totalUsersCount={totalUsersCount}
			currentPage={currentPage}
		/>
	);
}

//STORE: mapping state to presentational component Users props
const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

//STORE: mapping dispatch to presentation component Users props
const mapDispatchToProps = (dispatch) => {
	return {		
		addNewUserHandler: () => dispatch(addNewUserActionCreator()),
		deleteUserHandler: (id) => dispatch(deleteUserActionCreator(id)),
		setUsersHandler: (users) => dispatch(setUsersActionCreator(users)),
		setUsersCurrentPageHandler: (page) => dispatch(setUsersCurrentPageActionCreator(page)),
		setUsersDataLoadingStatus: (status) => dispatch(isUsersDataLoadingActionCreator(status))
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);