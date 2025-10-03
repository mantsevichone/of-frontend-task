import { Routes, Route, Navigate } from "react-router";


import "./App.css";
import { Dashboard, Events } from "./routes";
import { Header } from "./components/header";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
