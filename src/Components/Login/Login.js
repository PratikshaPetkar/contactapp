import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
let navigate=useNavigate();
const [username, setusername] = useState("")
const [password, setpassword] = useState("")

    const LoginHandeller=()=>{
       fetch(`http://localhost:3001/auth/v1`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({username,password})
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        localStorage.setItem("token",data.token)
        navigate("/")
       })
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2 className="text-center">Login Here</h2>
          <div className="mb-2">
            <input id="username"
              className="form-control"
              type="text"
              placeholder="User Name"
              onChange={(e)=>setusername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input id="password"
              className="form-control"
              type="text"
              placeholder="Password"
              onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
           <button id="btnLogin" className="btn btn-success" onClick={LoginHandeller}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
