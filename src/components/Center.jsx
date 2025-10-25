import './Center.css';
import travelVideo from '../assets/travel.mp4';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import { Link } from 'react-router-dom';
import camera from '../assets/camera.png';
import globe from '../assets/globe.png';
import compass from '../assets/compass.png';
import indo from '../assets/indo.avif';
import japan from '../assets/japan.avif';
import greece from '../assets/greece.avif';
import chile from '../assets/chile.avif';

function Center() {
  return (
    <div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className='welcome'>
          <div className='text'>
            <p>
              <b>PlanItEarth</b> is your trusted partner in global discovery—curating unforgettable journeys across the world’s
              most captivating destinations.<br /><br />
              We specialize in tailor-made itineraries and immersive travel experiences for individuals, groups, agencies,
              and travel brands—carefully crafted to align with your passions, purpose, and pace.<br /><br />
              With deep insight into diverse cultures, landscapes, and local gems, our mission is to deliver meaningful,
              sustainable adventures that leave lasting impressions—while treading lightly and respectfully on the Earth.
              From ancient wonders and modern marvels to vibrant traditions, untouched nature, and once-in-a-lifetime
              moments—PlanItEarth brings the world to life, one inspired journey at a time.
            </p>
          </div>

          <div className='video'>
            <video autoPlay loop muted playsInline src={travelVideo} controls width="100%" height="auto"></video>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className='images'>
          <div className='imag'><img src={img1} alt="img1" /></div>
          <div className='imag'>
            <p className='discover'>Discover unlimited and beautiful destinations</p>
            <p className='inTouch'>
              Want to plan together? <Link to="/contact" style={{ color: '#4d5523', textDecoration: 'none' }}>Let’s get in touch!</Link>
            </p>
          </div>
          <div className='imag'><img src={img2} alt="img2" /></div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className='why'>
          <div><h2>Why Choose PlanItEarth?</h2></div>
          <div>
            <p>We make travel planning effortless with personalized itineraries, expert <br />
              recommendations, and seamless booking experiences.</p>
          </div>
          <div className='selection1'>
            <div className='select1'>
              <img src={compass} alt="compass" />
              <h3 style={{ fontSize: '30px', marginBottom: '10px' }}>Smart Planning</h3>
              <p>
                AI-powered itinerary creation that adapts to your preferences, budget, and travel style for the perfect trip.
              </p>
            </div>
            <div className='select1'>
              <img src={globe} alt="globe" />
              <h3 style={{ fontSize: '30px', marginBottom: '10px' }}>Global Destinations</h3>
              <p>Discover hidden gems and popular destinations worldwide with insider tips from local experts and fellow travelers.</p>
            </div>
            <div className='select1'>
              <img src={camera} alt="camera" />
              <h3 style={{ fontSize: '30px', marginBottom: '10px' }}>Memorable Experiences</h3>
              <p>Curated experiences and activities that create lasting memories, from adventure sports to cultural immersions.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className='destinations'>
          <div><h2>Popular Destinations</h2></div>
          <div><p>Explore the world's most breathtaking locations</p></div>
          <div className='selection2'>
            <div className='select2'>
              <img src={greece} alt="greece" />
              <div><h3>Santorini, Greece</h3></div>
            </div>
            <div className='select2'>
              <img src={japan} alt="japan" />
              <div><h3>Kyoto, Japan</h3></div>
            </div>
            <div className='select2'>
              <img src={chile} alt="chile" />
              <div><h3>Patagonia, Chile</h3></div>
            </div>
            <div className='select2'>
              <img src={indo} alt="indo" />
              <div><h3>Bali, Indonesia</h3></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link to="/packages">
              <button>View More</button>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#586031', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <div className='getStarted'>
          <h2>Ready to Plan Your Next Adventure?</h2>
          <p>Join thousands of travelers who trust PlanItEarth to create unforgettable journeys. Start planning your dream trip today.</p>
          <div>
            <Link to="/BookingPage">
              <button>Get Started Free</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
