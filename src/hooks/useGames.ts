/********** ********** ********** **********/
/* @fileoverview Games
/* @author Fereshteh Rohani
/* @created 2024-04-05
/* @modified 2024-04-06
/********** ********** ********** **********/

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

const useGames = () => useData<Game>('/games');

export default useGames;
