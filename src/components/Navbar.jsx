import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between border-b pb-2 md:pb-5 px-3">
        <h2 className="md:text-xl uppercase">Logo</h2>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-5 uppercase">
            <li className="md:text-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="md:text-xl">
              <Link to="player-list">Player List</Link>
            </li>
            <li className="md:text-xl">
              <Link to="xl">Support Staff</Link>
            </li>
          </ul>
        </div>
        <h2 className="md:text-xl cursor-pointer uppercase">Login</h2>
      </div>
    </>
  )
}

export default Navbar
