// components/DestinyMain.jsx
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/DestinyMain.module.css";

export default function DestinyMain({ heading = "Destiny Main Page" }) {
  const [showHighlights, setShowHighlights] = useState(false);
  const [favoriteEra, setFavoriteEra] = useState("");

  function toggleHighlights() {
    setShowHighlights((prev) => !prev);
  }

  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>
        Welcome, Guardian! Explore Destiny’s rich universe: timelines, stories, and major expansions from Destiny 1 to Destiny 2.
      </p>

      {/* Page Navigation */}
      <nav className={styles.pageNav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/roadmap" className={styles.navLink}>Roadmap</Link>
        <Link href="/story" className={styles.navLink}>Story</Link>
      </nav>

      <div className={styles.controls}>
        <button className={styles.btn} onClick={toggleHighlights}>
          {showHighlights ? "Hide Highlights" : "Show Highlights"}
        </button>

        <div className={styles.favorite}>
          <label htmlFor="eraSelect">Pick your favorite Era:</label>
          <select
            id="eraSelect"
            className={styles.select}
            value={favoriteEra}
            onChange={(e) => setFavoriteEra(e.target.value)}
          >
            <option value="">-- choose --</option>
            <option value="Red War">Red War</option>
            <option value="House of Wolves">House of Wolves</option>
            <option value="Forsaken">Forsaken</option>
            <option value="Renegades">Renegades</option>
          </select>

          {favoriteEra && (
            <p className={styles.muted}>
              You selected: <strong>{favoriteEra}</strong>
            </p>
          )}
        </div>
      </div>

      {showHighlights ? (
        <div className={styles.highlights}>
          <h3>Key Highlights</h3>
          <ul>
            <li>
              <strong>Red War:</strong> The Last City under siege, Ghaul steals the Light.
            </li>
            <li>
              <strong>House of Wolves:</strong> Rise of the Fallen enemies and intricate Prison of Elders challenges.
            </li>
            <li>
              <strong>Forsaken:</strong> Revenge-driven hunt for Uldren Sov, new Gambit mode, revamped loot.
            </li>
            <li>
              <strong>Renegades:</strong> The latest campaign arc and significant story expansions.
            </li>
          </ul>
        </div>
      ) : (
        <div className={`${styles.highlights} ${styles.muted}`}>
          (Toggle highlights to view key events)
        </div>
      )}
    </section>
  );
}
