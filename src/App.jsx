import Nav from './components/Nav.jsx';
import Hero from './sections/Hero.jsx';
import SelectedWork from './sections/SelectedWork.jsx';
import Services from './sections/Services.jsx';
import NoteFromJo from './sections/NoteFromJo.jsx';
import Direction from './sections/Direction.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <SelectedWork />
        <Services />
        <NoteFromJo />
        <Direction />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
