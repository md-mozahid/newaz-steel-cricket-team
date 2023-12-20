import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between border-b pb-5 px-3">
        <h2 className="text-2xl">Logo</h2>
        <ul className="flex items-center space-x-5 uppercase">
          <li className="text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-2xl">
            <Link to="player-list">Player List</Link>
          </li>
          <li className="text-2xl">
            <Link to="xl">Support Staff</Link>
          </li>
        </ul>
        <h2 className="text-2xl cursor-pointer">Login</h2>
      </div>
    </>
  );
};

export default Navbar;
