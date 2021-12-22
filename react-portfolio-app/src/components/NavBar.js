import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import portfoliologo from '../images/logo.PNG'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img width="100px" height="90px" src={portfoliologo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutme">About Me </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacts">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/images/Resume.pdf" download>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar