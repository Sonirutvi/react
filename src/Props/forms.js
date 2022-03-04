import React, { useState } from "react";

function MyForm(){
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const handleClick = (event) => {
       
    }

return(
    <>
    <form onSubmit={() => handleClick()}>
        <label> Enter your First name:
            <input type="text" 
            value={fname} 
            onChange={(e) => setFname(e.target.value)} />
        </label>
        <br/>
        <br/>
        <label>
            Enter your Last name:
            <input type="text" 
            value={lname} 
            onChange={(e) => setLname(e.target.value)} />
        </label>
        <br/><br/>
        <label> 
            Enter your address:
            <textarea/>
        </label>
        <br/><br/>
        <label> 
            Gender:
            <input type= "radio" name="gender" id ="html" value = "html"></input>
            <label for = "html" >Male</label>
            <input type= "radio" name="gender" id ="html" value = "html"></input>
            <label for = "html">Female</label>
        </label>
        <br/><br/>
        <label>
        <input type="submit"></input>
        </label>
    </form>
    </>
) 

}

export default MyForm