import { withRouter } from '../utils/WithRouterContainer';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import HomePage from './Home';
import { setAuthUserActionCreator } from '../../redux/authReducer';

//API: GET axios request to server
const HomeContainer = ({
	setAuthUserData,
	navigate,
	user
}) => {

	console.log(user)

	useEffect(() => {
		const setAuthUserData = async() => {
		
			
		}

		setAuthUserData();
	},[]);

	return (
		<HomePage 
			setAuthUserData={setAuthUserData}
			navigate={navigate}
			user={user}
		/>
	);
}



const withRouterlHomeContainer = withRouter(HomeContainer);

//STORE: mapping state to presentational component Users props
const mapStateToProps = (state) => {
	return {
		user: state.homePage
	}
}

//STORE: mapping dispatch to presentation component Users props
export default connect (mapStateToProps, {
	setAuthUserData: setAuthUserActionCreator
})(withRouterlHomeContainer);