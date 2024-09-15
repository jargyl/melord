import { AudioGallery } from "./components/AudioGallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Licensing from "./components/Licensing";
import Navbar from "./components/Navbar";
import { Store } from "./components/Store";
import YouTube from "/src/assets/audio-gallery/youtube.svg";

function App() {
  return (
    <div className="container">
      {/* <h1 className="hero-title">
        Crafting the <span className="gradient-text">soundtrack</span> to your
        vision
      </h1>
      <div>
        <h1>
          test <span className="gradient-text">efwfe</span>
        </h1>
        <div className="subtitle-wrapper">
          <div className="subtitle-container">
            <img src={YouTube} alt="youtube" className="icon" />
            <h2>YouTube</h2>
          </div>
        </div>
        <p className="subtext">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          dolorum?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque.
        </p>
        <button className="btn btn-primary">SUBMIT</button>
        <button className="btn btn-secondary">Read full license</button>
      </div> */}
      <Navbar />
      <Hero />
      <Store />
      <Licensing />
      <AudioGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
