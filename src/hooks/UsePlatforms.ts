/********** ********** ********** **********/
/* @fileoverview Platforms
/* @author Fereshteh Rohani
/* @created 2024-04-08
/* @modified 2024-04-08
/********** ********** ********** **********/

import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
