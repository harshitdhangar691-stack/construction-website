import React, { useState } from "react";

function Booking(){

 const [name,setName] = useState("");
 const [phone,setPhone] = useState("");

 function submitForm(e){
  e.preventDefault();
  alert("Site visit request sent!");
 }

 return(

 <div style={{textAlign:"center",marginTop:"100px"}}>

 <h2>Book Site Visit</h2>

 <form onSubmit={submitForm}>

 <input
 placeholder="Your Name"
 onChange={(e)=>setName(e.target.value)}
 />

 <br/><br/>

 <input
 placeholder="Phone Number"
 onChange={(e)=>setPhone(e.target.value)}
 />

 <br/><br/>

 <button type="submit">
 Submit Request
 </button>

 </form>

 </div>

 )

}

export default Booking;