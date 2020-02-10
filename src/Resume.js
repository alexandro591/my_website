import React, {useState} from 'react';
import './styles/resume.css';

function Resume(options) {

    if(options.visible){
        return (
            <div className="main-app">
                hey, this is resume
            </div>
        );
    }
    else{
        return null
    }
}

export default Resume;
