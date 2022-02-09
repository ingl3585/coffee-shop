import './homepage.css';
import topImg from '../../img/capp.jpg';
import bottomImg from '../../img/pour.jpg';

const Homepage = () => {
	return (
		<div>
			<div className='top-section'>
				<div className='top-right'>
					<img className='top-img' src={topImg} alt='coffee-img' />
				</div>
				<div className='top-left'>
					<h4>Tony's Coffee</h4>
					<h1>Enjoy your</h1>
					<h1>morning coffee.</h1>
					<p>Boost your productivity and build your mood</p>
					<p>with a glass of coffee in the morning.</p>
					<div>
						<button>Get yours now</button>
						<a href='#'>Reservation</a>
					</div>
					<h4>Enjoy your coffee in our comfortable place.</h4>
					<div>
						<div>50+ Private Room</div>
						<div>15+ Event Space</div>
						<div>15+ Creative Studio</div>
					</div>
				</div>
			</div>
			<div className='bottom-section'>
				<div className='bottom-left'>
					<img
						className='bottom-img'
						src={bottomImg}
						alt='coffee-assortment-img'
					/>
				</div>
				<div className='bottom-right'>
					<div>Our coffee</div>
					<div>Choose your favorite coffee</div>
					<p>More than 100+ different types of coffee are ready</p>
					<p>to serve by our professionals.</p>
					<div className='coffee-sel-section'>
						<div>Cappucino</div>
						<div>Late</div>
						<div>Arabica</div>
					</div>
					<a href='#'>More menu</a>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
