import React from "react";

export default function Service() {
    return (
        <div>
            <section className="service" id="service">
            <h1 className="heading"><span> My </span> services</h1>
                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-code"></i>
                        <h3> Web design</h3>
                        <p>I offer website design and development services using 
                            software like Visual Studio Code, Sublime text and CMS
                            platforms like Drupal and Wordpress.
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-archive"></i>
                        <h3> Database design</h3>
                        <p>I also offer database design using software like MongoDB
                            and MySQL
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-paint-brush"></i>
                        <h3> Graphical design</h3>
                        <p>I can provide graphical design services using software
                            like Canva.
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <h3> Email marketing</h3>
                        <p>Also as part pf my services I provide email design and marketing 
                            using Software like Klaviyo.
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-mobile"></i>
                        <h3> Mobile app development</h3>
                        <p>Furthermore,I also provide mobile app development services 
                            using software like Android studio.
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-bullhorn"></i>
                        <h3> UI/UX design</h3>
                        <p> I also provide UI/UX design services including wire frames and 
                            design diagrams using software like FIGMA and Draw.io </p>
                    </div>
                </div>

            </section>
        </div>


    );
}