import React, { useState } from "react";
import BoilingVerdict from "./boiling_info";
import TemperatureInput from "./temp_input";

function Calculator() {

    const [scale, setScale] = useState("c")
    const [temperature, setTemperature] = useState("")

    const handleCelsiusChange = (value) => {
        setScale('c')
        setTemperature(value);
    }

    const handleFahrenheitChange = (value) => {
        setScale('f')
        setTemperature(value);
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <>

            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />

        </>
    )

}

export default Calculator