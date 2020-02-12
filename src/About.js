import React, {useState} from 'react';
import './styles/about.css';

function About(options) {

    if(options.visible){
        return (
            <section id="about" 
            style={{
              minHeight:window.innerHeight*.9,
            }}>
                <div id="photoAbout">
                    <img src="./img/aboutPicture.jpg"/>
                </div>    
                <hr/>
                <div id="contentAbout">
                    <h1 className="btnAbout" style={{textAlign:"right"}} onClick={()=>{
                        if(document.getElementById('whoami').classList.contains("contentHidden")) {
                            document.getElementById('whoami').removeAttribute("class")
                            document.getElementById('whoami').setAttribute("class","contentAvailable")
                        }
                        document.getElementById('myskills').setAttribute("class","contentHidden")
                        document.getElementById('programs').setAttribute("class","contentHidden")
                    }}>
                        Who am I? <i className="fas fa-user-secret"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    </h1>
                    
                    <div id="whoami" className="contentAvailable">
                        <p>I'm a web developer, software developer and Mechatronics Engineer graduated from the "Universidad de las Fuerzas Armadas - ESPE" from Ecuador. Throughout my profesional expirience I've worked for small and medium companies, providing services like networking, server maintenance, software development and web development. I've also worked for Ten-tech, where I was in charge of CAD modelling, PCB design and implementation and 3D printing.</p>
                        <p>My passion is the software development, technology and IT, the industrial world and the teaching. I am characterized by always being constantly learning, being extremely self-taught and being hard-working, skills that have opened several professional doors for me.</p>
                        <p>I've covered my abilities as follows. Also you can visit my <a href="https://www.linkedin.com/in/andr%C3%A9s-tapia-a701aa193/" target="_blank">LinkedIn</a> profile and my <a href="https://app.pluralsight.com/profile/alexandro-tapia" target="_blank">PluralSight</a> profile to check my scores in the different fields I've mentioned or you can check my <a href="https://github.com/alexandro591/" target="_blank">GitHub</a> profile, and see my personal projects, such as my own company <a href="https://localhostecuador.netlify.com/" target="_blank">Localhost</a>.</p>
                    </div>

                    <h1 className="btnAbout" style={{textAlign:"right"}} onClick={()=>{
                        if(document.getElementById('myskills').classList.contains("contentHidden")) {
                            document.getElementById('myskills').removeAttribute("class")
                            document.getElementById('myskills').setAttribute("class","contentAvailable")
                        }
                        document.getElementById('whoami').setAttribute("class","contentHidden")
                        document.getElementById('programs').setAttribute("class","contentHidden")
                    }}>
                        Skills <i className="fas fa-cog"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    </h1>

                    <div id="myskills" className="contentHidden">
                        <p>Front-end / Back-end developer</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 80%, #ffed4b 60%)"
                        }}>80%</p>

                        <p>Software developer</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 100%, #ffed4b 60%)"
                        }}>100%</p>

                        <p>Mechanical knowledge</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 85%, #ffed4b 60%)"
                        }}>85%</p>

                        <p>Electrical and Electronics knowledge</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 95%, #ffed4b 60%)"
                        }}>95%</p>

                        <p>Networking and servers knowledge</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 90%, #ffed4b 60%)"
                        }}>90%</p>
                    </div>

                    <h1 className="btnAbout" style={{textAlign:"right"}} onClick={()=>{
                        if(document.getElementById('programs').classList.contains("contentHidden")) {
                            document.getElementById('programs').removeAttribute("class")
                            document.getElementById('programs').setAttribute("class","contentAvailable")
                        }
                        document.getElementById('whoami').setAttribute("class","contentHidden")
                        document.getElementById('myskills').setAttribute("class","contentHidden")
                    }}>
                        Software I use <i className="fab fa-ubuntu"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    </h1>

                    <div id="programs" className="contentHidden">
                        <p>SolidWorks</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 90%, #ffed4b 60%)"
                        }}>90%</p>

                        <p>Matlab</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 100%, #ffed4b 60%)"
                        }}>100%</p>

                        <p>Microsoft Office</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 85%, #ffed4b 60%)"
                        }}>85%</p>

                        <p>FluidSIM</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 95%, #ffed4b 60%)"
                        }}>95%</p>

                        <p>CADe SIMU</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 90%, #ffed4b 60%)"
                        }}>90%</p>

                        <p>Photoshop</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 70%, #ffed4b 60%)"
                        }}>70%</p>

                        <p>Illustrator</p>
                        <p className="skills" style={{
                            background: "linear-gradient(110deg, #fdcd3b 65%, #ffed4b 60%)"
                        }}>65%</p>
                    </div>
                    
                </div>    
            </section>
        );
    }
    else{
        return null
    }
}

export default About;
