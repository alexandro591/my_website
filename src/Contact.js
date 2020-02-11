import React, {useState} from 'react';
import './styles/contact.css';

function Contact(options) {

    if(options.visible){
        return (
            <div className="main-app">
                hey, this is contact
            </div>
        );
    }
    else{
        return null
    }
}

export default Contact;
