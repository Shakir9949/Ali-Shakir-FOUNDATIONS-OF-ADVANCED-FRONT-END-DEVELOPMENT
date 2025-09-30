// components/Story.jsx
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Story.module.css";

const STORIES = [
  {
    id: "d1",
    game: "Destiny 1",
    summary: "Guardians defend the Last City and fight the Darkness.",
    details:
      "Destiny 1 arc: rise of the Guardians, Traveler’s protection, Hive, Vex, and Darkness mysteries. Key raids: Vault of Glass, Crota’s End, King’s Fall.",
  },
  {
    id: "d2-red",
    game: "Destiny 2",
    summary: "Red War: Ghaul and the Red Legion steal the Light.",
    details:
      "Red War (2017): Commander Ghaul strips Guardians of Light. Campaign about reclaiming the Tower and their powers.",
  },
  {
    id: "d2-post",
    game: "Destiny 2",
    summary: "Post-Red War expansions expand the lore.",
    details:
      "Forsaken, Shadowkeep, Beyond Light, Witch Queen, Lightfall, Renegades (2024) — each expands Destiny’s universe.",
  },
];

export default function Story({ headingClass, descriptionClass }) {
  const [selected, setSelected] = useState(STORIES[0].id);
  const [query, setQuery] = useState("");

  const filtered = STORIES.filter(
    (s) =>
      s.game.toLowerCase().includes(query.toLowerCase()) ||
      s.summary.toLowerCase().includes(query.toLowerCase())
  );

  const current = STORIES.find((s) => s.id === selected);

  return (
    <section className={styles.storyCard}>
      <h2 className={headingClass || styles.heading}>Destiny Story Archive</h2>

      {/* Navigation Links */}
      <nav className={styles.pageNav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/destiny-main" className={styles.navLink}>Main</Link>
        <Link href="/roadmap" className={styles.navLink}>Roadmap</Link>
      </nav>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search stories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />

        <label htmlFor="storySelect">Select Story:</label>
        <select
          id="storySelect"
          className={styles.select}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {filtered.map((s) => (
            <option key={s.id} value={s.id}>
              {s.game} — {s.summary.slice(0, 40)}...
            </option>
          ))}
        </select>
      </div>

      {current ? (
        <article className={styles.storyContent}>
          <h3 className={descriptionClass || styles.gameTitle}>{current.game}</h3>
          <p className={styles.summary}><em>{current.summary}</em></p>
          <div className={styles.details}>
            <p>{current.details}</p>
          </div>
        </article>
      ) : (
        <p className={styles.muted}>No story selected. Try clearing the search.</p>
      )}
    </section>
  );
}
