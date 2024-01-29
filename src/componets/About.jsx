import React from "react";
import IMAGES from "../images/index.js";


export default function About() {
    return (
        <div>
        <section className="about" id="about">
          <h1 class="heading">About<span> me</span></h1>
          <div className="row-1">
            <div className="image">
              <img src={IMAGES.imageTwo} alt="" />
            </div>
  
            <div className="content">
              <div className="content">
                <h3> My name is Crispus Nzano</h3>
                <p>I am an upcoming Frontend Developer who is looking 
                to enhance my skills and gain experience when it comes to 
                matters of Frontend Development, here are my experience ratings with 
                using different programming languages.</p>
            <div className="box-container">
              <div className="box">
                  <p> <span> Experience:</span> 2+ years
                  Frontend Development, Graphics Design, 
                  UI/UX development</p>
              <div className="box">
                  <p> <span> Interests:</span> Painting
                  Nature Walks
                  Coding</p>
              </div>
              <div className="box">
                  <p> <span> Education:</span> BBIT Bachelors Degree(Ongoing)
                  Kenya Secondary School Certificate
                  AWS Training Certificate
                  CCNA Training Certficate
                  Coding</p>
              </div>
              <a href={process.env.PUBLIC_URL + '/assets/Crispus CV.pdf'} target="_blank" rel="noopener noreferrer" className="btn">Donwnload CV</a>
              <a href="https://github.com/Crisnzano" className="btn">View projects</a>
              </div>
          </div>
          <h1 className="heading"><span>My</span> skills</h1>
          <div className="row-2">
          <div className="skills">
            <div className="progress">
              <h3> HTML <span>95%</span></h3>
              <div className="bar"><span></span></div>
            </div>
            <div className="progress">
              <h3> CSS <span>95%</span></h3>
              <div className="bar"><span></span></div>
            </div>
            <div className="progress">
              <h3> JavaScript <span>80%</span></h3>
              <div className="bar"><span></span></div>
            </div>
            <div className="progress">
              <h3> UI/UX(FIGMA) <span>92%</span></h3>
              <div className="bar"><span></span></div>
            </div>
            <div className="progress">
              <h3> Mobile Dev <span>60%</span></h3>
              <div className="bar"><span></span></div>
            </div>
            <div className="progress">
              <h3> Graphic design(FIGMA, CANVA) <span>95%</span></h3>
              <div className="bar"><span></span></div>
            </div>
            <div className="progress">
              <h3> Git <span>65%</span></h3>
              <div className="bar"><span></span></div>
            </div>
  
          </div>
          <div className="box-container">
            <div className="box">
              <h3> - 2+</h3>
              <p>years of experience</p>
            </div>
            <div className="box">
              <h3> - 10+</h3>
              <p>happy clients</p>
            </div>
            <div className="box">
              <h3> - 5+</h3>
              <p>projects completed</p>
            </div>
            <div className="box">
              <h3> - 2+</h3>
              <p>certifications attained</p>
            </div>
          </div>
          </div>
        </div>
  
        </div>
  
          </div>
  
        </section>
      </div>

    );
}