import React from 'react'
import './dist/style.css'

const Each = () => {
    return (
        <div style={{ marginTop: "20%" }}>
            <div className="blog-card">
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: "url('./img/servi1.jpg')" }}></div>
                    {/* <ul className="details">
                        <li className="author"><a href="#">John Doe</a></li>
                        <li className="date">Aug. 24, 2015</li>
                        <li className="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
                <div className="description">
                    <h1>Design Services</h1>
                    <h2>It's a virtual marchandise.</h2>
                    <p>The cover is the surface of a book, and in order to for the book to be successful, it is important to make it
                        very engaging and visually appealing, as this is your first contact with potential readers. It must reflect the
                        spirit of the endeavour it represents.</p><br />
                    <p>For the Basic Cover design, we offer the author a selection of appropriate pictures and templates/designs
                        that go with the book&#39;s subject matter. The book&#39;s cover consists of the front cover, spine, title design, rear
                        cover, author biography, and ISBN barcode.</p><br />
                    <p>Based on the specifications of a work, our designers can create custom illustrations such as drawings,
                        sketches, and caricatures.</p>
                    {/* <p className="read-more">
                        <a href="#">Read More</a>
                    </p> */}
                </div>
            </div>
            <br />
            <div className="blog-card alt">
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: "url('./img/servi2.jpg')" }}></div>
                    {/* <ul className="details">
                        <li className="author"><a href="#">Jane Doe</a></li>
                        <li className="date">July. 15, 2015</li>
                        <li className="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
                <div className="description">
                    <h1>Editing</h1>
                    <h2>Editing is everything.</h2>
                    <p>A little mistake in the manuscripts can leave the intended audience
                        with a terrible impression of the book, much like a dead fly gives
                        perfume a horrible smell.Corrections are made for grammatical,
                        spelling, punctuation, improper sentence length, and jargons without
                        changing the author&#39;s writing style.</p><br />
                    <p>The sentence is kept in its current state of simplicity.To make sure
                        there are no mistakes or typos in the created inner file, proofreading is
                        done once the inner pages are designed with the modified text.</p><br />
                    <p>In order to ensure that the manuscript is in the best condition possible, we provide writers the chance to
                        evaluate the copyediting modifications, remark on any comments made by the copyeditor, and provide
                        their opinion.</p>
                    {/* <p className="read-more">
                        <a href="#">Read More</a>
                    </p> */}
                </div>
            </div>
            <br />
            <div className="blog-card">
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: "url('./img/servi3.jpg')" }}></div>
                    {/* <ul className="details">
                        <li className="author"><a href="#">John Doe</a></li>
                        <li className="date">Aug. 24, 2015</li>
                        <li className="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
                <div className="description">
                    <h1>Marketing</h1>
                    <h2>You wrote the book, we will market it for you.</h2>
                    <p>In order to publish a book, one must develop the ability to sell it and
                        persuade potential readers to read it.
                        We provide a broad range of book marketing services, such as
                        marketing on the internet and in social media, book reviews, press
                        appearances and media coverage, marketing materials, etc.</p><br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias voluptatem quae? Quaerat, amet. Harum ullam nulla at similique. Aliquid quo neque praesentium delectus, consequatur enim repudiandae exercitationem earum! Accusamus consequuntur iure magnam esse blanditiis?</p><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, molestias repellendus asperiores omnis magni dolore facilis laborum similique porro perferendis!</p>

                    {/* <p className="read-more">
                        <a href="#">Read More</a>
                    </p> */}
                </div>
            </div>
            <br />
            <div className="blog-card alt">
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: "url('./img/servi4.jpg')" }}></div>
                    {/* <ul className="details">
                        <li className="author"><a href="#">Jane Doe</a></li>
                        <li className="date">July. 15, 2015</li>
                        <li className="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
                <div className="description">
                    <h1>Distribution Services</h1>
                    <h2>Editing is everything.</h2>
                    <p>Effective book distribution is essential for the book
                        publishing industry because it is the process of putting
                        the book into readers&#39; hands.By distributing your books
                        via multiple brick-and-mortar retailers and online
                        platforms, we assist you with sales by promoting your
                        book.</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero molestias necessitatibus dignissimos minus culpa asperiores maxime cum consequuntur dicta.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi facilis, amet sequi pariatur vel debitis perferendis necessitatibus eius iusto eveniet excepturi omnis aliquam repellat voluptatum corporis earum consequatur aspernatur dignissimos cupiditate? Excepturi, aut cum.</p>
                    {/* <p className="read-more">
                        <a href="#">Read More</a>
                    </p> */}
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Each