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
        <Plan/>
        <CTA/>
      </main>
      <footer className="p-8">
        <p className="text-center text-gray-400">
          Challenge by Frontend Mentor. Coded by SG.
        </p>
         
      </footer>
    </>
  );
}

export default App;
