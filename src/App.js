import React, {useState} from 'react';
import './styles/App.css';
import Home from'./Home';
import About from'./About';
import Resume from'./Resume';
import Services from'./Services';
import Contact from'./Contact';

function handleBtn(navBtnIndex){
  navigator.vibrate(50);
  try {
    document.getElementById("selected").removeAttribute("id");
  } catch{}
  try {
    document.getElementsByClassName("nav-btn")[navBtnIndex].setAttribute("id", "selected");
  } catch{}
}

function App() {
  const [homeVisible,setHomeVisible] = useState(true)
  const [aboutVisible,setAboutVisible] = useState(false)
  const [resumeVisible,setResumeVisible] = useState(false)
  const [servicesVisible,setServicesVisible] = useState(false)
  const [contactVisible,setContactVisible] = useState(false)
  return (
    <div className="App">
      <header className="App-header" 
      style={{
        maxHeight:window.innerHeight,
        minHeight:window.innerHeight,
        maxWidth:window.innerWidth,
        minWidth:window.innerWidth
      }}>

        <section id="main"
        style={{
          maxHeight:window.innerHeight*0.9,
          minHeight:window.innerHeight*0.9,
          maxWidth:window.innerWidth,
          minWidth:window.innerWidth
        }}>
          <Home visible={homeVisible}/>
          <About visible={aboutVisible}/>
          <Resume visible={resumeVisible}/>
          <Services visible={servicesVisible}/>
          <Contact visible={contactVisible}/>
          
        </section>

        <section id="bottomApp" style={{
          maxHeight:window.innerHeight*0.1,
          minHeight:window.innerHeight*0.1,
          maxWidth:window.innerWidth,
          minWidth:window.innerWidth,
          background:"black"
        }}>
          <div id="nav-bar"
          style={{
            maxHeight:window.innerHeight*0.1,
            minHeight:window.innerHeight*0.1,
          }}>
            <button className="nav-btn" id="selected" onClick={()=>{
              setHomeVisible(false)
              setAboutVisible(false)
              setResumeVisible(false)
              setServicesVisible(false)
              setContactVisible(false)
              setHomeVisible(true)
              handleBtn(0);
            }}>
              <i class="fas fa-home"></i><br/>
              <span>Home</span>
            </button>
            
            <button className="nav-btn" onClick={()=>{
              setHomeVisible(false)
              setAboutVisible(false)
              setResumeVisible(false)
              setServicesVisible(false)
              setContactVisible(false)
              setAboutVisible(true)
              handleBtn(1);
            }}>
              <i class="fas fa-id-badge"></i><br/>
              <span>About Me</span>
            </button>

            <button className="nav-btn" onClick={()=>{
              setHomeVisible(false)
              setAboutVisible(false)
              setResumeVisible(false)
              setServicesVisible(false)
              setContactVisible(false)
              setResumeVisible(true)
              handleBtn(2);
            }}>
              <i class="fas fa-book-reader"></i><br/>
              <span>Resume</span>          
            </button>
            
            <button className="nav-btn" onClick={()=>{
              setHomeVisible(false)
              setAboutVisible(false)
              setResumeVisible(false)
              setServicesVisible(false)
              setContactVisible(false)
              setServicesVisible(true)
              handleBtn(3);
            }}>
              <i class="fas fa-wrench"></i><br/>
              <span>Services</span>
            </button>

            <button className="nav-btn" onClick={()=>{
              setHomeVisible(false)
              setAboutVisible(false)
              setResumeVisible(false)
              setServicesVisible(false)
              setContactVisible(false)
              setContactVisible(true)
              handleBtn(3);
              handleBtn(4);
            }}>
              <i class="fas fa-envelope"></i><br/>
              <span>Contact</span>
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
