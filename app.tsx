import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

// Import pages
import HomePage from "./Pages/HomePage";
import SchedulePage from "./Pages/SchedulePage";
import RoutePage from "./Pages/RoutePage";

const App: React.FC = () => {
  return (
    <Alert>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BusBooking</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedules">Schedules</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/routes">Routes</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cities
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Blantyre</Link></li>
                  <li><Link className="dropdown-item" to="/">Lilongwe</Link></li>
                  <li><Link className="dropdown-item" to="/">Mzuzu</Link></li>
                </ul>
              </li>
            </ul>

            {/* Right-side buttons */}
            <div className="d-flex">
              <Button label="Login" variant="light" className="me-2" onClick={() => alert("Login clicked")} />
              <Button label="Register" variant="warning" onClick={() => alert("Register clicked")} />
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedules" element={<SchedulePage />} />
        <Route path="/routes" element={<RoutePage />} />
      </Routes>
    </Alert>
  );
};

export default App;
