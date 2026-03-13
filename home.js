import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>

      <Navbar />

      {/* Hero Section */}

      <div style={{ textAlign: "center", marginTop: "100px" }}>

        <h1>Shree Ramjanki Construction</h1>

        <p>Build Home Build Trust</p>

        <button>Get Construction Estimate</button>

        <br /><br />

        <button>Book Site Visit</button>

      </div>


      {/* Services Section */}

      <div style={{ marginTop: "100px", textAlign: "center" }}>

        <h2>Our Services</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "30px"
          }}
        >

          <div>
            <h3>House Construction</h3>
            <p>Complete residential construction services.</p>
          </div>

          <div>
            <h3>Renovation</h3>
            <p>House renovation and remodeling work.</p>
          </div>

          <div>
            <h3>Interior Work</h3>
            <p>Tiles, painting, POP and interior finishing.</p>
          </div>

        </div>

      </div>


      {/* WhatsApp Button */}

      <a
        href="https://wa.me/919696819263"
        target="_blank"
        rel="noreferrer"
      >

        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "green",
            color: "white",
            padding: "15px",
            borderRadius: "50%",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >

          WhatsApp

        </button>

      </a>

    </div>
  );
}

export default Home;