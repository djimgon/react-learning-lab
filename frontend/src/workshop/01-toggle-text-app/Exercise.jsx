import './styles.css'
import { useState } from "react";

const Exercise = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return (
    <div id="toggle-container">
      <button id="toggle-button" onClick={handleToggleVisibility}>Message</button>
      { isVisible && <p id="message">I love freeCodeCamp!</p> }
    </div>
  );
};

export default Exercise;
