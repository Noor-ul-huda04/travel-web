import { useState, useEffect } from 'react'; 
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 600) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`header ${showHeader ? 'show' : 'hidden'}`}>
      <div style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '20%' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'antiquewhite' }}>
            <h3 style={{ fontStyle: 'italic', fontSize: 'larger' }}>PlanItEarth</h3>
          </Link>
        </div>
        <div className='right'>
          <Link to="/BookingPage" className='head'>BOOKING</Link>
          <Link to="/packages" className='head'>PACKAGES</Link>
          <Link to="/blogsection" className='head'>BLOG</Link>
          <Link to="/contact" className='head'>CONTACT US</Link>
          <Link to="/about" className='head'>ABOUT US</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
