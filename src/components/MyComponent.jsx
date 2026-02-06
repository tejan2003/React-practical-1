import{useState}from 'react';
function MyComponent(){
    const[count,setCount]=useState(0);
    const increment = () =>{
        setCount(count+1);
    }
    return(
        <div>
        <p>count:{count}</p>
        <button onClick={increment}>increment</button>
        </div>
    );
}
export default MyComponent;