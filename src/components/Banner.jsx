import './Banner.css'
import train from '../assets/train.mp4'

function Banner(){
    return(
        <div>
            <div className='WelcomeImg'>
                <video className='welcome-vid' autoPlay loop muted playsInline src={train}></video>
                <h1 className='logo'>PlanItEarth</h1>
                <h3 className='motto'>The world is waiting—let’s plan it</h3>
            </div>
        </div>
    );
}

export default Banner;