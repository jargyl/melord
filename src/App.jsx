import { AudioGallery } from "./components/AudioGallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Licensing from "./components/Licensing";
import Navbar from "./components/Navbar";
import { Store } from "./components/Store";

function App() {
  return (
    <div className="container">
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
