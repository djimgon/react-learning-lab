import './styles.css'
import { useState } from "react";

const Exercise = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div id="toggle-container">
      <button id="toggle-button">Message</button>
      { isVisible && <p id="message">I love freeCodeCamp!</p> }
    </div>
  );
};

export default Exercise;
