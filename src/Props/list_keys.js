import React from "react";

// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((numbers) => 
//     <li>{numbers}</li>,
//     <ul>{numbers}</ul>
// );


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key = {number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList