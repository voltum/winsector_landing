import React, { useEffect } from 'react'
import {
    NavLink,
    Link
} from "react-router-dom";
import logo from '../img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAddressCard, faUserMd, faProjectDiagram, faHandshake, faDice } from '@fortawesome/free-solid-svg-icons'
import nav_contacts_ico from '../img/nav_contacts_ico.svg'
import nav_envelope_ico from '../img/nav_envelope_ico.svg'
import nav_hamb_ico from '../img/nav_hamb_ico.png'

function Header() {
    useEffect(() => {
        let $sidenav_block = document.querySelector('.sidenav_block');
        let $sidenav = document.querySelector('.sidenav');
        let $sidenav_overlay = document.querySelector('.sidenav_block .overlay');
        let $sidenav_btns = document.querySelectorAll('.sidenav_block .btn');
        let $close_btn = document.querySelector('.sidenav_close_btn');

        let $sidenav_callers = document.querySelectorAll('.sidenav_caller');

        const openSidebar = () => {
            $sidenav_block.style.visibility = 'visible';
            $sidenav.style.transform = 'translateY(0px)';
            $sidenav_overlay.style.opacity = 0.75;
            document.body.style.overflowY = 'hidden';
        }
        const closeSidebar = () => {
            $sidenav.style.transform = 'translateY(-'+$sidenav.offsetHeight+'px)';
            $sidenav_overlay.style.opacity = 0;
            $sidenav_block.style.visibility = 'hidden';
            document.body.style.overflowY = 'unset';
        }
        
        $sidenav_callers.forEach(($caller) => {
            $caller.addEventListener("click", () => {
                openSidebar();
            });
        });

        $sidenav_btns.forEach(($sidenav_btn) => {
            $sidenav_btn.addEventListener("click", () => {
                closeSidebar();
            });
        });

        $close_btn.addEventListener("click", () => {
            closeSidebar();
        });
        $sidenav_overlay.addEventListener("click", () => {
            closeSidebar();
        });

        console.log($close_btn);
    }, []);

    return (
        <>
            <div className="Header">
                <div className="container">
                    <div className="nav">
                        <div className="left">
                            <Link to="/"><img src={logo} alt="logo" onClick={()=>{window.scrollTo(0, 0);}}/></Link>
                        </div>
                        <div className="right">
                            <ul className="nav_anchors fa-ul">
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faAddressCard} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink exact to="/">About us</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faProjectDiagram} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faHandshake} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/affiliates">Affiliates</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faUserMd} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/careers">Careers</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faEnvelope} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/contacts">Contact us</NavLink>
                                </li>
                                <li className="nav_anchor">
                                    <span className="fa-li"><FontAwesomeIcon icon={faDice} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <NavLink to="/responsible-gaming">Responsible gaming</NavLink>
                                </li>
                                {/* <li className="nav_anchor nav_tel">
                                    <span className="fa-li"><FontAwesomeIcon icon={faPhoneAlt} size="lg" className="fa-gradient" data-fa-transform="" listItem /></span>
                                    <a href="tel:+44 20 8638 6900">+44 20 8638 6900</a><span className="nav_separator">/</span><a href="tel:+371 24 989 284">+371 24 989 284</a>
                                </li> */}
                                <li className="nav_anchor">
                                <NavLink to="/contacts" className="btn">Request a feedback</NavLink>
                                </li>
                            </ul>
                            <ul className="nav_icons fa-ul">
                                {/* <li className="nav_icon">
                                    <Link to="/contacts"><img src={nav_contacts_ico} alt="" /></Link>
                                </li> */}
                                <li className="nav_icon nav_tel">
                                    <a href="/#sec_8"><img src={nav_envelope_ico} alt="" /></a>
                                </li>
                                <li className="nav_icon sidenav_caller">
                                    <img src={nav_hamb_ico} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
