import React from 'react';

import Particles from "react-tsparticles";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import particlesOptions from "./particles.json";
import Navbar from './components/NavBar';
import Header from './components/Header'
import AboutMe from './components/AboutMe'

function App() {
    return (
        <>
            <Particles options={{
                particles: {
                    number: {
                        density: {
                            enable: true,
                            value_area: 900,
                        },
                        value: 30,
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 6,
                            color: "#ffffff"
                        }
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        random: true,
                        value: 2,
                    },

                },

            }} />
            <Navbar />
            <Header />
            <AboutMe />
        </>

    );
}

export default App;
