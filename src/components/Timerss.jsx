import { useEffect, useState } from "react";
function Timerss(){
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!start) return;
        const timer = setInterval(() => {
            console.log("Timer running");
        },1000);

        return () => clearInterval(timer);
    },[start]);
    return(
        <>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        </>
    );
}
export default Timerss;