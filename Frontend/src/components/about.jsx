import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="container about-body">
      <div className="about-header">About E-Farmlife</div>

      {/* cards */}
      <div className="about-content">
        <div className="about-card">
          <div className="about-card-img sunit"></div>
          <p className="about-card-text">
            Team : HexaTech <br />
          </p>
        </div>
        <div className="about-description">
          <h3 className="about-subheader">Our Motive</h3>
          <p>
            "Empowering Farmer,Enriching lives E-Farmlife connects you directly with local farmers,
            eliminating middlemen and ensuring freshness,quality,and fair prices."
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
