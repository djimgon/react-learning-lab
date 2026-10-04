import './styles.css'
import { useState } from "react";

const Exercise = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search for fruits:</label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Exercise;
