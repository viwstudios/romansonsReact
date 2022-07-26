import React from 'react'
import { useNavigate } from 'react-router-dom';

// import './css/style.css';
// import './css/bootstrap.min.css'

const Navbar = () => {
    //const nav = useNavigate();
  return (
    <div>
                <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible',animationDelay: '0.1s'}} ref={(el)=>{
                    if(el){el.style.setProperty('height','58px','important')}
                }}>
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-primary m-0"><img className="me-3" src="img/romansonsLogo.png" alt="Icon" /></h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <a href="about" className="nav-item nav-link">About</a>
                    <a href="services" className="nav-item nav-link">Services</a>
                    <a href="gallery" className="nav-item nav-link">Gallery</a>
                    <a href="blog" className="nav-item nav-link">Blog</a>
                    <a href="contact" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar