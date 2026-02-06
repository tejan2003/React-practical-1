import { useEffect } from "react";

function Timer(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Timer running");
        },1000);

        return () => {
            clearInterval(timer);
            console.log("Cleanup timer");
        };
    },[]);
    return<h2>check  console for timer logs</h2>;
}
export default Timer;