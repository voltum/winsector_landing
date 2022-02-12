import './style.scss'
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Sections from './components/Sections'
import nav_exit_btn from './img/nav_exit_btn.svg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="sidenav_block">
            <div className="overlay"></div>
            <div className="sidenav">
              <img src={nav_exit_btn} className="sidenav_close_btn" alt="exit button" />
              <div className="sidenav_menu">
                <NavLink exact to="/">About us</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/affiliates">Affiliates</NavLink>
                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/contacts">Contact us</NavLink>
                <NavLink to="/responsible-gaming">Responsible gaming</NavLink>
              </div>
              <a href="/#sec_8" className="btn">Request a feedback</a>
            </div>
        </div>
        <Header />
        <Sections />
      </Router>
    </>
  );
}

export default App;