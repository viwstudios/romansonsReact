import React from 'react'

const PublishSteps = () => {
    return (
        <div>


            <div>
                <div className="our-projects">
                    <div className="container-xxl project py-5">
                        <div className="container">
                            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                                <h4 className="section-title">How to publish with us</h4>
                                <h1 className="display-5 mb-4">Follow these steps to publish your book.</h1>
                            </div>
                            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="col-lg-4">
                                    <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                                            data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                            <h3 className="m-0">01. Register</h3>
                                        </button>
                                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                                            data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                            <h3 className="m-0">02. Upload Script</h3>
                                        </button>
                                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                                            data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                            <h3 className="m-0">03. Choose Package</h3>
                                        </button>
                                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                                            data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                            <h3 className="m-0">04. Done</h3>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="tab-content w-100">
                                        <div className="tab-pane fade show active" id="tab-pane-1">
                                            <div className="row g-4">
                                                <div className="col-md-6" style={{ minHeight: "350px" }}>
                                                    <div className="position-relative h-100">
                                                        <img className="position-absolute img-fluid w-100 h-100"
                                                            src="img/register.jpg" style={{ objectFit: "cover" }} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h1 className="mb-3">Sign Up with us.</h1>
                                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque illum natus officiis aliquid reiciendis nam quaerat placeat? Qui, vel. Est doloremque rerum ex et, consectetur id dolores, minima eius ut autem dicta incidunt aspernatur quae quasi repellat. Numquam rerum recusandae quo assumenda, voluptatibus tempore sit ipsam consectetur esse ipsa facere.</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 1</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 2</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 3</p>
                                                    <a style={{ backgroundColor: "#028ED3" }} href=""
                                                        className="btn btn-primary py-3 px-5 mt-3">Create Account</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-pane-2">
                                            <div className="row g-4">
                                                <div className="col-md-6" style={{ minHeight: "350px" }}>
                                                    <div className="position-relative h-100">
                                                        <img className="position-absolute img-fluid w-100 h-100"
                                                            src="img/upload.jpg" style={{ objectFit: "cover" }} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h1 className="mb-3">Upload your Script.</h1>
                                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque illum natus officiis aliquid reiciendis nam quaerat placeat? Qui, vel. Est doloremque rerum ex et, consectetur id dolores, minima eius ut autem dicta incidunt aspernatur quae quasi repellat. Numquam rerum recusandae quo assumenda, voluptatibus tempore sit ipsam consectetur esse ipsa facere.</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 1</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 2</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 3</p>   
                                                    <a style={{ backgroundColor: "#028ED3" }} href=""
                                                        className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-pane-3">
                                            <div className="row g-4">
                                                <div className="col-md-6" style={{ minHeight: "350px" }}>
                                                    <div className="position-relative h-100">
                                                        <img className="position-absolute img-fluid w-100 h-100"
                                                            src="img/package.jpg" style={{ objectFit: "cover" }} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h1 className="mb-3">Choose a Package.</h1>
                                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque illum natus officiis aliquid reiciendis nam quaerat placeat? Qui, vel. Est doloremque rerum ex et, consectetur id dolores, minima eius ut autem dicta incidunt aspernatur quae quasi repellat. Numquam rerum recusandae quo assumenda, voluptatibus tempore sit ipsam consectetur esse ipsa facere.</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 1</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 2</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 3</p>
                                                    <a style={{ backgroundColor: "#028ED3" }} href=""
                                                        className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-pane-4">
                                            <div className="row g-4">
                                                <div className="col-md-6" style={{ minHeight: "350px" }}>
                                                    <div className="position-relative h-100">
                                                        <img className="position-absolute img-fluid w-100 h-100"
                                                            src="img/done.jpg" style={{ objectFit: "cover" }} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h1 className="mb-3">All done.</h1>
                                                    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel eaque temporibus a, laudantium at nulla, itaque veritatis, hic velit sed recusandae pariatur dolorum. Hic quo cumque qui tempora id adipisci reiciendis tempore recusandae, corporis incidunt? Accusantium quae fugit beatae! Labore quaerat temporibus excepturi provident aperiam vel quos fugiat eius!</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 1</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 2</p>
                                                    <p><i className="fa fa-check text-primary me-3"></i>Feature 3</p>
                                                    <a style={{ backgroundColor: '#028ED3' }} href=""
                                                        className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublishSteps