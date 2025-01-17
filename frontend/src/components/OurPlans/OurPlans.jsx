import React, { useEffect } from 'react'
import './OurPlans.css'


const OurPlans = () => {


  useEffect(() => {
    const planOne = document.querySelector('.planOne');
    planOne.classList.add('show');
  }, []);

  useEffect(() => {
    const planTwo = document.querySelector('.planTwo');
    planTwo.classList.add('show');
  }, []);




  return (
    <div className='OurPlanDiv'>
      <h2>Select any plan</h2>
      <div className="planContainer">
      <div className="planOne">
        <h4>One month plan</h4>
        <h2>49 rs</h2>
      </div>
      <div className="planTwo">
      <h4>Three month plan</h4>
      <h2>99 rs</h2>
      </div>
      </div>

    </div>
  )
}

export default OurPlans

