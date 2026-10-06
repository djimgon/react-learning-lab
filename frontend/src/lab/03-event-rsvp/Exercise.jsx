import './styles.css'
import {useState} from "react";

const Exercise = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [dietary, setDietary] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return(
    <div className="container">
      <div className="form-card">
        <h1>Event RSVP</h1>
        <p>Please fill out the form to confirm your attendance.</p>

        <form onSubmit={handleSubmit}>
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
            <input
              type="number"
              min="1"
              required
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
            />
          </label>

          <label>
            Dietary preferences
            <input
              type="text"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
            />
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={additionalGuests}
              onChange={(e) => setAdditionalGuests(e.target.checked)}
            />
            Bringing additional guests
          </label>

          <button
            type="submit"
            disabled={!name.trim() || !email.trim() || attendees < 1}
          >
            Submit RSVP
          </button>
        </form>
        {submitted && (
          <div className="confirmation">
            <h2>RSVP Submitted!</h2>

            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number of attendees: {attendees}</p>
            <p>Dietary preferences: {dietary || "None"}</p>
            <p>
              Bringing additional guests: {additionalGuests ? "Yes" : "No"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
