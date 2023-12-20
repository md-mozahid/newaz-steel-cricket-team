import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Players from './components/Players'
import Home from './pages/Home'
import SupportStaffs from './components/SupportStaffs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="player-list" element={<Players />} />
          <Route path="staff-list" element={<SupportStaffs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
