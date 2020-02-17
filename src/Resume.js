import React from 'react';
import './styles/resume.css';

function Resume(options) {

    if(options.visible){
        return (
          <div className="resume" id="resume">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3>My Experiences</h3>
                  <ul className="timeline">
                    <li>
                      <h4>Ten-Tech (2013 - 2018)</h4>
                      <p>PCB design and implementation.
                        <br/>CAD design of mechanical elements.
                        <br/>3D printing.
                        <br/>Design and implementation of mechatronic projects, which implies the use of electrical and electronic elements, mechanical elements, and programming.
                      </p>
                    </li>
                    <li>
                      <h4>Notaría segunda del cantón Tena (2017 - 2019)</h4>
                      <p>Networking maintenance and implementation.
                        <br/>Maintenance of the operating system and software instalation.
                        <br/>Adminitrative software development.
                        <br/>Web development and social-media management.
                        <br/>Design of the distribution and location drawings.
                      </p>
                    </li>
                    <li>
                      <h4>Universidad de las Fuerzas Armadas - ESPE (2018)</h4>
                      <p>Design and construction of a social robot for the rehabilitation of autism children, using artificial vision and LabVIEW.
                        <br/>Design and construction of a controlled ambient for social robots interaction.
                      </p>
                    </li>
                    <li>
                      <h4>Consultorio jurídico Pérez Brito (2019)</h4>
                      <p>Networking maintenance and implementation.
                        <br/>Maintenance of the operating system and software instalation.
                      </p>
                    </li>
                    <li>
                      <h4>Mecánica Automotriz Quito (2019)</h4>
                      <p>Maintenance of stationary motors.
                      </p>
                    </li>
                    <li>
                      <h4>GAD Tena - Planta de tratamiento de aguas residuales (2020 - Current job)</h4>
                      <p>Maintenance of pumps, stationary motors, valves and sensors.
                        <br/>Monitoring and assuring the process of treating the residual waters of Tena.
                        <br/>Logistics and administration of the water plant.
                      </p>
                    </li>
                    <li>
                      <h4>Localhost - Cofounder (2020 - Current job)</h4>
                      <p>software development.
                        <br/>Web design and development.
                        <br/>Networking instalation and maintenance.
                        <br/>OS and software instalation.
                        <br/>Various computer services
                      </p>
                    </li>
                  </ul>
                </div>
    
                <div className="col">
                  <h3>Education</h3>
                  <ul className="timeline">
                    <li>
                      <h4>Unidad Educativa "Amazónica" (2000-2006)</h4>
                      <p>Primary School.
                        <br/>Graduated.
                        <br/><b>Location: </b>Napo - Tena
                        <br/><b>Average: </b>19/20
                      </p>
                    </li>
                    <li>
                      <h4>Colegio Fisco-Misional “San José” (2006-2012)</h4>
                      <p>Secondary School.
                        <br/>Graduated.
                        <br/><b>Location: </b>Napo - Tena
                        <br/><b>Degree: </b>Físico - Matemático
                        <br/><b>Average: </b>18/20
                      </p>
                    </li>
                    <li>
                      <h4>Universidad de las Fuerzas Armadas - ESPE (2013-2019)</h4>
                      <p>University.
                        <br/>Graduated.
                        <br/><b>Location: </b>Sangolquí - Pichincha - Quito
                        <br/><b>Degree: </b>Ingeniero en Mecatrónica
                        <br/><b>Average: </b>17/20
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <br/><h3>Courses and certifications</h3>
                  <ul className="timeline">
                    <li>
                      <h4>CISCO - CCNA 1</h4>
                      <p><b>Title: </b>Networking introduction.
                        <br/><b>Place: </b>Sangolquí - ESPE Innovativa
                        <br/><b>Date: </b>08/2019
                        <br/><b>Hours: </b>40
                      </p>
                    </li>
                    <li>
                      <h4>CISCO - CCNA 2</h4>
                      <p><b>Title: </b>Basic principles of routing and switching.
                        <br/><b>Place: </b>Sangolquí - ESPE Innovativa
                        <br/><b>Date: </b>08/2019
                        <br/><b>Hours: </b>40
                      </p>
                    </li>
                    <li>
                      <h4>Neuromarketing seminar</h4>
                      <p><b>Title: </b>introduction to neuromarketing.
                        <br/><b>Place: </b>Sangolquí - ESPE Innovativa
                        <br/><b>Date: </b>07/2019
                        <br/><b>Hours: </b>8
                      </p>
                    </li>
                    <li>
                      <h4>ASME member</h4>
                      <p><b>Title: </b>ASME member (American Society of Mechanical Engineers).
                        <br/><b>Place: </b>Sangolquí - ASME ESPE
                        <br/><b>Date: </b>07/2017
                        <br/><b>Time as member: </b>1 year
                      </p>
                    </li>
                  </ul>
                </div>
    
                <div className="col">
                  <br/><h3>Awards, honours and achievements</h3>
                  <ul className="timeline">
                    <li>
                      <h4>Scientific Article</h4>
                      <p><b>Title: </b>Pose Estimation Based on Monocular Visual Odometry and Lane Detection for Intelligent Vehicles.
                        <br/><b>Function: </b>Co-author
                        <br/><b>Link: </b><a href="https://sci-hub.tw/10.1007/978-3-319-95282-6_40" target="_blank" rel="noopener noreferrer">https://sci-hub.tw/10.1007/978-3-319-95282-6_40</a>
                      </p>
                    </li>
                    <li>
                      <h4>Contest</h4>
                      <p><b>Title: </b>Smart University
                        <br/><b>Idea: </b>“SAMI” (Sistema de asistencia multifuncional interactivo)
                        <br/><b>Place: </b>Sangolquí - ESPE Innovativa
                        <br/><b>Position: </b>Won in the category and best device in general.
                      </p>
                    </li>
                    <li>
                      <h4>Best Graduated</h4>
                      <p><b>Title: </b>Best graduated from Mechatronics Engineering Faculty, promotion 201954
                        <br/><b>Place: </b>ESPE - Sangolquí
                      </p>
                    </li>
                    <li>
                      <h4>CCNA 1 - 2 High scores</h4>
                      <p><b>Title: </b>Award for culminate the studies of CNNA 1 and 2 with more than 90% of general score in both courses.
                        <br/><b>Place: </b>Sangolquí - ESPE Innovativa
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row" id="download">
                <h5><a href="https://1drv.ws/w/s!AkRL6s8fyCDpkRYI0n2bXBzBIZmY?e=zWDjNx" target="_blank" rel="noopener noreferrer">Download this resume in Word <i className="fas fa-file-word"></i></a></h5>
                <h5><a href="https://1drv.ws/b/s!AkRL6s8fyCDpkRV7jiHFTEQm1iX5?e=k3l3pg" target="_blank" rel="noopener noreferrer">Download this resume in PDF <i className="fas fa-file-pdf"></i></a></h5>
              </div>
            </div>
          </div>
        );
    }
    else{
        return null
    }
}

export default Resume;
