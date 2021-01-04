import React from 'react';


//import data 
import {HomeSectionsData} from "../constantes"
//import components
import LandingPage from '../components/common/LandingPage';
import HomeSections from "../components/home/HomeSections"
import Footer from '../components/footer';


const Home = props => {
    return (
        <div>
        <LandingPage/>
        {HomeSectionsData.map((el)=><HomeSections data={el}/>)}
        <Footer/>
        </div>
    );
};



export default Home;
