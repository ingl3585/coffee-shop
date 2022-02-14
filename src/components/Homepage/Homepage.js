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
			<div>
				<div className='bottom-section'>
					<div className='image-collage'>Image 1 Image 2 Image 3 Image 4</div>
					<div>
						<div className='bottom-statement'>
							They trust Tony's Coffee as their work place
						</div>
						<div className='logo-section'>
							<div>Logo 1</div>
							<div>Logo 2</div>
							<div>Logo 3</div>
							<div>Logo 4</div>
						</div>
					</div>
					<div>
						<div>
							<div>Our Review</div>
							<div>Let Our Customer Talk About Us</div>
							<div>
								We are always proving the best to make our customer pleasant
								with our services.
							</div>
							<div>Before</div>
							<div>Next</div>
						</div>
						<div>
							<div>
								"I really love the Cappucinas. The coffee was very smooth. I
								really love the Cappucinas. The coffee was very smooth."
							</div>
							<div>Michael Jack</div>
							<div>- Coffee Lover</div>
						</div>
						<div>
							<div>Take Your Coffee Now</div>
							<div>
								Don't let your coffee cold. Let's go to Tony's Coffee and get
								your coffee and boost your day now.
							</div>
						</div>
					</div>
				</div>
				<div className='footer'>
					<div>
						<div>Logo</div>
						<div>
							Tony's Coffee is a cafe that serve many variants of coffee and
							other dishes in a very comfortable place.
						</div>
						<div>Location Img</div>
						<div>Made Up Address</div>
					</div>
					<div>
						<div>
							<div>Facility</div>
							<ul>
								<li>Private Room</li>
								<li>Meeting Room</li>
								<li>Event Space</li>
								<li>Creative Studio</li>
								<li>Custom Room</li>
							</ul>
						</div>
						<div>
							<div>Products</div>
							<ul>
								<li>Coffee</li>
								<li>Beverages</li>
								<li>Dishes</li>
							</ul>
						</div>
					</div>
					<hr />
					<div>Copyright 2022 Tony's Coffee. All right reserved.</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
