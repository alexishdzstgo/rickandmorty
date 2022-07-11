import axios from 'axios';
import React, { useEffect,useState } from 'react';

const ResidentInfo = ({residents}) => {

    const [ residentCharacter,setResidentCharacter] = useState({})


    useEffect(() =>{
        axios.get(residents)
        .then(res => setResidentCharacter(res.data))
    },[])


    return (
        <div className='col-md-6'>
            <div className='card'>
                <img src={residentCharacter.image} alt="" />
                <div className='info'>
                    <p>
                        <b>{residentCharacter.name}</b>
                    </p>
                    <p>

                        <span className={residentCharacter.status == "Alive" ? "circle green": residentCharacter.status == "Dead" ? "circle red": "circle gray" } ></span>
                        {residentCharacter.status}
                    </p>
                    <p className='description'>Origin</p>
                    <p>
                    {residentCharacter.origin?.name}
                    </p>
                    <p className='description'>Episodes where appear</p>
                    <p>
                    {residentCharacter.episode?.length}
                    </p>
                </div>
            </div>

        </div>
        
        
    );
};

export default ResidentInfo;