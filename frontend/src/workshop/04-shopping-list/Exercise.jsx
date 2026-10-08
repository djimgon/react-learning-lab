import './styles.css'
import {useState} from "react";

const Exercise = () => {
  const items = [
    "Apples",
    "Bananas",
    "Strawberries",
    "Blueberries",
    "Mangoes",
    "Pineapple",
    "Lettuce",
    "Broccoli",
    "Paper Towels",
    "Dish Soap"
  ];

  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p id="search-description">Type to filter the list below:</p>
        <ul>
          {
            filteredItems.map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </form>
    </div>
  );
};

export default Exercise;
