import React from "react";

function BoilingVerdict(props) {
    if (props.celsius){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

export default BoilingVerdict