import React from 'react'
import codequiz from '../images/codequiz.jpg'
import dayplanner from '../images/dayplanner.png'
import readme from '../images/ecommerce.png'
import weatherdashboard from '../images/weatherdashboard.jpg'
import bitcoinhub from '../images/bitcoin.jpg'
import travelblog from '../images/travelblog.png'

// fontawesome react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

// popupbox for modal
import { PopupboxContainer, PopupboxManager } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    // popupbox 1
    const openPopupBoxCodequiz = () => {
        const content = (<>
            <img className='portfolio-image-popupbox' src={codequiz} alt="codequiz project" />
            <p>This quiz uses JavaScript to traverse the DOM, replace HTML elements, and store user scores.</p>
            <b>Github :</b> <a className='hyper-link' onClick={() => window.open("https://github.com/brijeeta/Week4_HomeWork/", "_blank")}>https://github.com/brijeeta/Week4_HomeWork/</a>
            <br />
            <b>Deployed App :</b> <a className='hyper-link' onClick={() => window.open("https://brijeeta.github.io/Week4_Homework/", "_blank")}>https://brijeeta.github.io/Week4_Homework/</a>

        </>)
        PopupboxManager.open({ content })
    }

    const popupboxConfigCodequiz = {
        titleBar: {
            enable: true,
            text: 'Code quiz project'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // popupbox2

    const openPopupBoxDayPlanner = () => {

        const content = (<>
            <img className='portfolio-image-popupbox' src={dayplanner} alt="dayplanner project" />
            <p>This full-stack application uses Express to allow users to save and delete notes right in their browser.</p>
            <b>Github :</b> <a className='hyper-link' onClick={() => window.open("https://github.com/brijeeta/Week5_HomeWork/", "_blank")}>https://github.com/brijeeta/Week5_HomeWork/</a>
            <br />
            <b>Deployed App :</b> <a className='hyper-link' onClick={() => window.open("https://brijeeta.github.io/Week5_Homework/", "_blank")}>https://brijeeta.github.io/Week5_Homework/</a>

        </>)
        PopupboxManager.open({ content })
    }


    const popupboxConfigDayPlanner = {
        titleBar: {
            enable: true,
            text: 'day planner project'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // popupbox3

    const openPopupBoxWeatherdashboard = () => {

        const content = (<>
            <img className='portfolio-image-popupbox' src={weatherdashboard} alt="Weatherdashboard project" />
            <p>This front-end application uses the Open Weather API and local storage to show the user's weather data</p>
            <b>Github :</b> <a className='hyper-link' onClick={() => window.open("https://github.com/brijeeta/Week6_HomeWork/", "_blank")}>https://github.com/brijeeta/Week5_HomeWork/</a>
            <br />
            <b>Deployed App :</b> <a className='hyper-link' onClick={() => window.open("https://brijeeta.github.io/Week6_HomeWork/", "_blank")}>https://brijeeta.github.io/Week5_Homework/</a>

        </>)
        PopupboxManager.open({ content })
    }


    const popupboxConfigWeatherDashboard = {
        titleBar: {
            enable: true,
            text: 'Weather Dashboard project'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    // popupbox4

    const openPopupBoxBitcoinHub = () => {

        const content = (<>
            <img className='portfolio-image-popupbox' src={bitcoinhub} alt="BitCoinHub project" />
            <p>Bitcoin hub is a front-end web application that combines the Bitcoin APIs  to allow users to find various trends in bitcoin market.</p>
            <b>Github :</b> <a className='hyper-link' onClick={() => window.open("https://github.com/JenkinsMD/GrpPrj1-Bitcoin", "_blank")}>https://github.com/JenkinsMD/GrpPrj1-Bitcoin</a>
            <br />
            <b>Deployed App :</b> <a className='hyper-link' onClick={() => window.open("https://jenkinsmd.github.io/GrpPrj1-Bitcoin/", "_blank")}>https://jenkinsmd.github.io/GrpPrj1-Bitcoin/</a>

        </>)
        PopupboxManager.open({ content })
    }
    const popupboxConfigBitcoinHub = {
        titleBar: {
            enable: true,
            text: 'project 1'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    // popupbox5

    const openPopupBoxTravelBlog = () => {

        const content = (<>
            <img className='portfolio-image-popupbox' src={travelblog} alt="travelblog project" />
            <p>This is a simple application that allows users to write travel reviews based on a country. They can then read those reviews at a later time. The user data is saved with sessions and cookiess</p>
            <b>Github :</b> <a className='hyper-link' onClick={() => window.open("https://github.com/bckasper/Travel-blog", "_blank")}>https://github.com/bckasper/Travel-blog</a>
            <br />
            <b>Deployed App :</b> <a className='hyper-link' onClick={() => window.open("https://intense-scrubland-56931.herokuapp.com/", "_blank")}>https://intense-scrubland-56931.herokuapp.com</a>

        </>)
        PopupboxManager.open({ content })
    }
    const popupboxConfigTravelBlog = {
        titleBar: {
            enable: true,
            text: 'project 2'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    // popupbox6

    const openPopupBoxReadmeGen = () => {

        const content = (<>
            <img className='portfolio-image-popupbox' src={readme} alt="ReadmeGenerator project" />
            <p>This back-end application runs from the command line and allows a user to create a readme complete with license badges.</p>
            <b>Github :</b> <a className='hyper-link' onClick={() => window.open("https://github.com/brijeeta/Week9_HomeWork/", "_blank")}>https://github.com/brijeeta/Week5_HomeWork/</a>

        </>)
        PopupboxManager.open({ content })
    }
    const popupboxConfigReadme = {
        titleBar: {
            enable: true,
            text: 'Readme generator project'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id='portfolio' className='portfolio-wrapper'>
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    {/* codequiz */}
                    <div className="portfolio-image-box" onClick={openPopupBoxCodequiz}>
                        <img src={codequiz} alt="codequiz project" className="portfolio-image" />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/* day planner */}

                    <div className="portfolio-image-box" onClick={openPopupBoxDayPlanner}>
                        <img src={dayplanner} alt="dayplanner project" className="portfolio-image" />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>

                    {/* weather dashboard */}

                    <div className="portfolio-image-box" onClick={openPopupBoxWeatherdashboard}>
                        <img src={weatherdashboard} alt="weather dashboard project" className="portfolio-image" />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>

                    {/* bitcoinhub */}
                    <div className="portfolio-image-box" onClick={openPopupBoxBitcoinHub}>
                        <img src={bitcoinhub} alt="bitcoinhub project" className="portfolio-image" />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/* travelblog */}
                    <div className="portfolio-image-box" onClick={openPopupBoxTravelBlog}>
                        <img src={travelblog} alt=" travel blog project" className="portfolio-image" />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/* readmegen */}
                    <div className="portfolio-image-box" onClick={openPopupBoxReadmeGen}>
                        <img src={readme} alt="Readme generator project" className="portfolio-image" />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigCodequiz} />
            <PopupboxContainer {...popupboxConfigDayPlanner} />
            <PopupboxContainer {...popupboxConfigWeatherDashboard} />
            <PopupboxContainer {...popupboxConfigBitcoinHub} />
            <PopupboxContainer {...popupboxConfigTravelBlog} />
            <PopupboxContainer {...popupboxConfigReadme} />
        </div>
    )
}

export default Portfolio
