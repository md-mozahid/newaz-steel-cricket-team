import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAlignJustify, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between border-b pb-2 md:pb-5 px-3">
          <div className="cursor-pointer z-30 relative md:hidden">
            <FaAlignJustify onClick={() => setToggle(true)} />
            {toggle && (
              <div className="fixed top-0 bottom-0 left-0 z-10 p-4 w-[50%] h-[100vh] flex items-end justify-end flex-col bg-slate-700">
                <FaXmark onClick={() => setToggle(false)} className='text-2xl text-rose-500' />
                <ul className="h-full w-full flex flex-col items-start justify-start mt-12 space-y-4 uppercase">
                  <li className="md:text-xl">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="md:text-xl">
                    <Link to="player-list">Player List</Link>
                  </li>
                  <li className="md:text-xl">
                    <Link to="staff-list">Support Staff</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
                <Link to="staff-list">Support Staff</Link>
              </li>
            </ul>
          </div>
          <h2 className="md:text-xl cursor-pointer uppercase">Login</h2>
        </nav>
      </div>
    </>
  )
}

export default Navbar
