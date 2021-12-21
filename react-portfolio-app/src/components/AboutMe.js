import React from 'react'
import myimage from '../images/myimage.JPG'

const AboutMe = () => {
    return (
        <div id='aboutme' className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="pic-container mb-4">
                        <img className='profile-pic' src={myimage} alt="myimage" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-me-header'>About Me</h1>
                    <p className='about-me-para'>Hello, I am Holy from Delaware OH.A Quality Engineer who is highly skilled, focused,and driven to learn.I am currently pursuing full stack web development bootcamp at Ohio state university!
                        I create responsive websites using MERN (MongoDB, ExpressJS, React and NodeJS).As a creator, my goal is to develop innovative, quality products. I am confident that I can bring my passion for learning, creativity, and core technical skills in full-stack web development to help your team achieve its goals. </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
