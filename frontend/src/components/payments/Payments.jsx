import React from 'react';
import { FaGooglePay, FaCopy } from 'react-icons/fa';
import './Payments.css';

const Payments = () => {
  return (
    <div className='paymentsDiv'>
      <h2>Gpay to this number</h2>
      <div className='contentInPayment'>
        <FaGooglePay className='gpaylog' size={50} />
        <h3>94003 60949</h3>
        <FaCopy className='copyIcon' size={30}  />
      </div>
    </div>
  );
}

export default Payments;

