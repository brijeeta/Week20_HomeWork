import React from 'react'
import Typed from "react-typed"


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development Projects using</h1>
                {/* <p className="lead">A Quality Engineer who is focused, driven to learn and highly skilled in</p> */}
                <Typed
                    className='typed-text'
                    strings={["ReactJS", "Javascript", "GraphQL", "MongoDB", "ExpressJS", "NodeJS", "HTML", "CSS", "SQL", "Heroku", "GitHub"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header