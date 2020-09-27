import React, { Fragment } from "react";
import "./footer.css"

const Footer = () => {
    return (
        <Fragment>
            {/* START: Footer */}
            {/*
    Additional Classes:
  .nk-footer-parallax
  .nk-footer-parallax-opacity
*/}
            <footer className="nk-footer nk-footer-parallax nk-footer-parallax-opacity">
                <img className="nk-footer-top-corner" src="assets/images/footer-corner.png" alt="" />
                <div>
                    <div className="social">
                        <div className="container">
                            <h3>Connect socially with <strong>Gaming Battles</strong></h3>
                            <div className="social-icons">
                                <div className="social-icon">
                                    <a href="https://discord.gg/x8xWws8" target="_blank">
                                        <i className="fab fa-discord" />
                                        <span>Subscribe to Discord</span>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://www.youtube.com/c/TheGamingBattles" target="_blank">
                                       
                                        <i className="fab fa-youtube" />
                                        <span>Watch on Youtube</span>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://www.instagram.com/thegamingbattles/" target="_blank">
                                    <i className="fab fa-instagram-square" />
                                        <span>Follow on Instagram</span>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://www.facebook.com/thegamingbattles/" target="_blank">
                                        <i className="fab fa-facebook" />
                                        <span>Follow on Facebook</span>
                                    </a>
                                </div>
                               {/*  <div className="social-icon">
                                    <a href="#">
                                        <i className="fab fa-twitch" />
                                        <span>Watch on Twitch</span>
                                    </a>
                                </div> */}
                                <div className="social-icon">
                                    <a href="#">
                                        <i className="fab fa-twitter-square" />
                                        <span>Follow on Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Social Buttons */}
                    {/* Copyright */}
                    <div className="copyright">
                        <div className="container">
                            <p>2020 © <strong>Gaming Battles</strong>. All rights reserved</p>
                        </div>
                    </div>
                </div>

            </footer>
            {/* END: Footer */}
        </Fragment>
    );
}

export default Footer;