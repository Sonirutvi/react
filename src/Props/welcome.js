import React, { useState } from "react";

function Welcome (props) {
    const [name, setName] = useState("rutvi")
    const handleClick = () => {
        setName("jayesh")
    }
return(
    <>
   <h1>Hello, {name} from {props.address} </h1>
   <h1>Address {}</h1>
   <button onClick={() => handleClick()}>Click</button>
    </>
)
}

export default Welcome