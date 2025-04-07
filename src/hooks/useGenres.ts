/********** ********** ********** **********/
/* @fileoverview Genres
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-07
/********** ********** ********** **********/

import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
