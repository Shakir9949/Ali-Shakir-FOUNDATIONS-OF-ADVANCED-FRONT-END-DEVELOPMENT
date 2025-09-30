// components/Roadmap.jsx
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Roadmap.module.css";

const TIMELINE = [
  { id: 1, era: "Destiny 1", title: "Vanilla (Fall of the City)", year: "2014", details: "Destiny 1 original release, Light vs. Darkness beginnings." },
  { id: 2, era: "Destiny 2", title: "Red War", year: "2017", details: "Red War story: Ghaul, the Cabal Red Legion attacks the Last City." },
  { id: 3, era: "Destiny 2", title: "Curse of Osiris & Warmind", year: "2017-2018", details: "Early DLC focusing on the Infinite Forest and Rasputin." },
  { id: 4, era: "Destiny 2", title: "Forsaken", year: "2018", details: "Major revamp: Gambit, new story, and changes to loot systems." },
  { id: 5, era: "Destiny 2", title: "Renegades", year: "2024", details: "Later campaign content and dramatic narrative changes." }
];

export default function Roadmap() {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const eras = ["All", ...Array.from(new Set(TIMELINE.map((t) => t.era)))];
  const visible = TIMELINE.filter((item) => (filter === "All" ? true : item.era === filter));

  return (
    <section className={styles.roadmapCard}>
      <h2 className={styles.heading}>Destiny Roadmap</h2>

      {/* Page Navigation */}
      <nav className={styles.pageNav}>
        <Link href="/destiny-main" className={styles.navLink}>Main</Link>
        <Link href="/story" className={styles.navLink}>Story</Link>
      </nav>

      <div className={styles.controls}>
        <label htmlFor="eraFilter">Filter Era:</label>
        <select id="eraFilter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          {eras.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
      </div>

      <ul className={styles.timeline}>
        {visible.map((item) => (
          <li key={item.id} className={`${styles.timelineItem} ${expandedId === item.id ? styles.expanded : ""}`}>
            <div className={styles.timelineHead}>
              <div>
                <strong>{item.title}</strong> <span className={styles.muted}>({item.year})</span>
              </div>
              <div>
                <button onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}>
                  {expandedId === item.id ? "Collapse" : "Expand"}
                </button>
              </div>
            </div>
            {expandedId === item.id && (
              <div className={styles.timelineBody}>
                <p>{item.details}</p>
                <small className={styles.muted}>Era: {item.era}</small>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
