import './styles.css'
import { useState, useEffect } from "react";

const Exercise = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0)

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();

    setOtp(newOtp);
    setTimeLeft(5);
  };

  useEffect(() => {
    if (timeLeft < 0) {
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft -1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft]);

  return(
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp || "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {timeLeft > 0 ? `Expires in: ${timeLeft} seconds` : ""}
      </p>
      <button id="generate-otp-button" onClick={generateOTP}>
        Generate OTP
      </button>
    </div>
  );
};

export default Exercise;
