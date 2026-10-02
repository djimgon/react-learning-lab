import './styles.css'
import {MoodBoardItem} from "./MoodBoardItem";

export default function Exercise() {
  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#2e8b57"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Forest Escape"
        />

        <MoodBoardItem
          color="#4682b4"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Ocean View"
        />

        <MoodBoardItem
          color="#d2691e"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Santorini"
        />
      </div>
    </div>
  )
}
