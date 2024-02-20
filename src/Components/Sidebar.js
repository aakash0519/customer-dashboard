import React from 'react'
import {useNavigate} from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='sideBar mt-5'>
        <ul>
            <li onClick={()=> navigate('/user-lists')}>User List</li>
        </ul>
    </div>
  )
}

export default Sidebar