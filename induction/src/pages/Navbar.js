import '../scss/navbar.scss';
import inductionlogo from '../assets/induction-logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const toggleNav = () => {
    props.setIsNavExpanded(!props.isNavExpanded);
  }

  return (
    <div style={{position: 'relative'}} className={props.setIsNavLoaded ? "navbar-container fadein" : "navbar-container"}>
      <div className={props.isNavExpanded ? "navbar navbar-expanded" : "navbar"}>
        <div className="nav-icon-container" onClick={() => toggleNav()}>
          <div id="nav-icon" className={props.isNavExpanded ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span> 
            <span></span> 
          </div>
        </div>
        <img src={inductionlogo} alt="induction logo" className={props.isNavExpanded ? "hidden" : ""} onLoad={() => props.setIsNavLoaded(true)}/>
        <ul className={props.isNavExpanded ? "nav-list" : "nav-list hidden"}>
          <li><NavLink to="/home" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink></li>
          <li><NavLink to="/schedule" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Schedule</NavLink></li>
          <li><NavLink to="/contact" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Contact</NavLink></li>
          <li><NavLink to="/info" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Important Info</NavLink></li>
          <li><NavLink to="/team" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Our Team</NavLink></li>
        </ul>
        <div style={{width: '45px'}}></div>
      </div>
    </div>
  )
};

export default Navbar;
