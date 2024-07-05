import React, { useEffect, useState } from 'react'

import background from "./image.jpg";

import { useParams } from 'react-router-dom';

import axios from 'axios';
import DocReviews from './DocReviews';

function ViewDoc() {

  const { id } = useParams()

  const [docDetails, setDocDetails] = useState({})

  const base_url = "https://doctor-backend-499q.onrender.com/doctors"

  const fetchDocDetails = async () => {
    const result = await axios.get(`${base_url}/${id}`)
    setDocDetails(result.data)
    console.log("ID : " + id);
    console.log(result.data);
  }

  useEffect(() => {
    fetchDocDetails()
  }, [])

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className='m-5 pt-5 pb-4 px-5 rounded-5 shadow' style={{ backgroundColor: 'rgba(189, 221, 248, .90)' }}>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='text-center rounded-5 shadow me-5 p-3' style={{ backgroundColor: 'rgba(189, 221, 248, .90)' }}>
            <h1 className='text-primary'>{docDetails.hospital}</h1>
            <h4>{docDetails.name} ({docDetails.specialty})</h4>
            <h6>Phone : {docDetails.phone}</h6>
          </div>
          <div>
            <p>Location : {docDetails.address}</p>
            <p>Available time : {docDetails.available_hours}</p>
            <p>Email : {docDetails.email}</p>
            <hr />
            <p className='text-center'><strong>Available days :</strong></p>
            <p className='text-center'>
              {docDetails && docDetails.available_days && docDetails.available_days.map((dis, index) => (
                <span key={dis}>
                  {dis}
                  {index !== docDetails.available_days.length - 1 && ' | '}
                </span>
              ))}
            </p>
          </div>
        </div>
        <hr />
        <h5 className='pt-1'><strong>Reviews :</strong></h5>
        <DocReviews reviews={docDetails.reviews} />
      </div>
    </div>
  )
}

export default ViewDoc