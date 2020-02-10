import React, {useState} from 'react';
import './styles/about.css';

function About(options) {

    if(options.visible){
        return (
            <section id="about"        
            style={{
                maxHeight:window.innerHeight*0.9,
                minHeight:window.innerHeight*0.9,
                maxWidth:window.innerWidth,
                minWidth:window.innerWidth
            }}>
                <div id="photoAbout">
                    <img src="./img/aboutPicture.jpg"/>
                </div>    
                <div id="contentAbout">
                    <h1>Who am I?</h1>
                    <p>I'm a web developer, software developer and Mechatronics Engineer graduated from the "Universidad de las Fuerzas Armadas - ESPE" from Ecuador. Throughout my profesional expirience I've worked for small and medium companies, providing services like networking, server maintenance, software development and web development. I've also worked for Ten-tech, where I was in charge of CAD modelling, PCB design and implementation and 3D printing.</p>
                    <p>My passion is the software development, technology and IT, the industrial world and the teaching. I am characterized by always being constantly learning, being extremely self-taught and being hard-working, skills that have opened several professional doors for me.</p>
                    <p>I've covered my habilities as follows. Also you can visit my LinkedIn profile and my PluralSight profile to check my scores in the different fields I've mentioned or you can check my GitHub profile, and see my personal projects, such as my own company LocalHost.</p>
                </div>    
            </section>
        );
    }
    else{
        return null
    }
}

export default About;
