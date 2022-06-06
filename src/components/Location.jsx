import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import image3 from '../assets/images/image3.svg'

const Location = () => {

    const [location, setLocation] = useState({})
    const [id, setId]  = useState("")

    useEffect(() =>{
        const random = Math.floor(Math.random() * 125) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => setLocation(res.data) )  
    },[])

    const searchLocation = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocation(res.data))
    }
     
    return (
        <div className='background' >
            <div className='banner'>
            </div>
            <div className='container'>
                <h1>Rick and Morty Wiki</h1>
                <div className='search'>
                    <input type="text" onChange={e => setId(e.target.value)} value={id} className="inputText" placeholder='Type a location'/>
                    <button  onClick={searchLocation} className="btn">Search</button>
                </div>
                <div>
                <h2 className='text-center'>{location.name}</h2>
                    <div  className='row'>
                        
                        <div className='col-sm-4 text-center'>
                            <b>Type: </b>
                            {location.type}
                        </div>
                        <div className='col-sm-4 text-center'>
                            <b>Dimension: </b>
                            {location.dimension}
                        </div>
                        <div className='col-sm-4 text-center'>
                            <b>Residents: </b>
                            {location.residents?.length}
                        </div>
                    </div>
                </div>
                <h3>Residents</h3>
                <div className='row'>
                {location.residents?.map( residents => (
                            <ResidentInfo residents={residents} key={residents}/>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Location;