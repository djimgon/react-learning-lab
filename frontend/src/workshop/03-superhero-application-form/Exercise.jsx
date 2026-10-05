import './styles.css';

import { useState } from "react";

const Exercise = () => {
  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");

  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
      <form>
        <div className="section">
          <label>Hero Name
            <input type="text" value={heroName} onChange={(e) => setHeroName(e.target.value)} />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Exercise;
