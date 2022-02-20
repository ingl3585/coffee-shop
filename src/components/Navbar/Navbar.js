import './navbar.css';
import Menu from '../../img/menu.png';
import Close from '../../img/close.png';
import { HashLink as Link } from 'react-router-hash-link';

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
				<Link href='#/'>Tony's Coffee</Link>
			</div>
			<nav className='navigation'>
				<a href='#/'>Home</a>
				<Link className='desktop-menu' to='/#menu'>
					Menu
				</Link>
				<Link className='desktop-reviews' to='/#reviews'>
					Reviews
				</Link>
				<Link href='#/contact'>Contact</Link>
			</nav>
			<div className='toggleBox'>
				<a onClick={showMenu} href='#'>
					<img className='menu' src={Menu} alt='menu' />
					<img className='close' src={Close} alt='close' />
				</a>
			</div>
		</section>
	);
};

export default Navbar;
