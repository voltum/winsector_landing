import React from 'react'
import {
    Route
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import About from './pages/About'
import Careers from './pages/Careers'
import Projects from './pages/Projects'
import Affiliates from './pages/Affiliates'
import Contacts from './pages/Contacts'
import ResponsibleGaming from './pages/ResponsibleGaming'
import Footer from './Footer'

const routes = [
    { path: '/', name: 'Home', Component: About, noFooterMargin: true, noHeaderScreen: false },
    { path: '/careers', name: 'Careers', Component: Careers },
    { path: '/projects', name: 'Projects', Component: Projects },
    { path: '/affiliates', name: 'Affiliates', Component: Affiliates },
    { path: '/contacts', name: 'Contacts', Component: Contacts, noFooterMargin: true },
    { path: '/responsible-gaming', name: 'Responsible Gaming', Component: ResponsibleGaming, noFooterMargin: true, noHeaderScreen: false },
]

function Sections() {
    return (
        <>            
            {routes.map(({ path, name, Component, noFooterMargin, noHeaderScreen }) => (
                <Route key={path} exact path={path}>
                {({ match }) => (
                    <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                        >
                        <div className={`page ${noFooterMargin?"no_footer_margin":""} ${noHeaderScreen===false?"":"no_header_screen"}`}>
                            <Component pageName={name} />
                            <Footer />
                        </div>
                    </CSSTransition>
                )}
                </Route>
            ))}
        </>
    )
}

export default Sections
