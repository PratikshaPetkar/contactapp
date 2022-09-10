import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a data-testid="brandname" className="navbar-brand" href="#">
            Contact Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
               
              </li>
              <li>
              {/* <a className="nav-link " aria-current="page" href="/addcontact">
                Add contact
                </a> */}
                <Link className="nav-link " aria-current="page" to="/addcontact">Add contact</Link>
              </li>
              <li>
              
                <Link className="nav-link " aria-current="page" to="/news">News</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/login">
                  Login
                </a> */}
                 <Link className="nav-link activ" aria-current="page" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/register">
                  Register
                </a> */}
                 <Link className="nav-link " aria-current="page" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
