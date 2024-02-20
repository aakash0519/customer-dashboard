import React from 'react'

export const UserList = ({collection, editUser, deleteUser, backtoForm}) => {
    return (
    <>
    <div className='mt-5'>
    <h2>User List</h2>
    {
    collection.length !== 0 ?
        <table className='table'>
            <thead>
            <tr>
                <th>#ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                collection && (collection.map((item,i) => {
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.fn}</td>
                            <td>{item.ln}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.address}</td>
                            <td><div className='d-flex'><div className='edit' onClick={()=>editUser(item.id)}>Edit</div>&nbsp;&nbsp;&nbsp;<div className='delete' onClick={()=>deleteUser(item.id)}>Delete</div></div></td>
                        </tr>
                    )
                }))
            }
            </tbody>
        </table> : <div className='mt-4'>No List Found.</div>
    }
    <div className='btn btn-secondary mt-5' onClick={()=> backtoForm()}>Add User</div>
    </div>
    </>
  )
}
