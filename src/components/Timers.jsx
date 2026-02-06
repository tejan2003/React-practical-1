import { useEffect, useState } from "react";

function Timers(){
    const [count, setCount] = useState(0);

    useEffect(() => { setTimeout(() => {
        setCount((count) => count + 1);
    },1000);
},[]);
return<h1>I've rendered {count} timers!</h1>;
}
export default Timers;