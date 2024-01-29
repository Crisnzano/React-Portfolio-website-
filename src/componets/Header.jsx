import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faPersonThroughWindow, faEnvelope, faAddressCard} from "@fortawesome/free-solid-svg-icons";


export default function Header() {
    return (

        <div> 
            <div className="cursor-1"></div>
            <div className="cursor-2"></div>

            <div id="menu-bars" className="fas fa-bars"></div>
            <header>
            <a href="#" className="logo"> <span>Crispus</span> Nzano </a>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#service">service</a>
                <a href="#experience">experience</a>
                <a href="#portfolio">portfolio</a>
                <a href="#contact">contact</a>
            </nav>
            <div className="follow">
                <a href="https://twitter.com/Cris__Nzano"> 
                <FontAwesomeIcon icon={faPersonThroughWindow} /></a>
                <a href="https://www.instagram.com/cris_nzano?igshid=MjEwN2IyYWYwYw%3D%3D">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
                <a href="https://www.linkedin.com/in/crispus-nzano-56b4b7246/" >
                    <FontAwesomeIcon icon={faAddressCard}/>
                </a>
            </div>
            </header>
        </div>
    );
}