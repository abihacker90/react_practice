import './button.css';
import React, { useState} from 'react';


let timer;
let prevHTML;

/* window.hello = "helló";
console.log(hello); */

function clickHappened(e) {
    
    
    const goodHTML = "Goodbye";
    
    if (e.target.innerHTML !== goodHTML) {
        prevHTML = e.target.innerHTML;
        e.target.innerHTML = "Goodbye";   
        timer = setTimeout(function(){e.target.innerHTML = prevHTML}, 3000)
    } else {
        clearTimeout(timer);
        e.target.innerHTML = prevHTML;
        console.log(prevHTML);
    }
}

function Button(props) {
    return (
        <button onClick={clickHappened}>{props.text}</button>
    );
} 

export default Button;