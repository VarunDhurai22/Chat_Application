import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
function Login() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };
        //console.log(userInfo);
        axios.post("http://localhost:4002/user/login", userInfo)
        .then((response) => {
            console.log(response.data);
            if(response.data) {
                alert("Login successfull");
            }
            localStorage.setItem("ChatApp",JSON.stringify(response.data));
        })
        .catch((error) => {
            if(error.response) {
                alert("Error: "+error.response.data.error)
            }
        });
      };
  return (
    <>
       <div className="flex h-screen items-center justify-center">
         <form onSubmit={handleSubmit(onSubmit)} className="border border-white px-6 py-2 rounded-md space-y-3 w-96">
            <h1 className="text-2xl text-center">
            chat<span className="text-green-500 font-semibold">App</span>
            </h1>
            <h2 className="text-xl text-white font-bold">Login</h2>
            <br />

            {/* Email */}
            <label className="input input-bordered flex items-center gap-2">
             <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             fill="currentColor"
             className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
             </svg>
            <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
            </label>
            {errors.email && <span className="text-red-500 text-sm font-semibold">This field is required</span>}
            {/* password */}
            <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder="password" {...register("password", { required: true })} />
</label>
{errors.password && <span className="text-red-500 text-sm font-semibold">This field is required</span>}

         {/* Text & Button */}
         <div className="flex justify-between">
            <p>New user?
                <span className="text-blue-500 underline cursor-pointer ml-1">Signup</span>
            </p>
            <input type="submit" value="Login" className="text-white bg-green-500 px-2 py-1 cursor-pointer rounded-lg"/>
         </div>
         </form>
       </div>   
    </>
  )
}

export default Login;