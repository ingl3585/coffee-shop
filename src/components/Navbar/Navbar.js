import './navbar.css';
import Menu from '../../img/menu.png';
import Close from '../../img/close.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {
	// Mobile nav open and close animation
	const showMenu = () => {
		document.querySelector('.navigation').classList.toggle('active');
		document.querySelector('.menu').classList.toggle('hide');
		document.querySelector('.close').classList.toggle('show');
	};
	const closeMenu = () => {
		document.querySelector('.navigation').classList.toggle('active');
		document.querySelector('.close').classList.toggle('show');
	};
	return (
		<section>
			<div className='logo'>
				<Link to='/'>Tony's Coffee</Link>
			</div>
			<nav className='navigation'>
				<a href='/coffee-shop'>Home</a>
				<HashLink className='desktop-menu' to='#menu'>
					Menu
				</HashLink>
				<HashLink className='desktop-reviews' to='#reviews'>
					Reviews
				</HashLink>
				<a
					className='mobile-contact'
					onClick={closeMenu}
					href='/coffee-shop/#/contact'>
					Contact
				</a>
				<a className='desktop-contact' href='/coffee-shop#/contact'>
					Contact
				</a>
			</nav>
			<div className='toggleBox'>
				<a onClick={showMenu} to='#'>
					<img className='menu' src={Menu} alt='menu' />
					<img className='close' src={Close} alt='close' />
				</a>
			</div>
		</section>
	);
};

export default Navbar;
