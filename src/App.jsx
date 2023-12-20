import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./components/Players";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="text-white p-10 bg-gradient-to-r from-sky-500  to-emerald-500 ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="player-list" element={<Players />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
