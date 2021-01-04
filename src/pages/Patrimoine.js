import React from 'react';
import { useEffect } from 'react';
import PatrimoineProjects from '../components/patrimoine/PatrimoineProjects'
import Footer from '../components/footer';


export default function Patrimoine() {
   
  useEffect(() => {

    window.scrollTo(0, 0)
  }, []);
    

  
  return (
    <> 
       <div>
      <section id="banner" class="bg-img"  data-bg="patrimoine.jpg">
        <div class="inner">
          <header>
            <h1>Patrimoine</h1>
          </header>
        </div>
        <a href="#one" class="more">
          Learn More
        </a>
      </section>
    </div>
       <PatrimoineProjects/>
       <Footer/>

    </>
  );
}
