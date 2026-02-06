import { useState } from "react";

export default function Forms(){
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    });
    const [error,setError] = useState("");

    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value});


    const handleSubmit = e => {
        e.preventDefault();

        if(!data.name || !data.email || !data.msg){
            setError("All Files are Required");
        }
        if (!data.email.includes("@")){
            setError("Invalid email");
            return;
        
        }
        if(data.password.length < 6){
            setError("password too short");
            return;
        }
        setError("");
        console.log(data);};

        return (
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <br></br>
                <input name="email"  placeholder="Email" onChange={handleChange} />
                <br></br>
                <input name="password"  type="password" placeholder="Password" onChange={handleChange} />
                <br></br>
                {error && <p style={{color: "red"}}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        );
    }
    
    
