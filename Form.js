import React from 'react'

function form() {
  return (
    <>
    <div className="container my-16">
    <form className='form'>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input className="form-control" type="text" placeholder="Enter your Name" aria-label="default input example"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input className="form-control" type="email" placeholder="Enter your email" aria-label="default input example"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
    <input className="form-control" type="number" placeholder="Enter your phone number" aria-label="default input example"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Association office name</label>
    <input className="form-control" type="text" placeholder="Enter your Association office name" aria-label="default input example"/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Year</label>
    <input className="form-control" type="number" placeholder="Enter the yaer" aria-label="default input example"/>
  </div>


  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</>
  )
}

export default form

