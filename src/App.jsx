import "./App.css";
import WeatherAPI from "./components/WeatherAPI";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/LocationFiveDays";
import Navbar from "./components/Navbar";
import DifferentLocation from "./pages/DifferentLocation"
import DifferentLocation5Days from "./pages/DifferentLocation5Days";

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
            <Route path="/cities-five-days" element={<DifferentLocation5Days />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
