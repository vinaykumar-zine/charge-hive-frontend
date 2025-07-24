import DashboardPage from "./pages/DashboardPage"
import 'leaflet/dist/leaflet.css';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  )
}

export default App



