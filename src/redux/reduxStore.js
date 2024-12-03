import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesReducer';


let rootReducer = combineReducers({
	notesPage: notesReducer
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Disable serializability check if needed
		}),
	});

export default store;

