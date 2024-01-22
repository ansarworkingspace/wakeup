import React from 'react'
import './Link.css'
const Link = () => {
  return (
    <div className='Link'>
     <h2>Fill this form <span className="arrow">&#9660;</span></h2>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      Click here
      </a>
    </div>
  )
}

export default Link
