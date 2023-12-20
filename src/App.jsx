import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./components/Players";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="text-white bg-[url('/src/assets/img/cricket-stadium.webp')] bg-no-repeat bg-cover h-screen w-full p-10">
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
