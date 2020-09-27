import React, { Fragment } from 'react';

const Contact = () => {
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
                                <h1 className="nk-title">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Header Title */}
                {/* START: Contact Form */}
                <div className="nk-gap-4" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="nk-box-3 bg-dark-1">
                                <h2 className="nk-title h3 text-center">Query</h2>
                                <div className="nk-gap-2" />
                                <form action="php/ajax-contact-form.php" className="nk-form nk-form-ajax nk-form-style-1">
                                    <input type="email" className="form-control required" name="email" placeholder="Email *" />
                                    <div className="nk-gap-1" />
                                    <input type="text" className="form-control required" name="name" placeholder="Name *" />
                                    <div className="nk-gap-1" />
                                    <textarea className="form-control required" name="message" rows={5} placeholder="Message *" defaultValue={""} />
                                    <div className="nk-gap-1" />
                                    <div className="nk-form-response-success" />
                                    <div className="nk-form-response-error" />
                                    <button className="nk-btn nk-btn-lg link-effect-4">Send</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="nk-box-3 bg-dark-1">
                                <h2 className="nk-title h3 text-center">Business</h2>
                                <div className="nk-gap-2" />
                                <form action="php/ajax-contact-form.php" className="nk-form nk-form-ajax nk-form-style-1">
                                    <input type="email" className="form-control required" name="email" placeholder="Email *" />
                                    <div className="nk-gap-1" />
                                    <input type="text" className="form-control required" name="name" placeholder="Name *" />
                                    <div className="nk-gap-1" />
                                    <textarea className="form-control required" name="message" rows={5} placeholder="Message *" defaultValue={""} />
                                    <div className="nk-gap-1" />
                                    <div className="nk-form-response-success" />
                                    <div className="nk-form-response-error" />
                                    <button className="nk-btn nk-btn-lg link-effect-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nk-gap-4" />
            </div>
            <div class="nk-gap-4"></div>
        </Fragment>
    );
}

export default Contact;