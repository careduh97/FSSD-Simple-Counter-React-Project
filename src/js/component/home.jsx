import React from "react";
import PropType from "prop-types";

import { restartCounter, resumeCounter, pauseCounter } from "../index.js";
import { SecondsCounter } from "./counter.jsx";

const Home = (props) => {
	return (
		<div>
            <SecondsCounter digit4={props.d4} digit3={props.d3} digit2={props.d2} digit1={props.d1}/>
            <div className="displayButtons d-flex flex-direction-row justify-content-evenly align-items-center p-2">
                <div className="pauseButton">
                    <button onClick={pauseCounter} type="button" className="btn btn-danger">PAUSE</button>
                </div>
                <div className="resumeButton">
                    <button onClick={resumeCounter} type="button" className="btn btn-success">RESUME</button>
                </div>
                <div className="restartButton">
                    <button onClick={restartCounter} type="button" className="btn btn-warning">RESTART</button>
                </div>
            </div>
        </div>
	);
};

export default Home;

Home.propTypes = {
    d4: PropType.number,
    d3: PropType.number,
    d2: PropType.number,
    d1: PropType.number,
}