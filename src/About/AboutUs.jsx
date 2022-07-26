import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className="about-us">
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="about-img">
                                    <img className="img-fluid" src="img/book2.jpg" alt="" />
                                    <img className="img-fluid" src="/img/book4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h4 className="section-title">About Us</h4>
                                <h1 className="display-5 mb-4">Digital printing with world className quality</h1>
                                <p>With a Legacy of more than 6 decades, we are one of the
                                    leading service providers for all your printing needs with
                                    print options unlimited. Established in September 2018,
                                    Romanson Printing and Publishing House Pvt,Ltd. Located at
                                    the heart of the City of Kerala state India.</p><br />
                                <p>We are full-fledge publisher with state -of-the-art
                                    infrastructure dedicated to assist authors at all stages of
                                    their publishing journey, create a high-quality printed or
                                    digital book that matches their vision of authors. With comprehensive editorial, design, marketing,
                                    production and distribution services, our authors have the support of an experienced publishing team while
                                    still retaining one of the highest royalty share of our business. We publish all genres and try our best to get
                                    our authors the unique opportunities to reach out to the widest possible range of readers.</p><br />
                                <p>We specialize in taking care of all your publication needs like book editing, book cover design,
                                    compilation, book beautification, ISBN and marketing assistance to make sure you achieve the success you
                                    deserve.</p>
                                {/* <!-- <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum
                        amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                    </p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
                <iframe class="w-100 mb-n2" style={{ height: "450px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.55980028005!2d76.7840786713698!3d8.500047496474371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1658810071581!5m2!1sen!2sin"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div> */}
        </div>
    )
}

export default AboutUs