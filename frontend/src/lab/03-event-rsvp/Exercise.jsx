import './styles.css'
import {useState} from "react";

const Exercise = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return(
    <div className="container">
      <div className="form-card">
        <h1>Event RSVP</h1>
        <p>Please fill out the form to confirm your attendance.</p>

        <form>
          <label>
            Name
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Number of attendees
            <input type="number" min="1" required />
          </label>

          <label>
            Dietary preferences
            <input type="text" />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" />
            Bringing additional guests
          </label>

          <button type="submit">Submit RSVP</button>
        </form>
      </div>
    </div>
  );
};

export default Exercise;
