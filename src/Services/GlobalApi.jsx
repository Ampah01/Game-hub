import axios from "axios";

const key = "5420472aa35c458f95c2a81f4114ee43";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getGameList = axiosCreate.get("/games?key=" + key);

const GameByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres" + id);

export default{getGenreList, 
              getGameList, 
              GameByGenreId
              };
