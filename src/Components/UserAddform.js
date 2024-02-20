import React from 'react'

const UserAddform = ({handleSubmit, formData, handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className='mt-5'>
        <h2 className='pb-3'>Add User</h2>
        <div className="form-group pb-2">
            <label htmlFor="firstname">First Name</label>
            <input value={formData.fn} type="text" className="form-control" id="fn" onChange={handleChange} required />
        </div>
        <div className="form-group pb-2">
            <label htmlFor="lastname">Last Name</label>
            <input value={formData.ln} type="text" className="form-control" id="ln" onChange={handleChange} required />
        </div>
        <div className="form-group pb-2">
            <label htmlFor="lastname">Email</label>
            <input value={formData.email} type="text" className="form-control" id="email" onChange={handleChange} required />
        </div>
        <div className="form-group pb-2">
            <label htmlFor="lastname">Phone Number</label>
            <input value={formData.number} type="number" className="form-control" id="number" onChange={handleChange} required />
        </div>
        <div className="form-group pb-2">
            <label htmlFor="lastname">Address</label>
            <textarea value={formData.address} type="text" className="form-control" id="address" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
    </form>
  )
}

export default UserAddform