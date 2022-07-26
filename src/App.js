import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Common/Navbar.jsx';
import Footer from './Common/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx'
import GalleryPage from './Pages/GalleryPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import ExplorePage from './Pages/ExplorePage.jsx';
import LoginComp from './Login/LoginComp.jsx';
import SignupComp from './Login/SignupComp.jsx';

class App extends Component {
  render() {
    return (
      <div>
      {/* {(window.location.pathname =='/login') || (window.location.pathname =='/signup') ?<></> :<Navbar />} */}
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginComp/>}/>
          <Route path='/signup' element={<SignupComp/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
        </Routes>

      {window.location.pathname =='/login' || (window.location.pathname =='/signup')?<></> :<Footer />}
      </div>
    );
  }
}

export default App;
