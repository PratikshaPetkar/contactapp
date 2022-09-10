import React from 'react'

export default function Register() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h2 className="text-center">Register Here</h2>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="mb-2">
         <button className="btn btn-success">Register</button>
        </div>
      </div>
    </div>
  </div>
  )
}
