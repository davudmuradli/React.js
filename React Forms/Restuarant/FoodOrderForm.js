import React, { useState } from "react";

function FoodOrderForm() {
const [name,setName]= useState("")
const [phone,setPhone]= useState("")
const [adress,setAdress]= useState("")
const [order,setOrder]= useState("")

function handleSubmit(e){
e.preventDefault();
alert
(`Order Successful!
Your Ourder was ${order}
Please show your confirmation number for pickup`)
};

return(
  <form onSubmit={handleSubmit}>
   <label htmlFor="name">Your Name:</label>
    <input name="name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
  <label htmlFor="phone">Phone number:</label>
    <input name="phone" type"number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
  <label htmlFor="adress">Adress:</label>
    <input name="adress" type="text" id="adress" value={adress} onChange={(e) => setAdress(e.target.value)}/>
  <label htmlFor="order">Order:</label>
    <input name="order" type="text" id="order" value={order} onChange={(e) => setOrder(e.target.value)} />
  <button type="submit">Submit Order</button>
  </form>
);
};

export default FoodOrderForm;
