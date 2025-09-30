// components/Story.js
import { useState } from "react";
import styles from "../styles/Story.module.css";

const STORIES = [
  {
    game: "Destiny 1",
    description:
      "The Guardian rises to fight the Darkness, facing Crota, Oryx, and the SIVA threat.",
  },
  {
    game: "Destiny 2",
    description:
      "The Red War begins as Ghaul captures the Traveler, and Guardians must reclaim their Light.",
  },
];

export default function Story() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className={styles.story}>
      <h2 className={styles.heading}>Destiny Story</h2>
      <button className={styles.toggleBtn} onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Story" : "Show Story"}
      </button>
      {showDetails && (
        <ul className={styles.storyList}>
          {STORIES.map((entry, index) => (
            <li key={index} className={styles.storyItem}>
              <h3>{entry.game}</h3>
              <p>{entry.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}