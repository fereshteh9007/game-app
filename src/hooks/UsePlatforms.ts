/********** ********** ********** **********/
/* @fileoverview Platforms
/* @author Fereshteh Rohani
/* @created 2024-04-08
/* @modified 2024-04-08
/********** ********** ********** **********/

// import useData from "./useData";
import platforms from "@/data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
