import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import OurWork from "./pages/OurWork.jsx";
import Team from "./pages/Team.jsx";
import OurProjects from "./components/OurProject.jsx";

// Google Analytics Page View Tracking
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-LQZ1Q66D33", { page_path: location.pathname });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <TrackPageView />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-we-work" element={<OurWork />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/projects" element={<OurProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
