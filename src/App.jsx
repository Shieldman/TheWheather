import "./App.css";
import WeatherAPI from "./components/WeatherAPI";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
