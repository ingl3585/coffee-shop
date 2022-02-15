import './homepage.css';
import topImg from '../../img/capp.jpg';
import wayne from '../../img/wayne-ent.png';
import cp from '../../img/cp-company.png';
import li from '../../img/li-ind.jpeg';

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
				</div>
			</div>
			<div className='mid-section'>
				<div className='mid-left'>
					<div className='destination-title'>
						Enjoy your coffee in a comfortable place.
					</div>
					<div className='destination-list'>
						<div>
							<div className='numbers'>
								50<span className='golden-text'>+</span>
							</div>
							<div>Private Rooms</div>
						</div>
						<div>
							<div className='numbers'>
								25<span className='golden-text'>+</span>
							</div>
							<div>Event Spaces</div>
						</div>
						<div>
							<div className='numbers'>
								15<span className='golden-text'>+</span>
							</div>
							<div>Creative Studios</div>
						</div>
					</div>
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
						<div className='golden-text'>Cappuccino</div>
						<div>•</div>
						<div>Latte</div>
						<div>•</div>
						<div>Arabica</div>
					</div>
					<a className='mid-link' href='/menu'>
						More menu
					</a>
				</div>
			</div>
			<div className='bottom-section'>
				<div className='logo-section'>
					<div className='bottom-open-statement'>
						They trust Tony's Coffee as their work place
					</div>
					<div className='logo-images'>
						<img className='li-logo' src={li} alt='li-logo' />
						<img className='wayne-logo' src={wayne} alt='wayne-logo' />
						<img className='cp-logo' src={cp} alt='cp-logo' />
					</div>
				</div>
				<div className='review-section'>
					<div className='left-review-card'>
						<div className='title golden-text'>Our Review</div>
						<div className='bottom-mid-statement-one'>
							Let Our Customer <br /> Talk About Us
						</div>
						<div className='bottom-mid-statement-two'>
							We are always proving the best to make our customer pleasant with
							our services.
						</div>
						<div className='review-choices'>
							<div>Before</div>
							<div>Next</div>
						</div>
					</div>
					<div className='right-review-card'>
						<div>
							"I really love the Cappucinas. The coffee was very smooth. I
							really love the Cappucinas. The coffee was very smooth."
						</div>
						<div>Michael Jack</div>
						<div>- Coffee Lover</div>
					</div>
					<div className='bottom-closing-statement-one'>
						<div>Take Your</div>
						<div>Coffee Now</div>
					</div>
					<div className='bottom-closing-statement-two'>
						<div>
							Don't let your coffee cold. Let's go to{' '}
							<span className='golden-text'>Tony's Coffee</span> and
						</div>
						<div>get your coffee and boost your day now.</div>
					</div>
				</div>
			</div>
			{/* <div className='footer'>
				<div>
					<div>Logo</div>
					<div>
						Tony's Coffee is a cafe that serve many variants of coffee and other
						dishes in a very comfortable place.
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
			</div> */}
		</div>
	);
};

export default Homepage;
