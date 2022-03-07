import React, { useState } from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function TemperatureInput(props) {

    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value)
    }

    return (
        <>
            <fieldset>Enter temperature in {scaleNames[props.scale]}:</fieldset>
            <input value={props.temperature}
                onChange={handleChange} />
        </>
    )
}

export default TemperatureInput