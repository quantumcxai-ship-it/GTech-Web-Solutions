import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Features from "./components/Features";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#e2e8f0] relative overflow-hidden">
      {/* Dynamic Background Glow Blobs for Glassmorphism pop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-300/15 blur-[120px]" />
        <div className="absolute top-[45%] right-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-300/15 blur-[120px]" />
        <div className="absolute top-[75%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-300/25 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Metrics />
        <Features />
        <About />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

export default App;
