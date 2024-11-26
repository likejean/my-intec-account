import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Record from './components/Note/Record';
import Profile from './components/Profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>			
			<div className="app-wrapper">
				<Header />
				<Navbar />		
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/notes" element={<Record />} />
					<Route path="/dialogs" element={<Dialogs />} />
					
				</Routes>
			</div>
			
		</BrowserRouter>
	);
}

export default App;
