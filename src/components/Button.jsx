import React, { useCallback } from "react";

function Button({onClick}){
        console.log("Button rendered");
    return <button onClick={onClick}>Click Me</button>;
}
export default React.memo(Button);