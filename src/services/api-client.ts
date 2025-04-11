/********** ********** ********** **********/
/* @author Fereshteh Rohani
/* @created 2024-04-05
/* @modified 2024-04-05
/********** ********** ********** **********/

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "931684bd8a054bc3bfb18f905284e94f+",
  },
});