import Player from "./Player";

import { PlayerList } from "../data/PlayerList";

const Players = () => {
  return (
    <>
      <div className="container mx-auto p-10  text-white">
        <h2 className="text-4xl text-center uppercase">Player List</h2>
        <ul className="mt-10 grid grid-cols-6 gap-y-10">
          {PlayerList.map((player) => (
            <li key={player.id}>
              <Player player={player} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Players;
