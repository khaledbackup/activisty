import React from 'react';
import {Link} from 'react-router-dom'


function PageWrapper(props) {
  return (
    <div>
        <div>
            <header id="header">
                <div class="logo"><h4>ديماري</h4></div>
                <a href="#menu"><span>Menu</span></a>
            </header>


            <nav id="menu">
                <ul class="links">
                    
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/patrimoine">Patrimony</Link></li>
                <li><Link to = "/culture">Culture</Link></li>
                <li><Link to = "/streetart">Street Art</Link></li>
                </ul>
            </nav>
            
        </div>
        {props.children}

      
    </div>
  );
}


export default PageWrapper
