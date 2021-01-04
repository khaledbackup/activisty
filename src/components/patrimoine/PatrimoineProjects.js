import React from 'react';
import { useHistory } from "react-router-dom";


export default function PatrimoineProjects() {

  let history = useHistory()
  return (
    <div>
    
  <section class="content-section" id="portfolio">
    <div class="container">
      <div class="content-section-heading text-center">
        <h1 class="text-secondary mb-0">Projets Patrimoines</h1>
        <h2 class="mb-5">Recent Projects</h2>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6">
        
          <a class="portfolio-item" >
          <a onClick = {()=> {
                history.push('/Msaken')
                window.location.reload()
              }} >
            <div class="caption">
              <div class="caption-content">
                <div class="h2">مساكن البية</div>
                {/* <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> */}
              </div>
            </div>
            <img class="img-fluid" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/124920610_123019602915337_1617097117458975134_o.png?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=IRrgvHnG-O4AX9AWNKc&_nc_ht=scontent.ftun4-1.fna&oh=c025a201cb999ac2ca9a2dd26741d6e2&oe=5FD39BCB" alt=""/>
            </a>
          </a>
         
        </div>
       
       
        <div class="col-lg-6">
        <a onClick = {()=> {
                history.push('/Mornag')
                window.location.reload()

              }}>
          <a class="portfolio-item" >
            <div class="caption">
              <div class="caption-content">
                <div class="h2">مرناق ما تموتش</div>
                {/* <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> */}
              </div>
            </div>
            <img class="img-fluid" style = {{width : "600px"}} src="https://www.sirokotravel.com/wp-content/uploads/2019/08/Djebel_Ressas_1.jpg" alt=""/>
          </a>
          </a>
        </div>
      
        
        <div class="col-lg-6">
        <a onClick = {()=> {
                history.push('/Kalaa')
                window.location.reload()

              }}>
          <a class="portfolio-item" >
            <div class="caption">
              <div class="caption-content">
                <div class="h2">القلعة</div>
                {/* <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p> */}
              </div>
            </div>
            <img class="img-fluid" src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.15752-9/126079011_282295363201673_4710350000029131973_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=BF0tb_P_1KAAX8anUDW&_nc_ht=scontent.ftun12-1.fna&oh=24a787401445b07298923be8ff0ed31d&oe=5FDAEE14" alt=""/>
          </a>
          </a>
        </div>
        
        <div class="col-lg-6">
          <a class="portfolio-item">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">بروجاي آخر</div>
                {/* <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus..</p> */}
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-4.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
    
    </div>
  );
}
