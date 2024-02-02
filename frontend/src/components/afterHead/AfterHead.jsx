import React, { useEffect }  from 'react'
import './AfterHead.css'
import Typed from 'typed.js'; 



const AfterHead = () => {


  useEffect(() => {
    // Initialize the Typed instance
    const typed = new Typed('.typed-text', {
      
      strings: ["How to join in our Community?"],
      typeSpeed: 80, // Adjust typing speed (milliseconds per character)
      backSpeed: 50,
      backDelay: 2000, // Delay before starting to backspace
      startDelay: 500, // Delay before starting to type
      showCursor: false, // Display blinking cursor
    //   cursorChar: '|', // Custom cursor character
      loop: false, // Loop the animation indefinitely
    });

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);







  return (
    <div className='mainBodyOfAfterHead'>
      <div className="mainText">
        <h1 className='typed-text'></h1>
      </div>
      <div className="mainTextTwo">
        <h1>Select your plan, make payment, complete the form, and you're done.</h1>
      </div>
    </div>
  )
}

export default AfterHead
