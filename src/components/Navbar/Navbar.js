import './navbar.css';
import Menu from '../../img/menu.png';
import Close from '../../img/close.png';

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
				<a href='/coffee-shop'>Tony's Coffee</a>
			</div>
			<nav className='navigation'>
				<a href='/coffee-shop'>Home</a>
				<a className='desktop-menu' href='/#menu'>
					Menu
				</a>
				<a className='desktop-reviews' href='/#reviews'>
					Reviews
				</a>
				<a href='contact'>Contact</a>
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
