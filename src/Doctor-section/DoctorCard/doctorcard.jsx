import React from 'react'
import { useState } from 'react'
import './doctorcard.css'

function Doctorcard () {
  const doctor_name = "Rodrigo Trindade"
  const type_of = "Neuro-Psychologist"
  const expert_of ="PST"
  return (
    <div className='doc-card'>
        {/* <h3>Doctorcard</h3> */}
        <div className="image">
          <div className="overlay"></div>
          <img className='img' src='/pictures/doctor.png' alt="doctor-Rodrigo Trindade" />
        </div>
        {/* <div className='color-adjuster'></div> */}
        <div className='crd-contnt'>
          <h3>{doctor_name}</h3>
          <p>{type_of}</p>
          <p>Expert in {expert_of} cases</p>
          <button>Verified</button>
        </div>
    </div>

  )
}

export default Doctorcard