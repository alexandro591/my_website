import React from 'react';
import './styles/services.css';

function Services(options) {

    if(options.visible){
        return (
            <div className="services" id="services"style={{
                minHeight:window.innerHeight*.9,
            }}>
                <div className="container">
                    <h3 style={{margin:"auto", textAlign:"center"}}><br/>My Services<br/><br/></h3>
                    <p style={{margin:"auto", textAlign:"center",marginBottom:"5vh"}}>Along with my professional experience and studies
                        <br/>I am confident myself to offer the best services possible
                        <br/>in the next fields.
                    </p>
                    <div className="row">
                        <div className="col" style={{textAlign:"center"}}>
                            <div>
                                <h4><i className="fa fa-cogs">&nbsp;&nbsp;</i>Mechanical</h4>
                                <p>Design of mechanical drawings.
                                <br/>Design of mechanical elements, components, parts and machinery.
                                <br/>Static load simulation over structures.
                                <br/>Shafts and components calculation.
                                <br/>QA/QC
                                </p>
                            </div>
                            <img src="./img/gears.gif"/>
                        </div>
                        <div className="col" style={{textAlign:"center"}}>
                            <div>
                                <h4><i className="fa fa-plug">&nbsp;&nbsp;</i>Electrical and Eletronic</h4>
                                <p>Design and implementation of electrical power systems.
                                <br/>Design and implementation of electronic logic circuits.
                                <br/>implementation of actuators and sensors in mechatronic machines.
                                </p>
                            </div>
                            <img src="./img/electronic.gif"/>
                        </div>
                        <div className="col" style={{textAlign:"center"}}>
                            <div>
                                <h4><i className="fa fa-laptop">&nbsp;&nbsp;</i>Software</h4>
                                <p>Front-end / Back-end development.
                                <br/>Web design.
                                <br/>Software development.
                                <br/>Server maintenance.
                                <br/>Networking maintenance.
                                <br/>OS instalation.
                                </p>
                            </div>
                            <img src="./img/software.gif"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    else{
        return null
    }
}

export default Services;
