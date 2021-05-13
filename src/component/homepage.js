import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link,useLocation, NavLink} from "react-router-dom";
import selfImage from '../image/self-image.png';
import Academic from './academic';
import CourseWork from './coursework';
import Skill from './skill';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import '../styling/transition.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


export default function Home(props){
    
    return(
        <div>
            <header >
                <div className="d-flex justify-content-center">
                    <h3>Nam Man Leung</h3>
                </div>
                <div className="d-flex justify-content-center">
                <img src={selfImage}></img>
                </div>
                <div className="d-flex justify-content-center">
                    <p>
                    I am currently a year 3 student studying Computer Science.
                    </p>
                </div>
            </header>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item active mx-3">
                                <Link to='/' >Academic Record</Link>
                            </li>
                            <li className="nav-item mx-3">
                            <Link to='/coursework' >CourseWork</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/skill' >Skill</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="body" className="container">
                    
                        
                                <Route key={'/'} exact path={'/'}>
                                {({match}) =>(
                                    <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                                        <Academic />
                                    </CSSTransition>
                                )
                                }
                                
                                </Route>
                                <Route key={'/coursework'} exact path={'/coursework'}>
                                {({match}) =>(
                                    <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                                        <CourseWork />
                                    </CSSTransition>
                                )

                                }
                                </Route>
                                <Route key={'/skill'} exact path={'/skill'}>
                                {
                                    ({match}) =>(
                                        <CSSTransition in={match!=null} timeout={300} classNames="page" unmountOnExit>
                                            <Skill />
                                        </CSSTransition>
                                    )
                                }
                                </Route>
                            
                        
                    
                </div>
            </Router>
            <footer>
                <p>Contact me:</p>
                
                <ul>
                    <li><WhatsAppIcon />+852 53449819</li>
                    {/*<li>+852 53449819</li>*/}
                    <li><MailOutlineIcon /><a href='mailto:plmichael1224@gmail.com'>plmichael1224@gmail.com</a></li>
                </ul>
            </footer>
        </div>
    )
}