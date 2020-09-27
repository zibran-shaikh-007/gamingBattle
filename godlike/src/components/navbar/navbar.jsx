import React, { Fragment } from "react";

import { HashLink as Link } from 'react-router-hash-link';
import Login from "../login/login";
import { connect } from "react-redux";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';



const Navbar = (props) => {
    console.log("props", props.loggedIn)

    const handleLogout = () => {
        localStorage.removeItem("User");
        props.logout();
    }
    return (
        <Fragment>
            <div className="container mx-auto"><NotificationContainer /></div>
            <header className="nk-header nk-header-opaque" style={{position:"fixed"}}>

                <div className="nk-contacts-top" style={{ background: "rgba(0,0,0,0.7)" }}>
                    <div className="container">
                        <div className="nk-contacts-left" >
                            <div className="nk-navbar">
                                <ul className="nk-nav">

                                    <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/terms">Terms of Use</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="nk-contacts-right">
                            <div className="nk-navbar">
                                <ul className="nk-nav">
                                    <li><a href="https://twitter.com/nkdevv" target="_blank"><span className="ion-social-twitter" /></a></li>
                                    <li><a href="https://dribbble.com/_nK" target="_blank"><span className="ion-social-dribbble-outline" /></a></li>
                                    <li><a href="#"><span className="ion-social-instagram-outline" /></a></li>
                                    <li><a href="#"><span className="ion-social-pinterest" /></a></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* END: Top Contacts */}

                <nav className="nk-navbar .nk-navbar-fixed nk-navbar-transparent nk-navbar-autohide " style={{background: "rgba(0,0,0,0.7)", padding:'0' }}>
                    <div className="container">
                        <div className="nk-nav-table">
                            <Link to="/" className="nk-nav-logo">
                                <img src="https://res.cloudinary.com/uploadfiles/image/upload/v1600763898/9_1_onsiak.png" alt="" width={100} />
                            </Link>
                            <ul className="nk-nav nk-nav-right d-none d-lg-block pt-15" data-nav-mobile="#nk-nav-mobile">
                                <li className="nk-drop-item">
                                    <Link to="/">
                                        Home</Link>
                                </li>
                                <li className=" nk-drop-item">
                                    <Link to="/aboutus">
                                        About Us</Link>
                                </li><li className="nk-drop-item">
                                    <Link to="/careers">
                                        Careers</Link>
                                </li>

                                <li className="nk-drop-item">
                                    <Link to="/gallery">
                                        Gallery</Link>
                                </li>
                                

                                <li className="nk-drop-item">
                                    <Link to="/tournaments" >
                                        Tournaments</Link></li>
                                <li className="nk-drop-item">
                                    <Link to="/subscription" >
                                        GB Pass</Link></li>
                                <li>{props.loggedIn ? <div className="text-center " >
                                    <button className="nk-btn nk-btn-color-main-1" onClick={handleLogout}>Logout</button>
                                </div> : <div className="text-center " >
                                        <button className="nk-btn nk-btn-color-main-1" data-toggle="modal" data-target=".login">Sign In / Register</button>
                                    </div>}</li>
                            </ul>
                            <ul className="nk-nav nk-nav-right nk-nav-icons">

                                <li className="single-icon d-lg-none">
                                    <a href="#" className="no-link-effect" data-nav-toggle="#nk-nav-mobile">
                                        <span className="nk-icon-burger">
                                            <span className="nk-t-1"></span>
                                            <span className="nk-t-2"></span>
                                            <span className="nk-t-3"></span>
                                        </span>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
                {/* END: Navbar */}
            </header>
            {/*
   START: Right Navbar

   Additional Classes:
 .nk-navbar-right-side
 .nk-navbar-left-side
 .nk-navbar-lg
 .nk-navbar-align-center
 .nk-navbar-align-right
 .nk-navbar-overlay-content
 .nk-navbar-light
 .nk-navbar-no-link-effect
*/}

            {/* END: Right Navbar */}
            {/*
   START: Navbar Mobile

   Additional Classes:
 .nk-navbar-left-side
 .nk-navbar-right-side
 .nk-navbar-lg
 .nk-navbar-overlay-content
 .nk-navbar-light
 .nk-navbar-no-link-effect
*/}
            <div id="nk-nav-mobile" className="nk-navbar nk-navbar-side nk-navbar-left-side nk-navbar-overlay-content d-lg-none" style={{paddingBottom:"0px"}}>
                <div className="nano">
                    <div className="nano-content">
                        <Link to="/" className="nk-nav-logo">
                            <img src="https://res.cloudinary.com/uploadfiles/image/upload/v1600763898/9_1_onsiak.png" alt="" width={100} />
                        </Link>
                        <div className="nk-navbar-mobile-content">
                            <ul className="nk-nav">
                                <li className="nk-drop-item">
                                    <Link to="/">
                                        Home</Link>
                                </li>
                                <li className="nk-drop-item">
                                    <Link to="/aboutus">
                                        About Us</Link>
                                </li><li className="nk-drop-item">
                                    <Link to="/careers">
                                        Careers</Link>
                                </li><li className="nk-drop-item">
                                    <Link to="/gallery">
                                        Gallery</Link>
                                </li>
                                <li className="nk-drop-item">
                                    <Link to="/tournaments" >
                                        Tournaments</Link></li>
                                <li className="nk-drop-item">
                                    <Link to="/subscription" >
                                        GB Pass</Link></li>
                                <li>{props.loggedIn ? <div className="text-center " >
                                    <button className="nk-btn nk-btn-color-main-1" onClick={handleLogout}>Logout</button>
                                </div> : <div className="text-center " >
                                        <button className="nk-btn nk-btn-color-main-1" data-toggle="modal" data-target=".login">Sign In / Register</button>
                                    </div>}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Login />
        </Fragment>
    );
}

const mapStateToProps = state => {
    if (state.auth.loggedIn) {

        return {
            loggedIn: state.auth.loggedIn
        };
    }
    else {
        return {};
    }
};
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({ type: "SET_LOGOUT" })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
