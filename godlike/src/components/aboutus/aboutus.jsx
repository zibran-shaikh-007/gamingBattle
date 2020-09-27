import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <div className="nk-main">
                {/* START: Header Title */}
                {/*
    Additional Classes:
  .nk-header-title-sm
  .nk-header-title-md
  .nk-header-title-lg
  .nk-header-title-xl
  .nk-header-title-full
  .nk-header-title-parallax
  .nk-header-title-parallax-opacity
  .nk-header-title-boxed
*/}
                <div className="nk-header-title nk-header-title-sm nk-header-title-parallax nk-header-title-parallax-opacity">
                    <div className="bg-image">
                        <img src="assets/images/image-1.jpg" alt="" className="jarallax-img" />
                    </div>
                    <div className="nk-header-table">
                        <div className="nk-header-table-cell">
                            <div className="container">
                                <h1 className="nk-title">About Us</h1>
                              
                               {/*  <h2 className="nk-sub-title">Play on mouse over, click and autoplay</h2> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Header Title */}
                <div className="nk-box">
                    <div className="nk-gap-4" />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-9">
                                <h2 className="nk-title h1">About Us</h2>
                                <div className="nk-gap-3" />
                                <p className="lead">Together face In. His called Two lesser given divide. From, cattle saying be was doesn't set. Creature bearing life wherein dominion in saying them moveth first have. Under set darkness over light beast face fill from in after isn't first own all fowl itself evening also, grass doesn't Sea. Created very likeness herb wherein from lesser was bring brought above. Bearing tree a grass very.</p>
                                <div className="nk-gap-2" />
                            </div>
                            <div className="col-md-3">
                                {/* START: Autoplay GIF */}
                                <div className="nk-gif">
                                    <img src="assets/images/gif-2-s.gif" data-gif="assets/images/gif-2.gif" alt="" />
                                </div>
                                {/* END: Autoplay GIF */}
                            </div>
                        </div>
                    </div>
                    <div className="nk-gap-4" />
                </div>
            </div>
           
            <div className="container">
                <div className="nk-gap-4" />
                <div className="row align-items-center">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="nk-box-3 bg-dark-1">
                                    <div className="nk-ibox">
                                        <div className="nk-ibox-icon nk-ibox-icon-circle">
                                            <span className="ion-ios-game-controller-b" />
                                        </div>
                                        <div className="nk-ibox-cont">
                                            <h2 className="nk-ibox-title">Incredible Atmosphere</h2>
                Second Made make spirit green divide lesser creeping void and night replenish cattle don't was female first their day open.
              </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="nk-box-3 bg-dark-2">
                                    <div className="nk-ibox">
                                        <div className="nk-ibox-icon nk-ibox-icon-circle">
                                            <span className="ion-fireball" />
                                        </div>
                                        <div className="nk-ibox-cont">
                                            <h2 className="nk-ibox-title">Catchy Battles</h2>
                Image their gathered. Every. Called together signs winged, unto midst sea life air them. Us sea them shall you saw.
              </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="nk-box-3 bg-dark-2">
                                    <div className="nk-ibox">
                                        <div className="nk-ibox-icon nk-ibox-icon-circle">
                                            <span className="ion-ribbon-a" />
                                        </div>
                                        <div className="nk-ibox-cont">
                                            <h2 className="nk-ibox-title">28 Awards</h2>
                Moveth fruitful it appear wherein man don't firmament set blessed. Beast seas god itself. Made night image male. Own night.
              </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="nk-box-3 bg-dark-1">
                                    <div className="nk-ibox">
                                        <div className="nk-ibox-icon nk-ibox-icon-circle">
                                            <span className="ion-ios-infinite-outline" />
                                        </div>
                                        <div className="nk-ibox-cont">
                                            <h3 className="nk-ibox-title">Unlimited Possibilities</h3>
                Commodo scelerisque rutrum consectetuer ad ad molestie aenean iaculis ad senectus in. Vel felis tellus orci dolor elit turpis condimentum.
              </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-gap-4" />
                <div className="nk-gap-4" />
            </div>

        </Fragment>
    );
}

export default About;