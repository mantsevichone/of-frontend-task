import { Routes, Route, Navigate, NavLink } from "react-router";

import "./App.css";
import { Dashboard, Events } from "./routes";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
