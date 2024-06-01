// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home";
import { Simulation } from "./pages/Simulation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
