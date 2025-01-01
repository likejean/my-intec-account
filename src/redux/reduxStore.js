import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';


let rootReducer = combineReducers({
	notesPage: notesReducer,
	usersPage: usersReducer,
	homePage: authReducer
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Disable serializability check if needed
			immutableCheck: false,   
		}),
	});

window.store = store;

export default store;

