import Player from "./Player";

import { PlayersData } from "../data/PlayersData";

const Players = () => {
  return (
    <>
      <div className="container mx-auto py-10  text-white">
        <h2 className="text-4xl text-center uppercase">Player List</h2>
        <ul className="mt-10 grid md:grid-cols-6 gap-6">
          {PlayersData.map((player) => (
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
