import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import SelectedTournament from "./selectedTournament";
import Login from "../login/login";
import {fetchTournaments} from "../redux/actionCreators/tournamentCreator";


const Tournaments = (props) => {
  

  const TournamentsLoader = () => {
    /* await axios.get(`https://api.thegamingbattle.com/tournament`)
      .then(res => {
        console.log(res.data.tournaments)
        setTournaments(res.data.tournaments)
      })

      .catch(err => {
        console.log(`err in geeting tournemants ${err}`)
      }) */
      props.fetchTournaments()
  }

  useEffect(() => {
    TournamentsLoader()
  }, [])

  return (
    <Fragment>
      <div className="nk-main">
        <div className="nk-header-title nk-header-title-md nk-header-title-parallax nk-header-title-parallax-opacity">
          <div className="bg-image">
            <img src="assets/images/image-1.jpg" alt="" className="jarallax-img" />
          </div>
          <div className="nk-header-table">
            <div className="nk-header-table-cell">
              <div className="container">
                <h1 className="nk-title">Tournaments</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="nk-gap-4" />
          <div className="nk-store">

            <div className="row no-gutters">
              {props.tournaments && props.tournaments.map((tour, index) => {
                return (
                  <div className="col-sm-6 col-lg-4 " key={tour._id}>


                    <div className="nk-product" data-mouse-parallax-z={2}>
                      <div >
                        <div className="nk-carousel-3" data-size={1} data-mouse-parallax-z={3}>
                          <div className="nk-carousel-inner nk-popup-gallery">
                            <div><div>
                              <img className="nk-img-stretch" src={tour.image} alt="games" width="508" height="400" />
                            </div></div>

                          </div>
                        </div>
                        {/* <h2 className="nk-product-title h5" data-mouse-parallax-z={1}><a href="store-product.html">{tour.games}</a></h2> */}
                        <div className="text-center " style={{ marginTop: "20px" }}>
                          {props.loggedIn ? <button className="nk-btn nk-btn-color-main-1" data-toggle="modal" data-target=".bd-example-modal-lg">Registeration Open</button> : <button className="nk-btn nk-btn-color-main-1" data-toggle="modal" data-target=".login">Login In to Register</button>}
                        </div>
                        <div className="nk-product-bottom">
                          <div>
                            <div className="nk-product-price"><i className="fa fa-calendar fa-xs" style={{ marginRight: "10px" }} ></i>{new Date(tour.startDate).toString().split(0)[0]}</div>
                            <div className="nk-product-price"><i className="fa fa-users fa-xs " style={{ marginRight: "10px" }}></i>{tour.totalParticipant}</div>

                            {/* <a href="#">Add to Cart</a> */}
                            {/* </div>
                          <div > */}
                            <div className="nk-product-price mr-5" ><i className="fa fa-trophy fa-xs" style={{ marginRight: "10px" }}></i>{tour.totalPrize}</div>
                            <div className="nk-product-price "  ><i className="fa fa-info-circle fa-xs" style={{ marginRight: "10px" }}></i> {tour.team}</div>

                            {/* <a href="#">Add to Cart</a> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* END: Product */}
                  </div>)
              })}
              {/* <div className="col-sm-6 col-lg-4">
          
          <div className="nk-product" data-mouse-parallax-z={2}>
            <div>
              <div className="nk-carousel-3" data-size={1} data-mouse-parallax-z={3}>
                <div className="nk-carousel-inner nk-popup-gallery">
                  <div><div>
                      <img className="nk-img-stretch" src="assets/images/product-2-sm.png" alt="Men Tshirt" />
                    </div></div>
                 
                </div>
              </div>
              <h2 className="nk-product-title h5" data-mouse-parallax-z={1}><a href="store-product.html">Men Tshirt</a></h2>
              <span className="nk-product-rating">
                <span className="nk-product-rating-front" style={{width: '50%'}}>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </span>
                <span className="nk-product-rating-back">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </span>
              </span>
              <div className="nk-product-bottom">
                <div>
                  <div className="nk-product-price">$67.00</div>
                  <a href="#">Add to Cart</a>
                </div>
              </div>
            </div>
          </div> 
          
        </div>*/}
              {/*  <div className="col-sm-6 col-lg-4">
          
          <div className="nk-product" data-mouse-parallax-z={2}>
            <div>
              <div className="nk-carousel-3" data-size={1} data-mouse-parallax-z={3}>
                <div className="nk-carousel-inner nk-popup-gallery">
                  <div><div>
                      <img className="nk-img-stretch" src="assets/images/product-3-sm.png" alt="Women Hoodie" />
                    </div></div>
                 
                </div>
              </div>
              <h2 className="nk-product-title h5" data-mouse-parallax-z={1}><a href="store-product.html">Pubg</a></h2>
              <span className="nk-product-rating">
                <span className="nk-product-rating-front" style={{width: '100%'}}>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </span>
                <span className="nk-product-rating-back">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </span>
              </span>
              <div className="nk-product-bottom">
                <div>
                  <div className="nk-product-price">$125.00</div>
                  <a href="#">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
          
        </div> */}
            </div>
            <div className="nk-gap-5" />
            {/* START: Pagination */}
            {/*  <div className="nk-pagination nk-pagination-center">
        <nav>
          <a href="#">1</a>
          <a href="#">2</a>
          <a className="nk-pagination-current-white" href="#">3</a>
          <a href="#">4</a>
          <span>...</span>
        </nav>
      </div> */}
            {/* END: Pagination */}

            <SelectedTournament />
            <Login />
          </div>
          <div className="nk-gap-4" />
          <div className="nk-gap-3" />
        </div>
      </div>

    </Fragment>
  );
}

const mapStateToProps = state => {
  if (state.auth.loggedIn) {

    return {
      loggedIn: state.auth.loggedIn,
      tournaments:state.tour.tournament
      
    };
  }
  else {
    return {
      tournaments:state.tour.tournament
    };
  }
};

export default connect(mapStateToProps, {fetchTournaments})(Tournaments);