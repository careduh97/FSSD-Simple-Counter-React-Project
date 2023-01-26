//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter = 0;
let timer = 0;

window.onload = homeApp ();

function homeApp () {
    timer = setInterval (function () {
       const counterDigit4 = Math.floor(counter / 1000) % 10
       const counterDigit3 = Math.floor(counter / 100) % 10
       const counterDigit2 = Math.floor(counter / 10) % 10
       const counterDigit1 = (counter % 10)
       console.log(counterDigit4, counterDigit3, counterDigit2, counterDigit1)
       counter++
       ReactDOM.render(<Home d4={counterDigit4} d3={counterDigit3} d2={counterDigit2} d1={counterDigit1}/>, document.querySelector("#app"));
    }, 1000)   
}

export function pauseCounter () {
    clearInterval(timer);
}

export function resumeCounter () {
    clearInterval(timer);
    homeApp();
}

export function restartCounter () {
    window.location.reload();
}