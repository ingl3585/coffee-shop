import './homepage.css';
import topImg from '../../img/capp.jpg';
import midImg from '../../img/pour.jpg';

const Homepage = () => {
	return (
		<div className='container'>
			<div className='top-section'>
				<div className='top-right'>
					<img className='top-img' src={topImg} alt='coffee-img' />
				</div>
				<div className='top-left'>
					<div className='title golden-text'>Tony's Coffee</div>
					<div className='top-statement-one'>Enjoy your</div>
					<div className='top-statement-two'>morning coffee.</div>
					<div className='top-desc-one'>
						Boost your productivity and build your mood
					</div>
					<div className='top-desc-two'>
						with a glass of coffee in the morning.
					</div>
					<div className='top-link-sec'>
						<button className='top-btn'>Get yours now</button>
						<a className='top-link' href='#'>
							Reservation
						</a>
					</div>
					<div>
						<div className='destination-section'>
							Enjoy your coffee in our comfortable place.
						</div>
						<div className='destination-list'>
							<div>
								<div className='numbers'>
									50<span className='golden-text'>+</span>
								</div>
								<div>Private Room</div>
							</div>
							<div>
								<div className='numbers'>
									25<span className='golden-text'>+</span>
								</div>
								<div>Event Space</div>
							</div>
							<div>
								<div className='numbers'>
									15<span className='golden-text'>+</span>
								</div>
								<div>Creative Studios</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mid-section'>
				<div className='mid-left'>
					<img className='mid-img' src={midImg} alt='coffee-assortment-img' />
				</div>
				<div className='mid-right'>
					<div className='title golden-text'>Our coffee</div>
					<div className='mid-statement'>
						Choose Your
						<br /> Favorite Coffee
					</div>
					<div className='mid-desc-one'>
						More than 100+ different types of coffee are ready
					</div>
					<div className='mid-desc-two'>to serve by our professionals.</div>
					<div className='mid-coffee-section'>
						<div className='golden-text'>Cappucino</div>
						<div>•</div>
						<div>Late</div>
						<div>•</div>
						<div>Arabica</div>
					</div>
					<a className='mid-link' href='#'>
						More menu
					</a>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
