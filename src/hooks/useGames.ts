/********** ********** ********** **********/
/* @fileoverview Games
/* @author Fereshteh Rohani
/* @created 2024-04-05
/* @modified 2024-04-08
/********** ********** ********** **********/

import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
