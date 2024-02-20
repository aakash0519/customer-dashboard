import React, { useEffect, useState } from 'react'

const CountryCity = () => {
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
    }
    useEffect(()=> {
        getapi(api_url);
    }, [])

  return (
    <>
        <div className="form-group pb-2">
            <label htmlFor="lastname">Country</label>
            <select className="form-select" onChange={getCities}>
                {
                    alldata && alldata.data.map((co, i) => 
                        <option key={i}>{co.country}</option>    
                    )
                }
            </select>
        </div>
        <div className="form-group pb-2">
            <label htmlFor="lastname">Cities</label>
            <select className="form-select">
                {
                    city && city.map((ct, i) => 
                       <option key={i}>{ct}</option>
                    )
                }
            </select>
        </div>
    </>
  )
}

export default CountryCity