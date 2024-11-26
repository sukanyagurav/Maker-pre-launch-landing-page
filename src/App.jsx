import CTA from "./components/CTA";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plan from "./components/Plan";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Features />
        <Plan />
        <CTA />
      </main>
      <footer className="p-8 text-white text-center">
        Challenge by <a href="https://www.frontendmentor.io">Frontend Mentor</a>
        . Coded by <a href="#none">SG</a>.
      </footer>
    </>
  );
}

export default App;
