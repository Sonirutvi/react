import React from "react";

// function UserGreeting(props){
//     return <h1>Welcome back</h1>;
// }

//  function GuestGreeting(props) {
//      return <h1>Please sign up.</h1>
//  }
 

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn){
//         return < UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && 
            <h2>You have {unreadMessages.length} unread message.</h2>
            }
        </div>
    );
}
export default Mailbox
// export default Greeting