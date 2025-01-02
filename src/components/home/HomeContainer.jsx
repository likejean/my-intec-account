import { withRouter } from '../utils/WithRouterContainer';
import { connect } from 'react-redux';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import HomePage from './Home';
import { setAuthUserActionCreator } from '../../redux/authReducer';

//API: GET axios request to server
const HomeContainer = ({
	setAuthUserData,
	navigate,
	user
}) => {

	const isMounted = useRef(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			const fetchData = async () => {
				setIsLoading(true);
				try {
					const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
						withCredentials: true
					})				
					setAuthUserData(response.data.data);
				} catch (err) {
					setError(err);
				} finally {
					setIsLoading(false);
				}
			};
		
			fetchData();
		}
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []); // Empty dependency array ensures the effect runs only once on mount

	return (
		<>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error: {error.message}</div>}
			{!isLoading && !error && (
				<HomePage 
					setAuthUserData={setAuthUserData}
					navigate={navigate}
					user={user}
				/>
			)}
		</>
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