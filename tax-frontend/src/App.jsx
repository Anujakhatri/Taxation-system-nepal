import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CorporateTax from "./pages/CorporateTax";
import IncomeTax from "./pages/IncomeTax";
import Login from "./pages/Login";
import TdsCalculation from "./pages/TdsCalculation";
import Vat from "./pages/Vat";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 150px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corporate-tax" element={<CorporateTax />} />
          <Route path="/income-tax" element={<IncomeTax />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tds-calculation" element={<TdsCalculation />} />
          <Route path="/vat" element={<Vat />} />
          <Route path="/tds" element={<TdsCalculation />} /> {/* Added for backwards compatibility with Dashboard links */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
