import './Footer.css'
function Footer(){
    return(
        <div>
            <div style={{backgroundColor:'#111827',display:'flex',justifyContent:'center',textAlign:'center',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'center',textAlign:'left'}}>
            <div className='select3'>
            <h3>PlanItEarth</h3>
            <p>The world is waiting—let's plan it together.</p>
        </div>
        <div className='select3'>
            <h3>Destinations</h3>
            <p>Europe</p>
            <p>Asia</p>
            <p>America</p>
            <p>Africa</p>
        </div>
        <div className='select3'>
            <h3>Services</h3>
            <p>Trip Plaaning</p>
            <p>Hotal Booking</p>
            <p>Flight Search</p>
            <p>Travel Insurance</p>
        </div>
        <div className='select3'>
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
        </div>
        </div>
        <div style={{color:'#8a929e',fontSize:'20px',alignItems:'center'}}>
            <hr />
            <p style={{padding:'40px'}}>© 2025 PlanItEarth. All rights reserved.</p>
        </div>
       </div>
        </div>
    );
}
export default Footer;