// import React from 'react';
// import { FaGooglePay, FaCopy } from 'react-icons/fa';
// import './Payments.css';

// const Payments = () => {
//   const copyToClipboard = () => {
//     const phoneNumber = document.querySelector('.phone-number');
//     const textArea = document.createElement('textarea');
//     textArea.value = phoneNumber.textContent;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textArea);
//   };

//   return (
//     <div className='paymentsDiv'>
//       <h2>Gpay to this number</h2>
//       <div className='contentInPayment'>
//         <FaGooglePay className='gpaylog' size={50} />
//         <h3 className='phone-number'>94003 60949</h3>
//         <FaCopy className='copyIcon' size={30} onClick={copyToClipboard} />
//       </div>
//     </div>
//   );
// }

// export default Payments;



import React, { useState } from 'react';
import { FaGooglePay, FaCopy, FaCheck } from 'react-icons/fa';
import './Payments.css';

const Payments = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const phoneNumber = document.querySelector('.phone-number');
    const textArea = document.createElement('textarea');
    textArea.value = phoneNumber.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopied(true);

    // Reset the copied state after 10 seconds
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <div className='paymentsDiv'>
      <h2>Gpay to this number</h2>
      <div className='contentInPayment'>
        <FaGooglePay className='gpaylog' size={50} />
        <h3 className='phone-number'>94003 60949</h3>
        {copied ? (
          <FaCheck className='copyIcon' size={30} />
        ) : (
          <FaCopy className='copyIcon' size={30} onClick={copyToClipboard} />
        )}
      </div>
    </div>
  );
};

export default Payments;
