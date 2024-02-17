// import React from 'react'
// import './Header.css'
// import DocumentScreen from '../document/DocumentScreen'

// const Header = () => {
//   return (
//     <div className='HeadermainDiv'>
//       <div className='logo'>
//       <img src="WAKEUP_LOGO-removebg-preview.png" alt="" />
//       </div>
//       <div className='LinkInHeader'>
//         <h3>Read</h3>
//       </div>
//     </div>
//   )
// }

// export default Header



import React, { useState } from 'react';
import './Header.css';
import DocumentScreen from '../document/DocumentScreen';

const Header = () => {
  const [showDocument, setShowDocument] = useState(false);

  const handleReadClick = () => {
    setShowDocument(!showDocument);
  };

  return (
    <>
    <div className='HeadermainDiv'>
      <div className='logo'>
        <img src="WAKEUP_LOGO-removebg-preview.png" alt="" />
      </div>
      <div className='LinkInHeader'>
        <h3 onClick={handleReadClick}>Read</h3>
      </div>
      
    </div>
    {showDocument && <DocumentScreen />}
    </>
  );
};

export default Header;
