import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import './Home.css';

export default function Successpayment() {
  return (
    <div className='paymentsuccess'>
        <div className="successlogo"><FaCheckCircle /></div>
        <div className="succcesstext">Thankyou for Ordering</div>
    </div>
  )
}
