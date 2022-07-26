import React from 'react'
import {NavLink} from 'react-router-dom'

const NewHero = () => {
    return (
        <div>

            <nav className="navbar navbar1 navbar-expand-lg navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s' }} ref={(el) => {
                if (el) { el.style.setProperty('height', '58px', 'important') }
            }}>
                <a href="/" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0"><img className="me-3" src="img/romansonsLogo.png" alt="Icon" style={{ width: "70%" }} /></h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to='/' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link nav-link1")}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link nav-link1")}>About</NavLink>
                        <NavLink to='/services' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Services</NavLink>
                        <NavLink to='/gallery' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Gallery</NavLink>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Blog</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? "nav-item nav-link nav-link1 active" : "nav-item nav-link1 nav-link")}>Contact</NavLink>
                    </div>
                </div>
                <div className='glass-effect-nav'></div>
            </nav>
            <div className='extended1' style={{ height: '899px', display: 'none', transform: 'translate(0px, -10vh)' }}></div>
            <div className="container-fluid p-0 pb- wow fadeIn mb-5 hero-fixed" style={{ transform: 'translateY(-10vh)', position: 'fixed' }} data-wow-delay="0.1s">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                        <div style={{ width: '100%', height: '100%', position: 'absolute', overflow: 'hidden' }}>
                            <div className='hero-bg-gradient'></div>
                        </div>
                        <img className="img-fluid hero-main-img" src={'../../../../img/n/9.jpg'} alt="" />
                        <div className='hero-main-cont col-7'>
                            <div className='row row-cols-1'>
                                <div className='hero-img-logo-cont'>
                                    <img src={"img/romansonsLogo.png"} />
                                </div>
                                <div className='hero-text-cont1'>
                                    <h1>Printing and<br /> publication house</h1>
                                </div>
                                <div className="hero-text-cont2">
                                    <h1 className="fs-2 fw-large text-white mb-1 pb-4">Unwavering Excellence IN Printing and Publishing</h1>
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1916" height="396" viewBox="0 0 1916 396" style={{ position: 'absolute', width: '100%', bottom: '-128px', zIndex: '1', left: '0' }}>
                            <path id="Path_1" data-name="Path 1" d="M0,924l428,276,1488-156v276H0Z" transform="translate(0 -924)" fill="#fff" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='extended2' style={{ 'height': '300vh' }}></div>
        </div>
    )
}

export default NewHero