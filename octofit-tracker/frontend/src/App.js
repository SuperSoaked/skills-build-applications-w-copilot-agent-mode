import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import octofitLogo from './assets/octofitapp-small.png';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow rounded">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={octofitLogo} alt="OctoFit Logo" style={{ height: 48, marginRight: 12, background: '#fff', borderRadius: 8, padding: 2 }} />
          <span style={{ fontWeight: 700, fontSize: 24, color: '#fff' }}>OctoFit Tracker</span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link text-light" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/leaderboard">Leaderboard</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/teams">Teams</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/users">Users</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/workouts">Workouts</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div>Welcome to OctoFit Tracker! Use the navigation menu.</div>} />
      </Routes>
    </div>
  );
}

export default App;
