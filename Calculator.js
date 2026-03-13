import React, { useState } from "react";
import jsPDF from "jspdf";
import VoiceAssistant from "../components/VoiceAssistant";

function Calculator() {

  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("");
  const [type, setType] = useState("basic");

  let rate = 1500;

  if (type === "standard") {
    rate = 1800;
  }

  if (type === "premium") {
    rate = 2200;
  }

  const totalCost = area * floors * rate;

  function downloadPDF() {

    const doc = new jsPDF();

    doc.text("Shree Ramjanki Construction", 20, 20);
    doc.text("Construction Cost Estimate", 20, 30);

    doc.text("Plot Area: " + area + " sq ft", 20, 50);
    doc.text("Floors: " + floors, 20, 60);
    doc.text("Material Type: " + type, 20, 70);

    doc.text("Estimated Cost: ₹" + totalCost, 20, 90);

    doc.save("construction-estimate.pdf");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>

      <h2>Construction Cost Calculator</h2>

      <br />

      <input
        type="number"
        placeholder="Plot Area (sq ft)"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Number of Floors"
        value={floors}
        onChange={(e) => setFloors(e.target.value)}
      />

      <br /><br />

      <select value={type} onChange={(e) => setType(e.target.value)}>

        <option value="basic">Basic Material</option>
        <option value="standard">Standard Material</option>
        <option value="premium">Premium Material</option>

      </select>

      <br /><br />

      <h3>Total Cost: ₹{totalCost}</h3>

      <br />

      <button onClick={downloadPDF}>
        Download Estimate PDF
      </button>

      <VoiceAssistant setArea={setArea} setFloors={setFloors} />

    </div>
  );
}

export default Calculator;