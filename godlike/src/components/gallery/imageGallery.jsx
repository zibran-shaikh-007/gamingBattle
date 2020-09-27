import React, { Fragment, useState } from 'react';


const Image = () => {

  const [images, setImages] = useState([
    { id: 1, url: "https://res.cloudinary.com/uploadfiles/image/upload/v1600708405/MAIN_PAGE_1_jspvwl.jpg" },
    { id: 2, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708405/INITEE-1_hbabf0.jpg' },
    { id: 3, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708405/INVITEE_TEAM_MATCH_uzocxg.jpg' },
    { id: 4, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708404/160-poster-MAIN_PAGE_l5bwew.jpg' },
    { id: 5, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708402/MAIN_PAGE_cge0l0.jpg' },
    { id: 6, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708404/invitee_fponjs.jpg' },
    { id: 7, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708403/MAIN_PAGE_1_zswdpw.jpg' },
    { id: 8, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708403/MAIN_PAGE_2_bjtsxu.jpg' },
    { id: 9, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708403/MAIN_PAGE_2_zuczji.jpg' },
    { id: 10, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708402/main-promo-poster_shtsfq.jpg' },
    { id: 11, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708399/winners_list_2_cu9hs9.jpg' },
    { id: 12, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708394/winners_list-2_2_nibbyq.jpg' },
    { id: 13, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708401/winners_list_2_jeyrh6.jpg' },
    { id: 14, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708401/WINNER-ANNOUNCEMENT_azejox.jpg' },
    { id: 15, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708404/WINNER_LIST_lhqahw.jpg' },
    { id: 16, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708397/winner_1_q5recp.jpg' },
    { id: 18, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708399/top_10_winners_jjtca5.jpg' },
    { id: 19, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708399/winners_list_1_rzlbxp.jpg' },
    { id: 20, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708399/winner_vgiues.jpg' },
    { id: 21, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708398/winners_list_1_gw74hc.jpg' },
    { id: 22, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708397/winner_1_q5recp.jpg' },
    { id: 23, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708397/winners_list-2_1_sqoruz.jpg' },
    { id: 24, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708397/winners_list_nbiicc.jpg' },
    { id: 25, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708397/winner_2_jwxfiz.jpg' },
    { id: 26, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708395/winners_list-2_trjkvm.jpg' },
    { id: 27, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708400/winner-single_announcemet_qr7ygz.jpg' },
    { id: 28, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708393/winners_trophy_1_aedqzj.jpg' },
    { id: 29, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708393/winners_trophy_3_zs1je4.jpg' },
    { id: 30, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708392/winners_trophy_2_kgxyni.jpg' },
    { id: 31, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708392/WINNERS_TROPHY_bm2krg.jpg' },
    { id: 32, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708392/winners_trophy_2_ookxjb.jpg' },
    { id: 32, url: 'https://res.cloudinary.com/uploadfiles/image/upload/v1600708400/winners_trophy_1_datxdk.jpg' },


  ]);

  console.table("images", images)
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
                <h1 className="nk-title">Gallery</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="nk-gap-4" />
          {/* START: Videos List */}
          <div className="nk-video-gallery nk-video-gallery-2-col nk-isotope">
            <div className="nk-gallery-item-box nk-isotope-item" data-mouse-parallax-z={5} data-mouse-parallax-speed={1}>


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
                  <source src="https://res.cloudinary.com/uploadfiles/video/upload/v1600696322/GB-final_kwstxt.mp4" type="video/mp4"></source>
                </video>


              </div>


            </div>
            <div className="nk-gallery-item-box nk-isotope-item" data-mouse-parallax-z={5} data-mouse-parallax-speed={1}>
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
                  <source src="https://res.cloudinary.com/uploadfiles/video/upload/v1600696332/The_lockdown_league_cz1sul.mp4" type="video/mp4"></source>
                </video>


              </div>
            </div>

          </div>

        </div>

        <div className="container">
          <div className="nk-gap-4" />
          <div className="row">
            {images && images.map((img, index) => {
              return (
                <div className="col-sm-6 col-lg-6" key={img.id}>
                  <div className="nk-popup-gallery nk-popup-gallery-3-col nk-isotope">
                    <div className="nk-gallery-item-box nk-isotope-item" data-mouse-parallax-z={5} data-mouse-parallax-speed={1}>


                      <img src={img.url} width="500" height="500" />




                    </div>
                  </div>

                </div>
              )
            })}

            {/*  <div className="nk-pagination nk-pagination-center" data-mouse-parallax-z={3}>
            <a href="#" className="nk-btn nk-btn-lg nk-btn-circle">Load More ...</a>
          </div> */}

            <div className="nk-gap-4" />
            <div className="nk-gap-3" />
          </div>
        </div>
      </div>

    </Fragment >
  );
}

export default Image;