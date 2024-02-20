import React, { useEffect, useState } from 'react'
import { UserList } from './UserList';

export const UserAdd = () => {
    const initialState = { fn: '', ln: '', email:'', number:'', country:'', city:'', street:''}

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('Users')) ? JSON.parse(localStorage.getItem('Users')) : '');
    const [inputValue, setInputValue] = useState(initialState);
    
    function handleChange(e) {
        if(e.target.value === '') {

        } else {
            setInputValue({...inputValue, id: new Date().getTime().toString(), [e.target.id]:e.target.value})
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editU && toggle) {
            alert('yes');
        }
        if(inputValue.country !== '' && inputValue.city !== '') {
            setUser([...user, inputValue])
            document.querySelectorAll('input').forEach(inp => {
                inp.value = '';
            })
            document.querySelectorAll('select').forEach(select => {
                select.innerHTML=`<option>Select your ${select.getAttribute('id')}</option>`
            })
        } else {
            alert('Please select country and city');
        }   
    }

    const [alldata, SetAlldata] = useState('');
    const [city, setCity] = useState([]);
    const api_url = "https://countriesnow.space/api/v0.1/countries";
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        SetAlldata(data);
    }

    function getCities(e) {
        const getCity = alldata.data.filter((ct, i)=>{ 
            return ct.country === e.target.value;
        })
        setCity(getCity[0].cities);
        setInputValue({...inputValue, [e.target.id]:e.target.value})
    }

    /* Edit form data */
    const[editU, setEditU] = useState([]);
    const[toggle, setToggle] = useState(false)
    function editUser(e) {
        const getuser = user.filter(edit => {
            return edit.id === e;
        })
        //setUser(getuser[0]);
        setEditU(e);
        setToggle(true);
    }


    useEffect(()=> {
        getapi(api_url);
        localStorage.setItem('Users', JSON.stringify(user));
    }, [user])
  return (
    <>
        <h2 className='py-3'>Add User</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group pb-2">
                <label htmlFor="firstname">First Name</label>
                {
                editU ? (<input value={editU.fn} type="text" className="form-control" id="fn" onChange={handleChange} required />):(<input type="text" className="form-control" id="fn" onChange={handleChange} required />)
                }
            </div>
            <div className="form-group pb-2">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="form-control" id="ln" onChange={handleChange} required />
            </div>
            <div className="form-group pb-2">
                <label htmlFor="lastname">Email</label>
                <input type="email" className="form-control" id="email" onChange={handleChange} required />
            </div>
            <div className="form-group pb-2">
                <label htmlFor="lastname">Phone Number</label>
                <input type="number" className="form-control" id="number" onChange={handleChange} required />
            </div>
            <div className="form-group pb-2">
                <label htmlFor="lastname">Country</label>
                <select className="form-select" onChange={getCities} id="country" required>
                    <option selected hidden disabled>Select your country</option>
                    {
                        alldata && alldata.data.map((co, i) => 
                            <option key={i}>{co.country}</option>    
                        )
                    }
                </select>
            </div>
            <div className="form-group pb-2">
                <label htmlFor="lastname">Cities</label>
                <select className="form-select" id="city" onChange={handleChange} required>
                    <option selected hidden disabled>Select your city</option>
                    {
                        city && city.map((ct, i) => 
                            <option key={i}>{ct}</option>
                        )
                    }
                </select>
            </div>
            <div className="form-group pb-2">
                <label htmlFor="lastname">Street Address</label>
                <input type="text" className="form-control" id="street" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
        <UserList user={user} editUser={editUser} />
    </>
  )
}
