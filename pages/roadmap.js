import { useState } from "react";
import Navbar from "../components/Navbar"; // Added Navbar import
import styles from "../styles/Roadmap.module.css";

const TIMELINE = [
  { year: 2017, title: "Destiny 2: Red War", detail: "The battle against Dominus Ghaul and the Red Legion." },
  { year: 2018, title: "Forsaken (Renegades)", detail: "The death of Cayde-6 and the hunt for Uldren Sov." },
  // Add more expansions here...
];

export default function Roadmap() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar /> {/* Navbar added for seamless navigation */}

      <section className={styles.roadmap}>
        <h2 className={styles.heading}>Destiny 2 Roadmap</h2>
        <ul className={styles.timeline}>
          {TIMELINE.map((entry, index) => (
            <li
              key={index}
              className={`${styles.timelineItem} ${selected === index ? styles.active : ""}`}
              onClick={() => setSelected(index)}
            >
              <span className={styles.year}>{entry.year}</span> — {entry.title}
              {selected === index && <p className={styles.detail}>{entry.detail}</p>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
