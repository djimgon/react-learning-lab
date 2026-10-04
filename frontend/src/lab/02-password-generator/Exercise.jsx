import './styles.css'
import { useState } from "react";

const Exercise = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0)

  return(
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        Click 'Generate OTP' to get a code
      </h2>
      <p id="otp-timer" aria-live="polite"></p>
      <button id="generate-otp-button">
        Generate OTP
      </button>
    </div>
  );
};

export default Exercise;
