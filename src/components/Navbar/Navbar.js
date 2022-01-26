import './navbar.css';
import Phone from '../../img/phone-icon.png';

const Navbar = () => {
	return (
		<nav className='nav-container'>
			<div className='nav-logo'>Tony's Coffee</div>
			<ul className='nav-links-list'>
				<li className='nav-toggle'>
					<i class='fas fa-bars'></i>
				</li>
				<li className='nav-links'>
					<a href='/'>Home</a>
				</li>
				<li className='nav-links'>
					<a href='/menu'>Menu</a>
				</li>
				<li className='nav-links'>
					<a href='/reviews'>Reviews</a>
				</li>
				<li className='nav-links'>
					<a href='contact'>Contact</a>
				</li>
			</ul>
			<div className='nav-contact-container'>
				<div className='nav-contact-list'>
					<img className='phone-icon' src={Phone} alt='phone' />
					<div className='phone-number'>(763) 548-4009</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
