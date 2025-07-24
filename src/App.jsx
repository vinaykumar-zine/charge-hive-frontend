import DashboardPage from "./pages/DashboardPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App



