import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomeSections = (props) => {

    const {data}=props
    console.log(data)
    let history = useHistory()
  return (
    <div>
      <section id={data.id} class="wrapper post bg-img" data-bg={data.bg}>
        <div class="inner">
          <article class="box">
            <header>
              <h2 style = {{fontFamily : "Lobster",fontWeight:"lighter"}}>{data.title}</h2>
              {/* <p>{data.subtitle}</p> */}
            </header>
            <div class="content">
              <p style = {{color : "whitesmoke"}}>
                {data.text}
              </p>
            </div>
            <footer>
            <a onClick = {()=> {
                history.push(data.link)
                window.location.reload()

              }} class="button alt" >
                See More
              </a>
            </footer>
          </article>
        </div>
        <a href="#two" class="more">
          Learn More
        </a>
      </section>
    </div>
  );
};

export default HomeSections;
