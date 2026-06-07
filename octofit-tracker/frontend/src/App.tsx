import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p>Welcome to the OctoFit Tracker frontend.</p>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h1>About</h1>
      <p>Track workouts, teams, and leaderboards in a modern React app.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit
          </Link>
          <div>
            <Link className="nav-link text-white d-inline-block me-3" to="/">
              Home
            </Link>
            <Link className="nav-link text-white d-inline-block" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
