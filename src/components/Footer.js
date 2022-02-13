import React from 'react'
import Socs from './Socs'
import logo from '../img/logo_white.svg'
import logo_sm from '../img/logo_sm.png'
import netent from '../img/payment/netent.png'
import microgaming from '../img/payment/microgaming.png'
import evolutiongaming from '../img/payment/evolutiongaming.png'
import betsoft from '../img/payment/betsoft.png'
import rng from '../img/payment/rng.png'
import mastercard from '../img/payment/mastercard.png'
import visa from '../img/payment/visa.png'
import Slider from "react-slick";


function Footer() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <div className="Footer">
            <div className="container">
                <div className="footer_nav nav">
                    <div className="left">
                        <img className="footer_logo" src={logo} alt="logo" />
                        <img className="footer_logo_sm" src={logo_sm} alt="logo small" />
                    </div>
                    <div className="right">
                        <ul className="nav_anchors whitetext fa-ul">
                                {/* <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faAddressCard} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink exact to="/">About us</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faUserMd} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/vacancies">Vacancies</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faProjectDiagram} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faHandshake} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/affiliates">For affiliates</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/contacts">Contacts</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faDice} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/responsible-gaming">Responsible gaming</NavLink>
                                </li> */}
                            <Socs />
                        </ul>
                        
                    </div>
                </div>
                <ul className="payment_list">
                    <li className="payment_item"><img src={netent} alt="netent" /></li>
                    <li className="payment_item"><img src={microgaming} alt="microgaming" /></li>
                    <li className="payment_item"><img src={evolutiongaming} alt="evolutiongaming" /></li>
                    <li className="payment_item"><img src={betsoft} alt="betsoft" /></li>
                    <li className="payment_item"><img src={rng} alt="rng" /></li>
                    <li className="payment_item"><img src={mastercard} alt="mastercard" /></li>
                    <li className="payment_item"><img src={visa} alt="visa" /></li>
                </ul>
                

                <Slider className="footer_slider" {...settings}>
                    <li className="payment_item"><img src={netent} alt="netent" /></li>
                    <li className="payment_item"><img src={microgaming} alt="microgaming" /></li>
                    <li className="payment_item"><img src={evolutiongaming} alt="evolutiongaming" /></li>
                    <li className="payment_item"><img src={betsoft} alt="betsoft" /></li>
                    <li className="payment_item"><img src={rng} alt="rng" /></li>
                    <li className="payment_item"><img src={mastercard} alt="mastercard" /></li>
                    <li className="payment_item"><img src={visa} alt="visa" /></li>
                </Slider>
                
                <hr></hr>
                <div className="copyright">
                    © ""COMPANY"" 2021
                </div>
            </div>
        </div>
    )
}

export default Footer
