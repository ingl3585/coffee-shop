import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Menu from './components/Menu/Menu';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/reviews' element={<Reviews />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
