import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";


const Subscription = () => {
    const [packages, setPackages] = useState([]);

    const Subscription = async () => {
        await axios.get(`https://cors-anywhere.herokuapp.com/https://mobilehelper.thegamingbattle.com/subscriptionPackage.json`)
            .then(res => {
                console.log("response package", res.data.packages)
                setPackages(res.data.packages)
            })
            .catch(err => {
                console.log(`err`, err)
            })
    }

    useEffect(() => {
        Subscription()
    }, [])




    return (
        <Fragment>
            <div className="nk-main">

                <div className="nk-header-title nk-header-title-sm nk-header-title-parallax nk-header-title-parallax-opacity">
                    <div className="bg-image">
                        <img src="assets/images/image-1.jpg" alt="" className="jarallax-img" />
                    </div>
                    <div className="nk-header-table">
                        <div className="nk-header-table-cell">
                            <div className="container">
                                <h1 className="nk-title">GB Pass</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Header Title */}
                {/* START: Pricing Tables 3 */}
                <div className="container">
                    <div className="nk-gap-4" />
                    <div className="row vertical-gap align-items-center">

                        {packages && packages.map((pack, index) => {
                            return (<div className="col-md-6 col-lg-3">

                                <div className="nk-pricing text-white pb-10" style={{ background: `linear-gradient(#${pack.gradientFrom},#${pack.gradientTo})` }}>
                                    <h3 className="nk-pricing-title">{pack.title}</h3>
                                    <div className="nk-pricing-price">
                                        <span className="nk-pricing-currency">₹</span>{pack.priceWeb}
                                        <span className="nk-pricing-period">/ {pack.days}</span>
                                    </div>
                                    <ul className="nk-pricing-features">
                                        {pack.benefits.map(bene => {
                                            return (<li>{bene}</li>)
                                        })}

                                    </ul>
                                    <div className="nk-pricing-button">
                                        <a href="#" className="nk-btn nk-btn-block nk-btn-lg link-effect-4">Purchase</a>
                                    </div>
                                    <a className="color-main-1" style={{ cursor: "pointer" }} data-toggle="modal" data-target={`.terms-${pack.id}`}>*Terms & Conditions</a>
                                </div>

                            </div>)
                        })}

                    </div>
                    <div className="nk-gap-4" />
                    <div className="nk-gap-4" />
                </div>
            </div>
            <div className="modal nk-modal fade terms-1 " id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog   modal-md">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h4 className="modal-title nk-title" id="mySmallModalLabel">Terms & Conditions</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="ion-android-close" />
                            </button>
                        </div>
                        <div className="modal-body m-auto">
                            <ul>
                                <li>You can choose any one tournament</li>
                                <li>For single match 3 games choice as per you & 2 games as per host</li>
                                <li>You can't apply this discount package to all 3 tournamnets</li>
                                <li>Only tournament discount offer is valid for 3 months</li>
                                (Value of this service is ₹ 50)
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal nk-modal fade terms-2 " id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog   modal-md">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h4 className="modal-title nk-title" id="mySmallModalLabel">Terms & Conditions</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="ion-android-close" />
                            </button>
                        </div>
                        <div className="modal-body m-auto">
                            <ul>
                                <li>You can choose any one tournament</li>
                                <li>For single match 8 games choice as per you & 4 games as per host</li>
                                <li>You can't apply this discount package to all 3 tournamnets</li>
                                <li>Only tournament discount offer is valid for 3 months</li>
                                (Value of this service is ₹ 80)
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal nk-modal fade terms-3 " id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog   modal-md">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h4 className="modal-title nk-title" id="mySmallModalLabel">Terms & Conditions</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="ion-android-close" />
                            </button>
                        </div>
                        <div className="modal-body m-auto">
                            <ul>
                                <li>You can choose any one tournament</li>
                                <li>For single match games choice as per you & 2 games as per host</li>
                                <li>You can't apply this discount package to all 3 tournamnets</li>
                                <li>Only tournament discount offer is valid for 3 months</li>
                                (Value of this service is ₹ 160)
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal nk-modal fade terms-4 " id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog   modal-md">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h4 className="modal-title nk-title" id="mySmallModalLabel">Terms & Conditions</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="ion-android-close" />
                            </button>
                        </div>
                        <div className="modal-body m-auto">
                            <ul>
                                <li>You can choose any one tournament</li>
                                <li>For single match games choice as per you & 2 games as per host</li>
                                <li>You can't apply this discount package to all 3 tournamnets</li>
                                <li>Only tournament discount offer is valid for 3 months</li>
                                (Value of this service is ₹ 320)
                            </ul>

                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}

export default Subscription;