import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import PlayerModal from "./PlayerModal";

const Player = ({ player }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { name, style, thumbnail } = player;
  return (
    <>
      <div className="border border-[#0c4a6e] rounded-lg p-3 relative hover:bg-sky-700">
        <div
          className="flex items-center justify-center flex-col cursor-pointer"
          onClick={openModal}
        >
          <img className="w-36 h-36 rounded-full" src={thumbnail} alt="image" />
          <h3 className="uppercase mt-3">{name}</h3>
          {/* <h4 className="uppercase">{role}</h4> */}
        </div>
        <div className="absolute top-[45%] left-[60%]">
          <img src={style} alt="" className="w-[50px] " />
        </div>
        <div className="absolute top-[40%] left-[48%] text-2xl hidden hover:visible text-rose-500">
          <BsBoxArrowUpRight />
        </div>
      </div>

      <PlayerModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        player={player}
      />
    </>
  );
};

export default Player;
