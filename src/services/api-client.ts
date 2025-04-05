/********** ********** ********** **********/
/* @fileoverview API-Client
/* @author Fereshteh Rohani
/* @created 2024-04-05
/* @modified 2024-04-05
/********** ********** ********** **********/

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89d461f8d5f94b2191e913932d3ba269",
  },
});