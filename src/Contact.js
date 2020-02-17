import React from 'react';
import './styles/contact.css';
import ScriptTag from 'react-script-tag';

function Contact(options) {

    if(options.visible){
        return (
            <div className="contact" id="contact" style={{
                minHeight:window.innerHeight*.9,
                minWidth:window.innerWidth,
                maxWidth:window.innerWidth
            }}>
              <h3 className="text-center">Contact me</h3>
              <p className="text-center">If you requiere any of my services,
                <br/>feel free to contact me through my official
                <br/>phone, email or social media.
              </p>
              <div className="row">
                <div className="col">
                  <div className="container">
                    <h4 className="text-center"><i className="fa fa-phone">&nbsp;&nbsp;</i>Phone</h4>
                    <a href="tel:+593998775709" target="_blank" rel="noopener noreferrer"><div className=" myphone text-center">+593998775709</div></a>
                  </div>
                </div>
                <div className="col">
                  <div className="container">
                    <h4 className="text-center"><i className="fa fa-envelope">&nbsp;&nbsp;</i>Email</h4>
                    <a href="mailto:alexandrotapiaflores@gmail.com" target="_blank" rel="noopener noreferrer"><div className="myemail text-center">alexandrotapiaflores@gmail.com</div></a>
                  </div>
                </div>
                <div className="col">
                  <div className="container">
                    <h4 className="text-center"><i className="fab fa-whatsapp">&nbsp;&nbsp;</i>Social Media</h4>
                    <a href="https://wa.me/593998775709" target="_blank" rel="noopener noreferrer"><div className="mysocialmedia text-center">WhatsApp</div></a>
                  </div>
                </div>
              </div>
 
            <div className="emailPerson">
              <input type="text" id="person" placeholder="Who are you? (Email or Name)"></input>
            </div>
            <div className="emailMessage">
              <textarea type="text" id="message" placeholder="Your message"></textarea>
            </div>
            <div className="semail">
              <button type="button" id="sendEmail">Send Message</button>
            </div>
            <ScriptTag isHydrating={false} type="text/javascript" src="./js/sendEmail.js" />
          </div>
        );
    }
    else{
        return null
    }
}

export default Contact;
