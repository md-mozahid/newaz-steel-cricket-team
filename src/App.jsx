import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Players from './components/Players'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="player-list" element={<Players />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
