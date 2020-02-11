import React, {useState} from 'react';
import './styles/home.css';

function Home(options) {

    if(options.visible){
        return (
            <section id="home"        
            style={{
                maxHeight:window.innerHeight*0.9,
                minHeight:window.innerHeight*0.9,
                maxWidth:window.innerWidth,
                minWidth:window.innerWidth
            }}>
                <img src="./img/homePicture.jpg"/>
                <h1 style={{fontSize:"3vh",fontWeight:700}}>Andrés Alexandro Tapia</h1>
                <h5>Mechatronics Engineer</h5>
                <h5>Front-end / Back-end developer</h5>
                <h5>Software developer</h5>
                <h5>Founder of Localhost</h5>
            </section>
        );
    }
    else{
        return null
    }
}

export default Home;
