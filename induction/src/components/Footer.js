import './scss/Footer.scss';
import iiitdlogo from '../assets/iiitd-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="iiitd-address">
        <a href="https://www.iiitd.ac.in"><img src={iiitdlogo} alt="iiitd" /></a>
        <span>Okhla Industrial Estate, Phase III, near Govind Puri Metro Station</span>
        <span>New Delhi, Delhi 110020</span>
      </div>
      <div className="links">
        <p>Website Designed & Developed By</p>
        <h2><a href="https://linktr.ee/adityagirdhar">Aditya Girdhar</a> & <a href="https://linktr.ee/ramanjeetsingh">Ramanjeet Singh</a></h2>
      </div>
    </div>
  )
}

export default Footer;
