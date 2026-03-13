import React from "react";

function Navbar() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"15px",
      background:"#1f2937",
      color:"white"
    }}>
      <h2>SRC Construction</h2>

      <div>
        <span style={{marginRight:"20px"}}>Home</span>
        <span style={{marginRight:"20px"}}>Services</span>
        <span style={{marginRight:"20px"}}>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default Navbar;