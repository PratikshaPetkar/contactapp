import React ,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";

export default function EditContact() {
    let {id}=useParams()
    let navigate=useNavigate()
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [city, setcity] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")

    useEffect(() => {
      fetch(`http://localhost:3004/contacts/${id}`)
    .then(response =>response.json())
    .then(data =>{
        // console.log(data);
        setfname(data.fname)
        setlname(data.lname)
        setemail(data.email)
        setcity(data.city)
        setphone(data.phone)
    })
      
    }, [])

    const editContact = () => {
        // console.log(contact);
        fetch(`http://localhost:3004/contacts/${id}`,{
          method:"PUT",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({fname,lname,city,email,phone})
        })
       navigate("/")
      };
    
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" replace/>;
      }
    
  return (
    // <div>EditContact
    //    {/* <h1>id is  {id}</h1>
    //    <p>name is {name}</p> */}

    // </div>
    <div className='container mt-2'>
    <div className='row'>
        <div className='col-md-4 offset-md-4'>
            <div className='mb-2'>
                <input type="text" value={fname} onChange={(e)=>setfname(e.target.value)} className='form-control' placeholder='First Name'/>
            </div>
            <div className='mb-2'>
                <input type="text" value={lname}  onChange={(e)=>setlname(e.target.value)} className='form-control' placeholder='Last Name'/>
            </div>
            <div className='mb-2'>
                <input type="text" value={city}  onChange={(e)=>setcity(e.target.value)} className='form-control' placeholder='City'/>
            </div>
            <div className='mb-2'>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className='form-control' placeholder='Email'/>
            </div>
            <div className='mb-2'>
                <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} className='form-control' placeholder='Phone'/>
            </div>
            <div className='mb-2'>
                <button data-testid="BtnSubmit" className='btn btn-success col-12' onClick={editContact}>Edit Contact</button>
            </div>

        </div>

    </div>

   </div>
  )
}
