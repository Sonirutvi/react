import React, { useState } from "react";
import LoginControl from "./login_control";

function Welcome (props) {
    const [name, setName] = useState("rutvi")
    const [address, setAddress] = useState("Ahmedabad")
    const [isToggleOn,setIsToggleOn]=useState(true)
    const handleClick = () => {
        setName("Rutvi")
        setAddress("Ahm")
    }
    const handleToggleClick = () => {
        setIsToggleOn(!isToggleOn)
    }


return(
    <>
   <h1>Hello, {name} from {props.address} </h1>
   <h1>Address {address}</h1>
   <button onClick={handleToggleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
   <button onClick={() => handleClick()}>Click</button>
   <LoginControl />
    </>
)
}

export default Welcome