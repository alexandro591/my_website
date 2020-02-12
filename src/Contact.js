import React, {useState} from 'react';
import './styles/contact.css';

function Contact(options) {

    if(options.visible){
        return (
            <div class="contact" id="contact" style={{
                minHeight:window.innerHeight*.9,
            }}>
            <div class="container">
              <h3 class="text-center">Contact me</h3>
              <p class="text-center">If you requiere any of my services,
                <br/>feel free to contact me through my official
                <br/>phone, email or social media.
              </p>
              <div class="row">
                <div class="col-sm-4">
                  <div class="container">
                    <h4 class="text-center"><i class="fa fa-phone">&nbsp;&nbsp;</i>Phone</h4>
                    <a href="tel:+593998775709" target="_blank"><div class=" myphone text-center">+593998775709</div></a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="container">
                    <h4 class="text-center"><i class="fa fa-envelope">&nbsp;&nbsp;</i>Email</h4>
                    <a href="mailto:alexandrotapiaflores@gmail.com" target="_blank"><div class="myemail text-center">alexandrotapiaflores@gmail.com</div></a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="container">
                    <h4 class="text-center"><i class="fa fa-hashtag">&nbsp;&nbsp;</i>Social Media</h4>
                    <a href="https://www.facebook.com/alexandrotapiaflores" target="_blank"><div class="mysocialmedia text-center">Facebook</div></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="emailPerson">
              <textarea type="text" id="person" placeholder="Who are you? (Email or Name)"></textarea>
            </div>
            <div class="emailMessage">
              <textarea type="text" id="message" placeholder="Your message"></textarea>
            </div>
            <div class="semail">
              <button type="button"><p>Send me a message</p></button>
            </div>
          </div>
        );
    }
    else{
        return null
    }
}

export default Contact;
