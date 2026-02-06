import { useState, useActionState, useCallback } from "react";
import Button from "./Button";

function ParentComponent (){
    const [count,setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    },[]);
    return (
        <>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>
            Increment Count
        </button>
        
        <Button onClick={handleClick}/>
        </>
        
    );
}
export default ParentComponent;