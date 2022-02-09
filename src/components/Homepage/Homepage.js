import './homepage.css';
import topImg from '../../img/capp.jpg';
import bottomImg from '../../img/pour.jpg';

const Homepage = () => {
	return (
		<div className='container'>
			<div className='top-section'>
				<div className='top-right'>
					<img className='top-img' src={topImg} alt='coffee-img' />
				</div>
				<div className='top-left'>
					<div className='title'>Tony's Coffee</div>
					<div className='open-statement-one'>Enjoy your</div>
					<div className='open-statement-two'>morning coffee.</div>
					<div className='mid-desc-one'>
						Boost your productivity and build your mood
					</div>
					<div className='mid-desc-two'>
						with a glass of coffee in the morning.
					</div>
					<div className='mid-link-sec'>
						<button className='mid-btn'>Get yours now</button>
						<a className='mid-link' href='#'>
							Reservation
						</a>
					</div>
					<div>
						<div className='destination-section'>
							Enjoy your coffee in our comfortable place.
						</div>
						<div className='space-list'>
							<div>
								<div>
									50<span className='golden-plus'>+</span>
								</div>
								<div>Private Room</div>
							</div>
							<div>
								<div>
									25<span className='golden-plus'>+</span>
								</div>
								<div>Event Space</div>
							</div>
							<div>
								<div>
									15<span className='golden-plus'>+</span>
								</div>
								<div>Creative Studios</div>
							</div>
						</div>
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
					<div>More than 100+ different types of coffee are ready</div>
					<div>to serve by our professionals.</div>
					<div className='coffee-sel-section'>
						<div>Cappucino</div>
						<div>•</div>
						<div>Late</div>
						<div>•</div>
						<div>Arabica</div>
					</div>
					<a className='bottom-link' href='#'>
						More menu
					</a>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
