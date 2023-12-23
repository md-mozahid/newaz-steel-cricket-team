import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import Home from "./pages/Home";
import SupportStaffs from "./components/SupportStaffs";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="player-list" element={<Players />} />
          <Route path="staff-list" element={<SupportStaffs />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
