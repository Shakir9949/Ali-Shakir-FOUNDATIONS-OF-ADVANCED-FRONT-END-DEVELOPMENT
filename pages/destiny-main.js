import Navbar from "@/components/Navbar";
import DestinyMain from "@/components/DestinyMain";

export default function DestinyMainPage() {
  return (
    <>
      <Navbar /> {/* Navbar added for seamless navigation */}

      <main style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <DestinyMain heading="Destiny Main Page" />
      </main>
    </>
  );
}
