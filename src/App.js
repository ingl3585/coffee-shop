import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Homepage />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
