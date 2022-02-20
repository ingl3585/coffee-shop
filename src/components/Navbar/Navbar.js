import './navbar.css';
import Menu from '../../img/menu.png';
import Close from '../../img/close.png';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
	// Mobile nav open and close animation
	const showMenu = () => {
		document.querySelector('.navigation').classList.toggle('active');
		document.querySelector('.menu').classList.toggle('hide');
		document.querySelector('.close').classList.toggle('show');
	};
	return (
		<section>
			<div className='logo'>
				<HashLink to='/'>Tony's Coffee</HashLink>
			</div>
			<nav className='navigation'>
				<HashLink to='/'>Home</HashLink>
				<HashLink className='desktop-menu' to='/#menu'>
					Menu
				</HashLink>
				<HashLink className='desktop-reviews' to='/#reviews'>
					Reviews
				</HashLink>
				<HashLink to='/contact'>Contact</HashLink>
			</nav>
			<div className='toggleBox'>
				<HashLink onClick={showMenu} to='#'>
					<img className='menu' src={Menu} alt='menu' />
					<img className='close' src={Close} alt='close' />
				</HashLink>
			</div>
		</section>
	);
};

export default Navbar;
