import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesReducer';


let allReducers = combineReducers({
	notesPage: notesReducer
});

let store = configureStore({reducer: allReducers});


export default store;