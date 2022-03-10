import React, { useState } from "react";
import useTitleCount from "./test.";

const Test = () => {

    const [count, setCount] = useState(0);

    useTitleCount(count);  //custom hook

    console.log("hello Outside");

    return(
        <>
            <h1>{count}</h1>
            <button className="btn" onClick={()=> setCount(count+1)}>Click Test &#128512;</button>
        </>
    )
}

export default Test