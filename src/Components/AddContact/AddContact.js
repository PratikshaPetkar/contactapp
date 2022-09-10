import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from "react-router-dom";


export default function AddContact(props) {
    let navigate=useNavigate()
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [city, setcity] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")

    // const addContactHandeller= ()=>{
    //     // console.log({fname,lname,city,email,phone});
    //     props.contactEvent({id:uuidv4(),fname,lname,city,email,phone})
    // }

    const addContactHandeller = () => {
        // console.log(contact);
        fetch("http://localhost:3004/contacts",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({id:uuidv4(),fname,lname,city,email,phone})
        })
       navigate("/")
      };

    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" replace/>;
      }
  return (
   <div className='container mt-2'>
    <div className='row'>
        <div className='col-md-4 offset-md-4'>
            <div className='mb-2'>
                <input  id="firstname" type="text" onChange={(e)=>setfname(e.target.value)} className='form-control' placeholder='First Name'/>
            </div>
            <div className='mb-2'>
                <input id="lastname" type="text"  onChange={(e)=>setlname(e.target.value)} className='form-control' placeholder='Last Name'/>
            </div>
            <div className='mb-2'>
                <input  id="city" type="text"  onChange={(e)=>setcity(e.target.value)} className='form-control' placeholder='City'/>
            </div>
            <div className='mb-2'>
                <input  id="email" type="text"  onChange={(e)=>setemail(e.target.value)} className='form-control' placeholder='Email'/>
            </div>
            <div className='mb-2'>
                <input  id="phone" type="text"  onChange={(e)=>setphone(e.target.value)} className='form-control' placeholder='Phone'/>
            </div>
            <div className='mb-2'>
                <button  id="btnAdd" data-testid="BtnSubmit" className='btn btn-success col-12' onClick={addContactHandeller}>Add Contact</button>
            </div>

        </div>

    </div>

   </div>
  )
}
