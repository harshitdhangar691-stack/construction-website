import React from "react";

function Projects() {
  return (

    <div style={{textAlign:"center", marginTop:"100px"}}>

      <h2>Our Projects</h2>

      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"30px",
        marginTop:"30px"
      }}>

        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" width="250"/>

        <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6" width="250"/>

        <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471" width="250"/>

      </div>

    </div>

  );
}

export default Projects;