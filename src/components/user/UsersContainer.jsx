import { addNewUserActionCreator, deleteUserActionCreator, setUsersActionCreator, setUsersCurrentPageActionCreator, isUsersDataLoadingActionCreator } from '../../redux/usersReducer';
import { withRouter } from './UsersWithRouterContainer';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import UsersPage from './Users';
import { Spin } from 'antd';
import { arrayBufferToBase64, base64Flag } from '../../utils/arrayBufferToBase64';
import { PropertySafetyTwoTone } from '@ant-design/icons';


//API: GET axios request to server
const UsersContainer = ({
	navigate,
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
		// Change the URL to `/new-url` after the component mounts
		navigate('/users');
	}, [navigate]); // Empty dependency array ensures this runs only once on mount

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
			navigate={navigate}
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


const withRouterlUsersContainer = withRouter(UsersContainer);


//STORE: mapping dispatch to presentation component Users props
export default connect (mapStateToProps, {
	addNewUserHandler: addNewUserActionCreator,
	deleteUserHandler: deleteUserActionCreator,
	setUsersHandler: setUsersActionCreator,
	setUsersCurrentPageHandler: setUsersCurrentPageActionCreator,
	setUsersDataLoadingStatus: isUsersDataLoadingActionCreator
})(withRouterlUsersContainer);