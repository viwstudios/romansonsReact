import React from 'react'
import './dist/style.css'
// import './dist/script.js'

const MainGallery = () => {
    return (
        <div>

            <section className="gallery">
                <div className="row">
                    <ul>
                        <a href="#" className="close"></a>
                        <li>
                            <a className='hoverGal' href="#item02">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="#item02">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="#item02">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="image" href="#item01">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="image" href="#item02">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="image" href="#item01">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="image" href="#item01">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="image" href="#item01">
                                <img src="./img/dummyGal.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="item01" className="port">

                    <div className="row">
                        <div className="description">
                            <h1>Book name</h1>
                            <h2>Author</h2>
                            <br />
                            <h3>Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
                        </div>

                        <img src="img/dummyGal.png" alt="" />
                    </div>

                </div>

                <div id="item02" className="port">

                    <div className="row">
                        <div className="description">
                            <h1>Book name</h1>
                            <h2>Author</h2>
                            <br />
                            <h3>Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
                        </div>
                        <img src="img/dummyGal.png" alt="" />
                    </div>

                </div>

            </section >
        </div >
    )
}

export default MainGallery