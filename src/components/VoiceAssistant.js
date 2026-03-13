import React from "react";

function VoiceAssistant({ setArea, setFloors }) {

  function startListening() {

    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = "en-IN";

    recognition.onresult = function (event) {

      const text = event.results[0][0].transcript.toLowerCase();

      alert("You said: " + text);

      const numbers = text.match(/\d+/g);

      if (numbers && numbers.length >= 1) {
        setArea(numbers[0]);
      }

      if (numbers && numbers.length >= 2) {
        setFloors(numbers[1]);
      }

    };

    recognition.start();
  }

  return (
    <button
      onClick={startListening}
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        background: "#111",
        color: "white",
        padding: "16px",
        borderRadius: "50%",
        border: "none",
        fontSize: "20px",
        cursor: "pointer"
      }}
    >
      🎤
    </button>
  );
}

export default VoiceAssistant;