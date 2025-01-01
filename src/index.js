import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomeContainer from './components/home/HomeContainer';
import HomeNotFoundPage from './components/home/HomeNotFoundPage';

import LoginPage from './components/auth/LoginPage';

import UsersContainer from './components/user/UsersContainer';
import UserNotFoundPage from './components/user/UserNotFoundPage';
import User from './components/user/User';

import NoteNotFoundPage from './components/note/NoteNotFoundPage';
import Note from './components/note/Note';
import NotesContainer from './components/note/NotesContainer';

import ProfilesPage from './components/profile/Profiles';
import ProfileNotFoundPage from './components/profile/ProfileNotFoundPage';
import Profile from './components/profile/Profile';

import DialogsPage from './components/dialog/Dialogs';
import DialogNotFoundPage from './components/dialog/DialogNotFoundPage';
import Dialog from './components/dialog/Dialog';

import CommentNotFoundPage from './components/note/comment/CommentNotFoundPage';
import CommentsPage from './components/note/comment/Comments';
import Comment from './components/note/comment/Comment';


//This root must created only ONE time.
const root = ReactDOM.createRoot(document.getElementById('root'));

//Function to render and rerender (if necessary) the ReacDOM tree.
export var rerenderEntireReactDomTree = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomeContainer />,
			errorElement: <HomeNotFoundPage />
		},
		{
			path: '/login',
			element: <LoginPage />,
			errorElement: <HomeNotFoundPage />
		},
		{
			path: '/users',
			element: <UsersContainer />,
			errorElement: <UserNotFoundPage />,
			children: [
				{
					path: '/users/:userId',
					element: <User />,
					errorElement: <UserNotFoundPage />
				}				
			]
		},
		{
			path: '/notes',
			element: <NotesContainer />,
			errorElement: <NoteNotFoundPage />,
			children: [
				{
					path: '/notes/:noteId',
					element: <Note />,
					errorElement: <NoteNotFoundPage />,
					children: [
						{
							path: '/notes/:noteId/comments',
							element: <CommentsPage />,
							errorElement: <CommentNotFoundPage />,
							children: [
								{
									path: '/notes/:noteId/comments/:commentId',
									element: <Comment />,
									errorElement: <CommentNotFoundPage />,
									
								}
							]
						}						
					]
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

	root.render(
		<React.StrictMode>
			<Provider store={store}>   
				<RouterProvider router={router} />
			</Provider>			
		</React.StrictMode>
	);
}

//initial render
rerenderEntireReactDomTree();

//pass function as a callback for Redux state
store.subscribe(()=> {
	rerenderEntireReactDomTree();
});




