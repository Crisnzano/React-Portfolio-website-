import React from "react";
import IMAGES from "../images/index.js";

export default function Home() {
    return (
        <div>
      <section className="home" id="home">
        <div className="content">
          <span className="hi"> Hello...</span>
          <h3> My name is <span> Crispus Nzano</span></h3>
          <p className="info">I am a front-end developer</p>
          <p className="text">I'm a web designer, graphics designer and Frontend developer. I studied for a Bachelor's Degree in Business Information and Technology.
          Welcome to my Portfolio website.</p>
          <a href="#about" className="btn">About me</a>
      </div>
    <img className="" src={IMAGES.imageOne }alt="" style={{ width: '500px', height: '500px' }}
    />
      </section>
    </div>

    );
}