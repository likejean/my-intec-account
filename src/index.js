import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from "./components/home/Home";
import HomeNotFoundPage from './components/home/HomeNotFoundPage';

import NotesPage from './components/note/Notes';
import NoteNotFoundPage from './components/note/NoteNotFoundPage';

import ProfilesPage from "./components/profile/Profiles";
import ProfileNotFoundPage from './components/profile/ProfileNotFoundPage';
import Profile from './components/profile/Profile';

import DialogsPage from './components/dialog/Dialogs';
import DialogNotFoundPage from './components/dialog/DialogNotFoundPage';
import Dialog from './components/dialog/Dialog';
import Note from './components/note/Note';



const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <HomeNotFoundPage />
	},
	{
		path: '/notes',
		element: <NotesPage />,
		errorElement: <NoteNotFoundPage />,
		children: [
			{
				path: '/notes/:noteId',
				element: <Note />,
				errorElement: <NoteNotFoundPage />
			}
		]
	},
	{
		path: '/profiles',
		element: <ProfilesPage />,
		errorElement: <ProfileNotFoundPage/>,
		children: [
			{
				path: '/profiles/:profileId',
				element: <Profile />,
				errorElement: <ProfileNotFoundPage/>
			}
		]
	},
	{
		path: '/dialogs',
		element: <DialogsPage />,
		errorElement: <DialogNotFoundPage/>,
		children: [
			{
				path: '/dialogs/:dialogId',
				element: <Dialog />,
				errorElement: <DialogNotFoundPage/>
			}
		]
	},
	
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);


