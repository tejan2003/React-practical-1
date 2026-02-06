import React from "react";
function Ternary ({isLoggedIn}) {
        return (
            <div>
                {isLoggedIn ? <h1>welcome Back</h1> : <h1>please log in</h1>}
            </div>
        );
    }
    export default Ternary;
