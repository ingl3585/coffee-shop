import './homepage.css';
import topImg from '../../img/pexels-kaboompics-com-6347.jpg';
import bottomImg from '../../img/pexels-burst-374885.jpg';

const Homepage = () => {
	return (
		<div>
			<div>
				<h4>Tony's Coffee</h4>
				<h1>Enjoy your</h1>
				<h1>morning coffee.</h1>
				<p>Boost your productivity and build your mood</p>
				<p>with a glass of coffee in the morning.</p>
				<button>Get yours now</button>
				<a href='#'>Reservation</a>
				<img className='top-img' src={topImg} alt='coffee-img' />
				<h4>Enjoy your coffee in our comfortable place.</h4>
				<div>50+ Private Room</div>
				<div>15+ Event Space</div>
				<div>15+ Creative Studio</div>
				<img
					className='bottom-img'
					src={bottomImg}
					alt='coffee-assortment-img'
				/>
				<div>Our coffee</div>
				<div>Choose your favorite coffee</div>
				<p>More than 100+ different types of coffee are ready</p>
				<p>to serve by our professionals.</p>
				<div>Cappucino</div>
				<div>Late</div>
				<div>Arabica</div>
				<a href='#'>More menu</a>
			</div>
		</div>
	);
};

export default Homepage;
