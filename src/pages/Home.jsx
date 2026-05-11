import Navbar from "../components/Navbar";
import "../App.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <section className="home-hero">
        <p className="eyebrow">Beautiful As I Am</p>
        <h1>Learn Coding Through Creativity</h1>
        <p className="hero-subtitle">
          A 3-week coding experience where students explore Scratch, build games,
          and grow confidence through technology and creativity.
        </p>
      </section>
    </div>
  );
}

export default Home;