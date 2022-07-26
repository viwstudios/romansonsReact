import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

// import './css/style.css';
// import './css/bootstrap.min.css'

const Navbar = () => {
    //const nav = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s' }} ref={(el) => {
                if (el) { el.style.setProperty('height', '58px', 'important') }
            }}>
                <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0"><img className="me-3" src="img/romansonsLogo.png" alt="Icon" /></h1>
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
            </nav>
        </div>
    )
}

export default Navbar