import DashboardPage from "./pages/DashboardPage"
import StationLocator from "./pages/StationLocator"
import Navbar from "./components/Navbar"
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/locate" element={<StationLocator />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



