import React, {useState} from 'react';
// import './App.css';
import ProductInput from './Components/ProductInput/ProductInput';

export default function App1() {

  const [customerName,setCustomerName]=useState('')

  const nameInput=(event)=>{

    // const name=event.target.value
    setCustomerName(event.target.value)
    console.log(customerName)
  }
  return (
    <div>
      <h3>Billing form</h3>
      <h5>Customer Name</h5>
      <input type="text" value={customerName} onChange={nameInput}/>
      <hr/>
      <ProductInput />
    </div>
  );
}
