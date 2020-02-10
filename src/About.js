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
                    ohtihi
                </div>    
                <div id="contentAbout">
                    content
                </div>    
            </section>
        );
    }
    else{
        return null
    }
}

export default About;
