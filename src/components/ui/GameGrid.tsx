/********** ********** ********** **********/
/* @fileoverview GameGrid
/* @author Fereshteh Rohani
/* @created 2024-04-05
/* @modified 2024-04-06
/********** ********** ********** **********/

import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
