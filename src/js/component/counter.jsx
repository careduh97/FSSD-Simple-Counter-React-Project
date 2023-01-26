import React from "react";
import PropType from "prop-types";

export function SecondsCounter (props) {
    return (
        <div className="container d-flex flex-direction-row justify-content-evenly align-items-center">
            <div className="logo">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="position4">
                {props.digit4}
            </div>
            <div className="position3">
                {props.digit3}
            </div>
            <div className="position2">
                {props.digit2}
            </div>
            <div className="position1">
                {props.digit1}
            </div>
        </div>
    )
}

SecondsCounter.propTypes = {
    digit4: PropType.number,
    digit3: PropType.number,
    digit2: PropType.number,
    digit1: PropType.number,
}