import React from "react";
import "../../assets/landingPage.css"
const LandingPage = (props) => {
  return (
    <div>
      <section id="banner" class="bg-img" data-bg="landing.jpg">
        <div class="inner">
          <header>
            <h1>Démarres 
            </h1>
            <p>We are a training program on leadership and
social leadership. That Promotes dialogue among
cultures and promotes community responsibility for
local development.</p>
            
            <div className="buttonLandingPageHome">
            <a 
            target = '_blanck'
              href="https://drive.google.com/file/d/13nZmwsqVigNdXg755_hdbSg5DX1vP-_U/view?usp=sharing"
               className="button alt learnmore" >
                Learn More
              </a>
              <a 
              target = '_blanck'
              href="https://drive.google.com/file/d/1Fsi0r2trttGTDF4jOwUTewCf3uHWM0Ux/view?usp=sharing"

class="button alt" >
 إقرأ أكثر
</a>
</div>
          </header>
        </div>
        <a href="#one" class="more">
          See More
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
