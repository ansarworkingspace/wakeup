import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutMain'>
      <h2>About</h2>
      <div className="aboutContent">
        <img src="WAKEUP_LOGO-removebg-preview.png" alt="" />
        <div className='description'>
            <h3>WAKEUP COMMUNITY</h3>
            <p>"We help individuals break out of their comfort zones and speak English. We are not a traditional teaching institute; rather, we are a community that motivates people to start up and speak English. Instead of focusing on grammar lessons, we provide activities that encourage speaking in front of other community members. We can assure you that this will have a significant impact and boost confidence among the members in our community."</p>
        </div>
      </div>
    </div>
  )
}

export default About
