import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesReducer';
import { addNewNoteActionCreator } from './notesReducer';

let allReducers = combineReducers({
	notesPage: notesReducer
});

let store = configureStore({reducer: allReducers});

console.log(store.dispatch(addNewNoteActionCreator()));
console.log(store.getState());

export default store;