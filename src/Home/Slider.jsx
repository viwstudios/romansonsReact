import React from 'react'

const Slider = () => {
    return (
        <div>

            <div className="carousel">
                <h4 className="section-title text-center wow fadeInUp" style="visibility: visible;">Latest Books</h4>
                <h1 className="display-5 mb-4 text-center">Explore latest collection in our store.</h1>
                <div className="row mx-0 overflow-hidden g-0" style="height: 350px;">
                    <div className="h-100 container-xxl">
                        <div className="row book-scroll-cont" style="height: 80%;">
                            <div className="col-lg-12 px-0 d-flex align-items-center" style="height: 100%;">
                                <div id="slide1"
                                    className="slider-switch mx-4 arrow-slider-left align-items-center d-flex justify-content-center">
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 1000 1000"
                                        style={{ width: 25 }}
                                    >
                                        <path d="M349.5 31l394.3 405.9c16.7 17.2 25.6 40.7 25.6 63.1 0 22-8.9 45.8-25.6 63.1L349.5 969c-27.2 28-71.4 28-98.6 0-27.2-28-27.2-73.5 0-101.5L608 500 251 132.5c-27.2-28-27.2-73.5 0-101.5s71.3-28 98.5 0z"></path>
                                    </svg> */}
                                </div>
                                <div id="slide2"
                                    className="slider-switch mx-3 arrow-slider-right align-items-center d-flex justify-content-center end-0">
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 1000 1000"
                                        style={{ width: 25 }}
                                    >
                                        <path d="M349.5 31l394.3 405.9c16.7 17.2 25.6 40.7 25.6 63.1 0 22-8.9 45.8-25.6 63.1L349.5 969c-27.2 28-71.4 28-98.6 0-27.2-28-27.2-73.5 0-101.5L608 500 251 132.5c-27.2-28-27.2-73.5 0-101.5s71.3-28 98.5 0z"></path>
                                    </svg> */}
                                </div>
                                <div id="cont" className="h-100 d-flex flew-row px-0 book-card-cont" style="">
                                    <div className="h-100 col-lg-8 book-card" style="background-color:#e9f168">
                                        <div className="h-100 row g-0">
                                            <div className="h-100 col-5 d-flex justify-content-center inner-card-cont"
                                                style="position: relative;">
                                                <img className="col-8 inner-card"
                                                    src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" />
                                            </div>
                                            <div className="h-100 col-7 py-5 book-detail-cont">
                                                <div className="book-title">Ten Thousand Skies Above You</div>
                                                <div className="book-author">by Claudia Gray</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-100 col-lg-8 book-card" style="background-color:#f16e49">
                                        <div className="h-100 row g-0">
                                            <div className="h-100 col-5 d-flex justify-content-center inner-card-cont"
                                                style="position: relative;">
                                                <img className="col-8 inner-card"
                                                    src="https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg" />
                                            </div>
                                            <div className="h-100 col-7 py-5 book-detail-cont">
                                                <div className="book-title">Ten Thousand Skies Above You</div>
                                                <div className="book-author">by Claudia Gray</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-100 col-lg-8 book-card" style="background-color:#fcce54">
                                        <div className="h-100 row g-0">
                                            <div className="h-100 col-5 d-flex justify-content-center inner-card-cont"
                                                style="position: relative;">
                                                <img className="col-8 inner-card"
                                                    src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" />
                                            </div>
                                            <div className="h-100 col-7 py-5 book-detail-cont">
                                                <div className="book-title">Ten Thousand Skies Above You</div>
                                                <div className="book-author">by Claudia Gray</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-100 col-lg-8 book-card" style="background-color:#f2eb44">
                                        <div className="h-100 row g-0">
                                            <div className="h-100 col-5 d-flex justify-content-center inner-card-cont"
                                                style="position: relative;">
                                                <img className="col-8 inner-card"
                                                    src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" />
                                            </div>
                                            <div className="h-100 col-7 py-5 book-detail-cont">
                                                <div className="book-title">Ten Thousand Skies Above You</div>
                                                <div className="book-author">by Claudia Gray</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-100 col-lg-8 book-card" style="background-color:#e79a48">
                                        <div className="h-100 row g-0">
                                            <div className="h-100 col-5 d-flex justify-content-center inner-card-cont"
                                                style="position: relative;">
                                                <img className="col-8 inner-card"
                                                    src="https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg" />
                                            </div>
                                            <div className="h-100 col-7 py-5 book-detail-cont">
                                                <div className="book-title">Ten Thousand Skies Above You</div>
                                                <div className="book-author">by Claudia Gray</div>
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

export default Slider