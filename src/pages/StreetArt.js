import React from 'react';
import { useEffect } from 'react';


import Gallery from 'react-grid-gallery';


const IMAGES =
[{
        src: "img/streetart/street1.jpg",
        thumbnail: "img/streetart/street1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 300,
      
},
{
  src: "img/streetart/street2.jpg",
  thumbnail: "img/streetart/street2.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},

{
  src: "img/streetart/street3.jpg",
  thumbnail: "img/streetart/street3.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/street4.jpg",
  thumbnail: "img/streetart/street4.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},






{
  src: "img/streetart/street7.jpg",
  thumbnail: "img/streetart/street7.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},

{
  src: "img/streetart/street9.jpg",
  thumbnail: "img/streetart/street9.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/street10.jpg",
  thumbnail: "img/streetart/street10.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},

{
  src: "img/streetart/street12.jpg",
  thumbnail: "img/streetart/street12.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/street13.jpg",
  thumbnail: "img/streetart/street13.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/streetk1.jpg",
  thumbnail: "img/streetart/streetk1.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/streetk2.jpg",
  thumbnail: "img/streetart/streetk2.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/streetk3.jpg",
  thumbnail: "img/streetart/streetk3.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 220,

},
{
  src: "img/streetart/streetk4.jpg",
  thumbnail: "img/streetart/streetk4.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},






{
  src: "img/streetart/street22.jpg",
  thumbnail: "img/streetart/street22.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},{
  src: "img/streetart/street23.jpg",
  thumbnail: "img/streetart/street23.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},{
  src: "img/streetart/street25.jpg",
  thumbnail: "img/streetart/street25.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},{
  src: "img/streetart/street26.jpg",
  thumbnail: "img/streetart/street26.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/street27.jpg",
  thumbnail: "img/streetart/street27.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 300,

},{
  src: "img/streetart/street28.jpg",
  thumbnail: "img/streetart/street28.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/street29.jpg",
  thumbnail: "img/streetart/street29.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street30.jpg",
  thumbnail: "img/streetart/street30.jpg",
  thumbnailWidth: 300,
  thumbnailHeight: 250,

},
{
  src: "img/streetart/street31.jpg",
  thumbnail: "img/streetart/street31.jpg",
  thumbnailWidth: 350,
  thumbnailHeight: 174,

},
{
  src: "img/streetart/street32.jpg",
  thumbnail: "img/streetart/street32.jpg",
  thumbnailWidth: 400,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street33.jpg",
  thumbnail: "img/streetart/street33.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street34.jpg",
  thumbnail: "img/streetart/street34.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street35.jpg",
  thumbnail: "img/streetart/street35.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street36.jpg",
  thumbnail: "img/streetart/street36.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street37.jpg",
  thumbnail: "img/streetart/street37.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street38.jpg",
  thumbnail: "img/streetart/street38.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street39.jpg",
  thumbnail: "img/streetart/street39.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street40.jpg",
  thumbnail: "img/streetart/street40.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

},
{
  src: "img/streetart/street41.jpg",
  thumbnail: "img/streetart/street41.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 200,

}










]



export default function StreetArt() {
  useEffect(() => {

    window.scrollTo(0, 0)
  }, []);
  return (
    <>
     <div >
      <section id="banner" class="bg-img" data-bg="streetart.jpg">
        <div class="inner">
          <header>
            <h1>Street Art</h1>
          </header>
        </div>
        <a href="#one" class="more">
          Learn More
        </a>
      </section>
    </div>
    <div style = {{height :"100% ", width :"100%"}}>
    <Gallery  backdropClosesModal={true} images={IMAGES}/>
    </div>
     
    </>
  );
}
