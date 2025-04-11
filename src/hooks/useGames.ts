/********** ********** ********** **********/
/* @fileoverview Games
/* @author Fereshteh Rohani
/* @created 2024-04-05
/* @modified 2024-04-10
/********** ********** ********** **********/

import { GameQuery } from "@/App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>(
  '/games',
  { params:
    { genres: gameQuery.genre?.id,
      platform: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder
    }},
  [gameQuery]);

export default useGames;
