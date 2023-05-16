import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import LoginEtudiants from "./components/LoginEtudiants.jsx";
import LoginPs from "./components/LoginPS.jsx";
import "./components/CSS/custom-navbar.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg custom-navbar">
            <ul className="navbar-nav mx-auto" >
              <li className="nav-item">
                <Link to="/LoginEtudiants" className="nav-link">
                  Etudiants
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/LoginPS" className="nav-link">
                  Professeurs/Surveillants
                </Link>
              </li>
            </ul>
          </nav>
          <div className="container mt-4">
            <Routes>
              <Route exact path="/" element={<LoginEtudiants />} />
              <Route path="/LoginEtudiants" element={<LoginEtudiants />} />
              <Route path="/LoginPS" element={<LoginPs />} />
            </Routes>
          </div>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
