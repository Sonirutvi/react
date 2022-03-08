import React, { useState } from "react";
import Dialog from "./dialogg";
import FancyBorder from "./fancyborder";
import WelcomeDialog from "./dialog";
function SignUpDialog(props) {

    const [login, setLogin] = useState("")

    const handleChange = (e) => {
        setLogin(login)
    }

    const handleSignUp = () => {
        alert(`welcome abroad, ${login}!`)
    }

    return (
        <>
            <Dialog title="Mars Exploration program"
                message=" How should we refer to you?">

                <input value={login}
                    onChange={handleChange} />

                <button onClick={handleSignUp}>
                    Sign Me Up!
                </button>
                
            </Dialog>
        </>
    );
}

export default SignUpDialog