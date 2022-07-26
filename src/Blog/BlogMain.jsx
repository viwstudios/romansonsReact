import React from 'react';

import BlogInnerCont from './BlogInnerCont';
import Navbar from '../Common/Navbar'
const BlogMain = () => {
    return (
        <>
            <Navbar />
            <div className='blog-recent-cont container-fluid mb-4 px-5 pt-5 wow fadeInUp' >
                <div className='row h-100'>
                    <div className='recent-cont col-8 py-1' style={{ paddingLeft: "4rem" }}>
                        <div className='blog-post-hero blog-post-cont h-100'>
                            <div className="blog-post-img-cont">
                                <img src={'../../../../img/blog/2.jpg'} />
                            </div>
                        </div>
                    </div>
                    <div className='recent-cont col-4'>
                        <div className='row row-cols-1 h-100' style={{ paddingRight: "4rem" }}>
                            <div className='col-12 blog-post-small h-50 py-1'>
                                <div className='col-12 blog-post-cont h-100' >
                                    <div className="blog-post-img-cont">
                                        <img src={'../../../../img/blog/1.jpg'} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 blog-post-small h-50 py-1'>
                                <div className='col-12 blog-post-cont h-100' >
                                    <div className="blog-post-img-cont">
                                        <img src={'../../../../img/blog/3.jpg'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogMain;