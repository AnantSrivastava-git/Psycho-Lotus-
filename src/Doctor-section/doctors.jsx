import React from 'react'
import './doctors.css'
import Doctorcard from './DoctorCard/doctorcard'
function Doctors() {
  return (
    <div className='doc-section'>
      <h3 id="header">Feeling lonely, depressed… and it’s getting hard to carry it all alone?</h3>
      <h4>You don’t have to keep it inside. Talking to a friend or family memeber or maybe a professional could be the first small step toward feeling better.</h4>
      <div className="path">
        <ol>
          <li><p>Talk to friends (Don’t isolate)</p></li>
          <li><p>Build a Micro-Routine (Control in chaos)</p></li>
          <li><p>Nourish the Brain (Move, sleep, fuel)</p></li>
          <li><p>Start a Thought Journal (Name it, don’t shame it)</p></li>
          <li><p>Consult a helper (Only if all previous steps fail)</p></li>

        </ol>
      </div>
      <div className='Doctor-Cards'>
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
      </div>
    </div>
  )
}

export default Doctors