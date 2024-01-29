import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faShare, faLink, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import IMAGES from "../images/index.js";



export default function Portfolio() {
    return (
        <div>
            <section className="portfolio" id="portfolio">
                <h1 className="heading"><span>My</span>portfolio</h1>
                <div className="box-container">
                    <div className="box">
                    <img src={IMAGES.imageThree} alt=""/>
                        <h3>Ecobeeds Project</h3>
                        <div className="icons">
                        <a href={process.env.PUBLIC_URL + '/assets/EcoBeedsProject.pdf'} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLink}/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faShare}/>
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={IMAGES.imageFive} alt=""/>
                        <h3>Loan Appraisal Project</h3>
                        <div className="icons">
                            <a href="https://github.com/Crisnzano/Loan-Appraisal-System1">
                            <FontAwesomeIcon icon={faLink}/>
                            </a>
                            <a href="#" ><FontAwesomeIcon icon={faShare}/> </a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={IMAGES.imageFour} alt=""/>
                        <h3>Moon FX Mobile UI/UX</h3>
                        <div className="icons">
                        <a href={process.env.PUBLIC_URL + '/assets/Cross Platform App.pdf'} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLink}/> </a>
                            <a href="#" > <a href="#" >
                                <FontAwesomeIcon icon={faShare}/> </a></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={IMAGES.imageSeven} alt=""/>
                        <h3>Butterfly E-Commerce store</h3>
                        <div className="icons">
                            <a href="#" > 
                            <FontAwesomeIcon icon={faLink}/></a>
                            <a href="#" >
                                <FontAwesomeIcon icon={faShare}/> </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    );
}