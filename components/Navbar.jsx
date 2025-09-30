// components/Navbar.jsx
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Destiny Archive</Link>
      </div>

      <div className={styles.links}>
        <Link href="/destiny-main" className={styles.link}>Main</Link>
        <Link href="/roadmap" className={styles.link}>Roadmap</Link>
        <Link href="/story" className={styles.link}>Story</Link>
      </div>

      {/* Additional page navigation for quick access */}
      <div className={styles.quickNav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/destiny-main" className={styles.link}>Main</Link>
        <Link href="/roadmap" className={styles.link}>Roadmap</Link>
        <Link href="/story" className={styles.link}>Story</Link>
      </div>
    </nav>
  );
}