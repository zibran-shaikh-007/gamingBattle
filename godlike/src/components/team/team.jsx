import React, { Fragment } from "react";

const Team = () => {
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
                <h1 className="nk-title">Careers</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-main">
          <div className="container">
            <div className="nk-gap-4" />
            <div className="nk-store nk-store-checkout">
              <div className="row vertical-gap lg-gap">
                <div className="col-md-10 m-auto">
                  {/* START: Billing Details */}
                  <div className="nk-box-3 bg-dark-1">
                    <h3 className="nk-title h4 text-center">Careers </h3>
                    <div className="nk-gap" />
                    <form action="#" className="nk-form nk-form-style-1">
                      <div className="row vertical-gap">
                        <div className="col-sm-6">
                          <input type="text" className="form-control required" name="fname" placeholder="First Name *" />
                        </div>
                        <div className="col-sm-6">
                          <input type="text" className="form-control required" name="lname" placeholder="Last Name *" />
                        </div>
                      </div>
                      <div className="nk-gap-2" />
                      <div className="row vertical-gap">
                        <div className="col-sm-6">
                          <input type="email" className="form-control required" name="email" placeholder="Email Address *" />
                        </div>
                        <div className="col-sm-6">
                          <input type="tel" className="form-control required" name="phone" placeholder="Phone *" />
                        </div>
                      </div>
                      <div className="nk-gap-2" />
                      <select name="country" className="form-control required">
                        <option hidden>Position Applying For</option>
                        <option value="caster">Caster</option>
                        <option value='streamer'>Streamer</option>
                        <option value="gfx artist">Gfx Artist</option>
                        <option value="marketing team">Marketing Team</option>
                        <option value="pubg management team">Pubg Management Team</option>
                        <option value="codm management team">CODM Management Team</option>
                        <option value="freefire management team">Freefire Management Team</option>
                        <option value="team sponsorship">Team Sponsorship</option>

                      </select>
                      
                      <div className="nk-gap-2" />
                      <div className="row vertical-gap">
                        <div className="col-sm-6">
                          <input type="number" className="form-control required" name="exp" placeholder="Experience in E-Sports*" />
                        </div>
                        
                      </div>
                      <div className="nk-gap-2" />
                      <h5>Portfolio</h5>
                      <div className="row vertical-gap">
                        <div className="col-sm-6">
                          <input type="text" className="form-control required" name="youtube" placeholder="Youtube Link" />
                        </div>
                        <div className="col-sm-6">
                          <input type="tel" className="form-control required" name="instagram" placeholder="Instagram Link" />
                        </div>
                      </div>
                      <div className="nk-gap-2" />
                      <div className="row vertical-gap">
                        <div className="col-sm-6">
                          <input type="text" className="form-control required" name="facebook" placeholder="Facebook Link" />
                        </div>
                        <div className="col-sm-6">
                          <input type="tel" className="form-control required" name="website" placeholder="Website Link" />
                        </div>
                      </div>
                      <div className="nk-gap-2" />
                      <div className="row vertical-gap">
                        <div className="col-sm-6">
                        <h5>Resume</h5>
                          <input type="file" className="form-control required" name="resume"  />
                        </div>
                        
                      </div>
                      <div className="nk-gap-2" />

                      <a className="nk-btn nk-btn-lg link-effect-4 float-right" href="#">Send Details</a>
                      <div className="clearfix" />

                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nk-gap-4" />
        <div className="nk-gap-4" />
      </div>

    </Fragment >
  );
}

export default Team;