import { useState } from "react";
import DefaultLogo from "../assets/img/player.jpg";
import PlayerModal from "./PlayerModal";

const Player = ({player}) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const {name, role} = player
  return (
    <>
      <div className="">
        <div
          className="flex items-center justify-center flex-col cursor-pointer"
          onClick={openModal}
        >
          <img
            className="w-36 h-36 rounded-full"
            src={DefaultLogo}
            alt="image"
          />
          <h3 className="uppercase text-lg">{name}</h3>
          <h4 className="uppercase">{role}</h4>
        </div>
      </div>
      {/* modal */}
      <PlayerModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Player;
