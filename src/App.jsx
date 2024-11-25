import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Record from './components/Note/Record';
import Profile from './components/Profile/Profile';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div>
				<Profile />
				<Record />
			</div>
			
		</div>
	);
}

export default App;
