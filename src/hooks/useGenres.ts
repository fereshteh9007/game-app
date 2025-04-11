/********** ********** ********** **********/
/* @fileoverview Genres
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-07
/********** ********** ********** **********/

// import useData from "./useData";
import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: false, error: null});

export default useGenres;
