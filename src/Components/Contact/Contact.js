import React from "react";
import { Link } from "react-router-dom";

export default function Contact(props) {
  const DeleteContactHandeller = (id) => {
    // console.log(id);
    props.DeleteContact(id)

  };
  return (
    <div className="card mt-3">
      <div className="card-body">
        <Link to={`/edit/${props.id}`}><i className="fa-solid fa-user-pen text-warning float-end fa-lg"></i></Link>
      
        <i
          className="fa-solid fa-trash-can text-danger float-end fa-lg"
          onClick={DeleteContactHandeller.bind(this, props.id)}
        ></i>
        <h5 className="card-title">
          {props.fname} {props.lname}
        </h5>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.city}</p>
        <p className="card-text">{props.phone}</p>
      </div>
    </div>
  );
}
