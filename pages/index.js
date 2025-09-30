import Head from "next/head";
import Navbar from "../components/Navbar";
import DestinyMain from "../components/DestinyMain";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Destiny Timeline App</title>
        <meta
          name="description"
          content="Destiny 1 & 2 timeline, roadmap, and story hub built with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className={styles.main}>
        <DestinyMain heading="Welcome to Destiny Archive" />
      </main>
    </>
  );
}
