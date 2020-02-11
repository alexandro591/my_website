import React, {useState} from 'react';
import './styles/services.css';

function Services(options) {

    if(options.visible){
        return (
            <div className="main-app">
                hey, this is services
            </div>
        );
    }
    else{
        return null
    }
}

export default Services;
