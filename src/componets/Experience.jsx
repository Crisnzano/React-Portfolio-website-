import React from "react";

export default function Home() {
    return (
        <div>
            <section className="experience" id="experience">
                <h1 className="heading"><span>My</span>experience</h1>
                <div className="box-container">

                    <div className="box">
                        <div className="content">
                            <span>2020 - 2023</span>
                            <h3>Web developer</h3>
                            <p>I have been developing websites either for 
                                personal projects or contracts, my most recent 
                                is my IS2 project which was a web based loan
                                appraisal system using machine learning.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <span>2019 - 2023</span>
                            <h3>Graphic designer</h3>
                            <p>I have been engaged in graphic design for more that 4 years
                                creating logos, posters and artworks. This has enabled me 
                            to gain experience using applications like CANVA and Blender.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <span>2021 - 2024</span>
                            <h3>UI/UX Frontend developer</h3>
                            <p>I have experience creating easy to use user interfaces
                                which are also visually appealing both for websites
                                and for mobile applications. This has allowed me to gain 
                                experience with using software like FIGMA, Blender and Gimp.
                            </p>
                        </div>
                    </div>
                 </div>

            </section>
        </div>

    );
}