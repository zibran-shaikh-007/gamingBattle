import React, { Fragment, useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Countdown from 'react-countdown';
import {connect} from "react-redux";
import {fetchGames} from "../redux/actionCreators/gamesCreator"
import RevSlider, { Slide, Caption } from 'react-rev-slider';



const Home = (props) => {

    const history = useHistory();
    

    const config = {

        sliderType: "carousel",
        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            onHoverStop: "off",
        },
        carousel: {
            maxRotation: 8,
            vary_rotation: "off",
            minScale: 20,
            vary_scale: "off",
            horizontal_align: "center",
            vertical_align: "center",
            fadeout: "off",
            vary_fade: "off",
            maxVisibleItems: 3,
            infinity: "on",
            space: -90,
            stretch: "off"
        },
        responsiveLevels: [ 1240, 1024, 778, 480],
        gridwidth: [800, 600, 400, 320],
        gridheight: [600, 400, 320, 280],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 0,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }

    };




    const games =  () => {
       /*  await axios.get(`https://api.thegamingbattle.com/createGame`)
            .then(res => {


                setItems(res.data.createGame)
            })

            .catch(err => {
                console.log(`err ${err}`)
            }) */
            props.fetchGames()
    }


    const handleClick = () => {
        console.log("hanlde click")
        history.push('/tournaments')
    }
    useEffect(() => {
        games()
    }, [])



    return (
        <Fragment>
            <div>




                <div className="nk-main">

                    <div className="nk-header-title nk-header-title-lg nk-header-title-parallax nk-header-title-parallax-opacity">
                        <div className="bg-video">
                            <video
                                autoPlay
                                playsInline
                                loop
                                muted
                                style={{
                                    position: "absolute",
                                    width: "100%",

                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                className="jarallax-img"
                            >
                                <source src="https://res.cloudinary.com/uploadfiles/video/upload/v1600696192/My_Video2_y0fhhg.mp4" type="video/mp4"></source>
                            </video>

                        </div>
                        <div className="nk-header-table">
                            <div className="nk-header-table-cell">
                                <div className="container">
                                    <div className="nk-header-text">
                                        <h1 className="nk-title display-3"></h1>
                                        <div className="nk-gap-2" />
                                        {/*  <a href="https://themeforest.net/item/godlike-the-game-template/17166433?ref=_nK" target="_blank" className="nk-btn nk-btn-lg nk-btn-color-main-1 link-effect-4">
                                            <span>Purchase</span>
                                        </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://nkdev.info/docs/godlike-html/" className="nk-btn nk-btn-lg link-effect-4">
                                            <span>Documentation</span>
                                        </a> */}
                                        <div className="nk-gap-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END: Header Title */}
                    {/* START: Rev Slider */}
                    <div className="mnt-80">

                        {/*   <div id="rev_slider_50_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="photography-carousel48" style={{ padding: '0px' }}>
                            <div id="rev_slider_50_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.0.7">
 */}


                        <RevSlider config={config} style={{ background: "#000" }}>
                            {props.items && props.items.length > 0 ? props.items.map((item, index) => {

                                return (
                                    <Fragment>
                                    <Slide
                                        key={item._id}
                                        src={item.image}
                                        style={{background:"#000"}}
                                        alt="slidebg1"
                                        data-bgfit="cover"
                                        data-bgposition="center center"
                                        data-bgrepeat="no-repeat"
                                        data-no-retina
                                        slideProperties={{
                                            'data-transition': "slideoverhorizontal",
                                            'data-slotamount': "7",
                                            'data-masterspeed': "1500",
                                            'data-easein': "default",
                                            'data-easeout': "default",
                                            'data-rotate': "0",
                                            'data-saveperformance': "off"
                                        }}

                                    >
                                    </Slide>
                                     

                               
                             {/* <Slide
                                        src={item.image}
                                        alt="slidebg1"
                                        data-bgfit="cover"
                                        data-bgposition="center center"
                                        data-bgrepeat="no-repeat"
                                        slideProperties={{
                                            'data-transition': "slideoververtical",
                                            'data-slotamount': "7",
                                            'data-masterspeed': "1500",
                                            'data-easein': "default",
                                            'data-easeout': "default",
                                            ' data-rotate': "0",
                                            'data-saveperformance': "off"
                                        }}
                                    >

                                    </Slide> */}</Fragment>);
                            }) : "data is not present"}
                        </RevSlider>
                        {/*  <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                            </div>
                        </div> */}
                    </div>


                    {/* END: Rev Slider */}
                    {/* START: Features */}
                    <div className="container">
                        <div className="nk-gap-6" />
                        <div className="nk-gap-2" />
                        <div className="row vertical-gap lg-gap">
                            <div className="col-md-4">
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
                            <div className="col-md-4">
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
                            <div className="col-md-4">
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
                        <div className="nk-gap-2" />
                        <div className="nk-gap-6" />
                    </div>
                    {/* END: Features */}
                    {/* START: About */}
                    <div className="nk-box bg-dark-1">
                        <div className="container text-center">
                            <div className="nk-gap-6" />
                            <div className="nk-gap-2" />
                            <h2 className="nk-title h1">About Us</h2>
                            <div className="nk-gap-3" />
                            <p className="lead">Together face In. His called Two lesser given divide. From, cattle saying be was doesn't set. Creature bearing life wherein dominion in saying them moveth first have. Under set darkness over light beast face fill from in after isn't first own all fowl itself evening also, grass doesn't Sea. Created very likeness herb wherein from lesser was bring brought above. Bearing tree a grass very.</p>
                            <Link to="/aboutus" className="nk-btn nk-btn-lg nk-btn-rounded nk-btn-outline nk-btn-color-main-1">Read More</Link>
                            <div className="nk-gap-2" />
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="nk-box-2 nk-box-line">
                                        {/* START: Counter */}
                                        <div className="nk-counter-3">
                                            <div className="nk-count">100+</div>
                                            <h3 className="nk-counter-title h4">Tournaments Hosted</h3>
                                            <div className="nk-gap-1" />
                                        </div>
                                        {/* END: Counter */}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="nk-box-2 nk-box-line">
                                        {/* START: Counter */}
                                        <div className="nk-counter-3">
                                            <div className="nk-count">100K+</div>
                                            <h3 className="nk-counter-title h4">Matches Won</h3>
                                            <div className="nk-gap-1" />
                                        </div>
                                        {/* END: Counter */}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="nk-box-2 nk-box-line">
                                        {/* START: Counter */}
                                        <div className="nk-counter-3">
                                            <div className="nk-count">1cr+</div>
                                            <h3 className="nk-counter-title h4">Cash Prizes</h3>
                                            <div className="nk-gap-1" />
                                        </div>
                                        {/* END: Counter */}
                                    </div>
                                </div>
                            </div>
                            <div className="nk-gap-2" />
                            <div className="nk-gap-6" />
                        </div>
                    </div>
                    {/* END: About */}
                    {/* START: Video */}
                    <div className="container-fluid">
                        <div className="nk-gap-6" />
                        <div className="nk-gap-2" />
                        <div className="row">
                            <div className="col-md-4 ">

                                <div className="bg-video">
                                    <video
                                        autoPlay
                                        playsInline
                                        loop
                                        controls
                                        muted
                                        style={{
                                            position: "relative",
                                            width: "100%",

                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        className="jarallax-img"
                                    >
                                        <source src="https://res.cloudinary.com/uploadfiles/video/upload/v1600770931/Official_Call_of_Duty_Mobile_Cinematic_Trailer_Ghosts_Alex_Mason_More_COD_Mobile_Trailer_qn24vc.mp4" type="video/mp4"></source>
                                    </video>


                                </div>
                            </div>
                            <div className="col-md-4 ">

                                <div className="bg-video">
                                    <video
                                        autoPlay
                                        playsInline
                                        loop
                                        muted
                                        controls
                                        style={{
                                            position: "relative",
                                            width: "100%",

                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        className="jarallax-img"
                                    >
                                        <source src="https://res.cloudinary.com/uploadfiles/video/upload/v1600770976/Garena_Free_Fire_Trailer_Download_dan_Booyah_Sekarang_apbril.mp4" type="video/mp4"></source>
                                    </video>


                                </div>
                            </div> <div className="col-md-4 ">

                                <div className="bg-video">
                                    <video
                                        autoPlay
                                        playsInline
                                        loop
                                        muted
                                        controls
                                        style={{
                                            position: "relative",
                                            width: "100%",

                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        className="jarallax-img"
                                    >
                                        <source src="https://res.cloudinary.com/uploadfiles/video/upload/v1600700413/video1_v9hevz.mp4" type="video/mp4"></source>
                                    </video>


                                </div>
                            </div>
                        </div>
                        <div className="nk-gap-2" />
                        <div className="nk-gap-6" />
                    </div>
                    {/* END: Video */}
                    {/* START: Coming Soon */}
                    <div className="nk-box bg-dark-1 text-center">
                        <div className="nk-gap-6" />
                        <div className="nk-gap-2" />
                        <div className="bg-image op-3">
                            <img src="data:image/jpeg;base64,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" alt="" className="jarallax-img" />
                        </div>
                        <div className="container">
                            <h2 className="display-4">Gaming Battles</h2>
                            <div>
                                <div className="nk-title-sep-icon">
                                    <span className="icon"><span className="ion-clock" /></span>
                                </div>
                                <div className="nk-gap-2" />
                            </div>


                            {/* <div>You don't get to be great without a victory...</div> */}
                            {/* <div className="nk-gap-2" /> */}
                            <h3 className="text-center">NEXT TOURNAMENT IN</h3>
                            <h1 className="display-1 container-fluid"><Countdown date={Date.now() + 709363000} /></h1>
                            <div className="container-fluid fs-20">
                                <span className="ml-20">Days</span>
                                <span className="ml-50 ">Hrs</span>
                                <span className="ml-50 mr-50">Mins</span>
                                <span >Secs</span>
                            </div>
                        </div>
                        <div className="nk-gap-2" />
                        <div className="nk-gap-6" />
                    </div>
                    {/* END: Coming Soon */}
                    {/* START: Testimonials */}
                    <div className="nk-gap-6" />
                    <div className="nk-gap-2" />
                    <div id="testimonial">
                        <div className="container-fluid">
                            <Carousel>
                                <Carousel.Item className="text-center">
                                    <div className="img-box border rounded-circle m-auto" style={{ width: '135px', height: "135px" }}>
                                        <img
                                            className="d-block w-100 rounded-circle"
                                            src="https://res.cloudinary.com/uploadfiles/image/upload/v1599913086/03_ifjt0a.jpg"

                                        />
                                    </div>


                                    <h5 className="py-1 my-1" >first testimonial</h5>
                                    <p className="pt-3 mb-60" >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                                </Carousel.Item>
                                <Carousel.Item className="text-center">
                                    <div className="img-box border rounded-circle m-auto" style={{ width: '135px', height: "135px" }}>
                                        <img
                                            className="d-block w-100 rounded-circle"
                                            src="https://res.cloudinary.com/uploadfiles/image/upload/v1599913086/02_i7ogof.jpg"

                                        />
                                    </div>


                                    <h5 className="py-1 my-1" >second testimonial</h5>
                                    <p className="pt-3 mb-60" >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                                </Carousel.Item>
                                <Carousel.Item className="text-center">
                                    <div className="img-box border rounded-circle m-auto" style={{ width: '135px', height: "135px" }}>
                                        <img
                                            className="d-block w-100 rounded-circle"
                                            src="https://res.cloudinary.com/uploadfiles/image/upload/v1599913086/01_pebatp.jpg"

                                        />
                                    </div>


                                    <h5 className="py-1 my-1" >third testimonial</h5>
                                    <p className="pt-3 mb-60" >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                                </Carousel.Item>
                            </Carousel>
                        </div>


                    </div >
                    <div className="nk-gap-2" />
                    <div className="nk-gap-6" />
                    {/* END: Testimonials */}
                    {/* START: Subscribe */}
                    {/*  <div className="nk-box bg-dark-1">
                        <div className="nk-gap-6" />
                        <div className="nk-gap-2" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                    <h2 className="nk-title text-center h1">Subscribe to our Newsletter</h2>
                                    <div className="nk-gap-3" />
                                   
                                    <form action="//nkdev.us11.list-manage.com/subscribe/post?u=d433160c0c43dcf8ecd52402f&id=7eafafe8f0" method="post" className="nk-mchimp validate" target="_blank">
                                        <div className="input-group">
                                            <input type="email" defaultValue name="EMAIL" className="required email form-control" placeholder="Email *" />
                                            <button className="nk-btn nk-btn-lg link-effect-4">Subscribe</button>
                                        </div>
                                        <div className="nk-form-response-success" />
                                        <div className="nk-form-response-error" />
                                        <small>We'll never share your email with anyone else.</small>
                                      
                                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_d433160c0c43dcf8ecd52402f_7eafafe8f0" tabIndex={-1} defaultValue /></div>
                                    </form>
                                    
                            </div>
                        </div>
                        <div className="nk-gap-2" />
                        <div className="nk-gap-6" />
                        <div className="nk-gap-4" />
                    </div> */}
                    {/* END: Subscribe */}

                </div>

                {/*
    START: Share Buttons
  .nk-share-buttons-left
*/}
                <div className="nk-share-buttons nk-share-buttons-left d-none d-md-flex">
                    <ul>
                        <li>
                            <span className="nk-share-icon" title="Share page on Facebook" data-share="facebook">
                                <a href="https://www.facebook.com/thegamingbattles/" target="_blank">
                                    <span className="icon fa fa-facebook" /></a>
                            </span>
                            <span className="nk-share-name">Facebook</span>
                        </li>
                        <li>
                            <span className="nk-share-icon" title="Share page on Twitter" data-share="twitter">
                                <a href="#" target="_blank">
                                    <span className="icon fa fa-twitter" /></a>
                            </span>
                            <span className="nk-share-name">Twitter</span>
                        </li>
                        <li>
                            <span className="nk-share-icon" title="Share page on Google+" data-share="instagram">
                                <a href="https://www.instagram.com/thegamingbattles/" target="_blank">
                                    <span className="icon fa fa-instagram" /></a>
                            </span>
                            <span className="nk-share-name">instagram</span>
                        </li>
                        {/*
  <li>
      <span class="nk-share-icon" title="Share page on Pinterest" data-share="pinterest">
          <span class="icon fa fa-pinterest"></span>
      </span>
      <span class="nk-share-name">Pinterest</span>
  </li>
  <li>
      <span class="nk-share-icon" title="Share page on LinkedIn" data-share="linkedin">
          <span class="icon fa fa-linkedin"></span>
      </span>
      <span class="nk-share-name">LinkedIn</span>
  </li>
  <li>
      <span class="nk-share-icon" title="Share page on VK" data-share="vk">
          <span class="icon fa fa-vk"></span>
      </span>
      <span class="nk-share-name">Vkontakte</span>
  </li>
  */}
                    </ul>
                </div>
                {/*
    START: Side Buttons
  .nk-side-buttons-visible
*/}

                {/* END: Side Buttons */}



                {/*
    START: Sign Form

    Additional Classes:
  .nk-sign-form-light
*/}
                <div className="nk-sign-form">
                    <div className="nk-gap-5" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
                                <div className="nk-sign-form-container">
                                    <div className="nk-sign-form-toggle h3">
                                        <a href="#" className="nk-sign-form-login-toggle active">Log In</a>
                                        <a href="#" className="nk-sign-form-register-toggle">Register</a>
                                    </div>
                                    <div className="nk-gap-2" />
                                    {/* START: Login Form */}
                                    <form className="nk-sign-form-login active" action="#">
                                        <input className="form-control" type="text" placeholder="Username or Email" />
                                        <div className="nk-gap-2" />
                                        <input className="form-control" type="password" placeholder="Password" />
                                        <div className="nk-gap-2" />
                                        <div className="form-check float-left">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" />
                  Remember Me
                </label>
                                        </div>
                                        <button className="nk-btn nk-btn-color-white link-effect-4 float-right">Log In</button>
                                        <div className="clearfix" />
                                        <div className="nk-gap-1" />
                                        <a className="nk-sign-form-lost-toggle float-right" href="#">Lost Password?</a>
                                    </form>
                                    {/* END: Login Form */}
                                    {/* START: Lost Password Form */}
                                    <form className="nk-sign-form-lost" action="#">
                                        <input className="form-control" type="text" placeholder="Username or Email" />
                                        <div className="nk-gap-2" />
                                        <button className="nk-btn nk-btn-color-white link-effect-4 float-right">Get New Password</button>
                                    </form>
                                    {/* END: Lost Password Form */}
                                    {/* START: Register Form */}
                                    <form className="nk-sign-form-register" action="#">
                                        <input className="form-control" type="text" placeholder="Username" />
                                        <div className="nk-gap-2" />
                                        <input className="form-control" type="email" placeholder="Email" />
                                        <div className="nk-gap-2" />
                                        <div className="float-left">A password will be emailed to you.</div>
                                        <button className="nk-btn nk-btn-color-white link-effect-4 float-right">Register</button>
                                    </form>
                                    {/* END: Register Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-gap-5" />
                </div>
            </div>

        </Fragment>
    );
}

const mapStateToProps = state=>{
    return({
        items:state.games.items
    })
}
export default connect(mapStateToProps, {fetchGames})(Home);
