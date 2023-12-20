import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container p-10 mx-auto">
        <h1 className="text-center  text-5xl font-bold ">
          Newaz Steel Cricket Team
        </h1>
        <Link to="player-list">
          {/* <button className="text-3xl mt-6 px-10 py-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-500  hover:from-purple-500 hover:to-rose-500 font-semibold">
            Player List
          </button> */}
        </Link>
      </div>
    </>
  );
};

export default Home;
