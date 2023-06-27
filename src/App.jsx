import "./App.css";
import WeatherAPI from "./components/WeatherAPI";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/LocationFiveDays";
import Navbar from "./components/Navbar";
import DifferentLocation from "./pages/DifferentLocation"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/cities" element={<DifferentLocation />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
