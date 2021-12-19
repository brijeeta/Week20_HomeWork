import React from 'react'
import Typed from "react-typed"


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi I am Holy.</h1>
                <p className="lead">A Quality Engineer who is focused, driven to learn and highly skilled in</p>
                <Typed
                    className='typed-text'
                    strings={["ReactJS", "Javascript", "GraphQL", "MongoDB", "ExpressJS", "NodeJS", "HTML", "CSS", "SQL", "Heroku", "GitHub"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <p className="lead">currently pursuing full stack web development bootcamp at Ohio state university!</p>
            </div>
        </div>
    )
}

export default Header