import '../scss/home.scss';
import beginarrow from '../assets/begin-journey-arrow.svg';
import Slideshow from '../components/Slideshow';
import { Link } from 'react-scroll';
import ImageCollage from '../components/ImageCollage';
import backgroundImg from '../assets/home-bg.jpg';
import Congrats from '../components/Congrats';
import {useState} from 'react';
import speakers from '../data/Speakers';
import img1 from '../assets/speakers/speaker-1.jpg';
import img2 from '../assets/speakers/speaker-2.jpg';
import img3 from '../assets/speakers/speaker-3.jpg';
import Fade from 'react-reveal/Fade';

const Home = (props) => {
  const [isBgLoaded, setIsBgLoaded] = useState(false)

  return (
    <div className={props.isBlur ? "blur" : ""}>
      {/* Background */}
      <div className="home-bg-container">
        <img src={backgroundImg} className={isBgLoaded ? "home-bg-img fadein" : "home-bg-img"} onLoad={() => setIsBgLoaded(true)} style={props.isNavLoaded ? {} : {display: 'hidden'}}/>
      </div>

      <div className="home">
        <div></div>
        {isBgLoaded ? <Congrats className="congrats" /> : null}
        {/* <h1>Congratulations</h1> */}
        <Link to="welcome" smooth={true}>
          <div className={isBgLoaded ? "begin fadein" : "begin"} style={isBgLoaded ? {} : {display: 'hidden'}}>
            <p>Begin the journey.</p>
            <img src={beginarrow} alt="arrow" />
          </div>
        </Link>
      </div>
      <div className="welcome" id="welcome">
        <div><p>“We know what we are, but know not what we may be.”</p>
          <p>- William Shakespeare</p></div>
        <h2>Welcome,</h2>
        <p>Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) was created by an act of Delhi legislature empowering it to carry out R&D, conduct educational programs, and grant degrees. The General Council is the apex body of the Institute, chaired by Hon'ble Lt. Governor of Delhi and the Board of Governors is the policy and decision-making body of the Institute. The Senate is empowered to take all academic decisions.</p>

        <p>IIIT-Delhi is accelerating on the path of becoming one of the leading comprehensive research-led teaching institutes in India and has proven to be consistently responsive towards the evolving needs of society. The faculty members at IIIT-Delhi are among the finest in the country and are internationally recognized. Carrying out cutting-edge research is in the institutional DNA of IIIT-Delhi.</p>
      </div>
      <ImageCollage />
      <div className="speakers">
        <h2>Keynotes</h2>
        <p>We’ve curated a set of incredibly accomplished dignatories. Let’s kick-off your college lives with a healthy dose of wisdom.</p>
        {/*<Slideshow slideTime={3000} items={speakers} prefix="speakers/"/> */}
      </div>
      <div className="speakers-images">
        <Fade right>
          <img src={img1} className="speaker-image"/>
        </Fade>
        <Fade left>
          <img src={img2} className="speaker-image"/>
        </Fade>
        <Fade right>
          <img src={img3} className="speaker-image"/>
        </Fade>
      </div>
      <div className="youmadeit">
        <h2>You’ve made it.</h2>
        <p>You've made it here. This is a new chapter of your life.</p>
        <p>IIIT Delhi is the epicentre of innovation and excellence in all intellectual pursuits, and we're thrilled to welcome you into our tribe. We believe in excellence and academic rigour, and all the things you'll cherish if you qualified the trials to be eligible for a seat at this prestigious institution.</p>
        <p>We hope our efforts in this Induction program serve their purpose of introducing you to the craziest engineering school of the country, and we hope you share our enthusiasm for using technology to make an impact in the world.</p>
        <p>Wishing you luck before you embark on this marvellous journey.
May the force be with you. </p>
      </div>
    </div>
  )
}

export default Home;
