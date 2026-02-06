import { useForm } from "react-hook-form";
function FormHook(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    return(
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <input {...register("name", {required:true})} placeholder="Name" />
            {errors.name && <p>Required</p>}
            <br></br>

            

            <input {...register("email", {required:true})} placeholder="Email" />
            {errors.email && <p>Required</p>}
            <br></br>

            

            <input type="password" {...register("password",{required:true,minLength:6})}
            placeholder="Password" />

            {errors.password?.type === "required" && <p> Password is required</p>}
             {errors.password?.type === "minLength" && <p> Min 6 chars</p>}
             <br></br>

             <button>Submit</button>
             </form>
    )
}
export default FormHook;