import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AddContact from "../AddContact/AddContact";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/contacts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setcontacts(data);
      });
  }, []);

  // const addContactFunction = (contact) => {
  //   // console.log(contact);
  //   fetch("http://localhost:3004/contacts",{
  //     method:"POST",
  //     headers:{
  //       "Content-type":"application/json"
  //     },
  //     body:JSON.stringify(contact)
  //   })

  //   setcontacts([...contacts,contact]) //spread operator
  // };

  const DeleteContactFunction=(id)=>{
    console.log(id);
    let filteredContacts=contacts.filter(x=>x.id!==id)
    console.log(filteredContacts);
    fetch(`http://localhost:3004/contacts/${id}`,{
      method:"DELETE"
    })
    setcontacts(filteredContacts)
  }

  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace/>;
  }

  return (
    <div>
      {/* <AddContact contactEvent={addContactFunction} /> */}
      <div className="container">
        <div className="row">
        <div className="col-md-4">
        <h2 id="heading">Contact List</h2>
          {contacts.map((item) => (
            <Contact
            DeleteContact={DeleteContactFunction}
            id={item.id}
              key={item.id}
              fname={item.fname}
              lname={item.lname}
              email={item.email}
              phone={item.phone}
              city={item.city}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
