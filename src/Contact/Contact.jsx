import React from 'react'
const Contact = () => {
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h4 className="section-title">Contact Us</h4>
                        <h1 className="display-5 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: "55px", height: "55px" }}>
                                        <i style={{ color: "#028ED3" }} className="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Address</p>
                                        <h3 className="mb-0">123 Street, New York, USA</h3>
                                    </div>
                                </div>
                                <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: "55px", height: "55px" }}>
                                        <i className="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Call Us Now</p>
                                        <h3 className="mb-0">+012 345 6789</h3>
                                    </div>
                                </div>
                                <div className="bg-light d-flex align-items-center w-100 p-4">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: "55px", height: "55px" }}>
                                        <i className="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Mail Us Now</p>
                                        <h3 className="mb-0">info@example.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
                <iframe class="w-100 mb-n2" style={{ height: "450px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.55980028005!2d76.7840786713698!3d8.500047496474371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1658810071581!5m2!1sen!2sin"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    )
}

export default Contact