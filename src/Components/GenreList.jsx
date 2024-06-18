import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList() {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      console.log(res.data.results);
      setGenreList(res.data.results);
    });
  };
  let newGame = genreList.map((genre, index) => (
        
    <div
      onClick={() => {
        setActiveIndex(index);
      }}
      key={index}
      className={`flex gap-2 p-2 items-center cursor-pointer mb-2 hover:bg-gray-300 rounded-lg dark:hover:bg-slate-500 group     
        ${
          activeIndex === index
            ? "bg-gray-300 rounded-lg dark:bg-slate-500 group font-bold"
            : null
        }`}
    >
      <img
        src={genre.image_background}
        className="w-10 h-10 object-cover rounded-lg dark:text-slate-50 group-hover:scale-105 transition-all duration-200 ease-in-out"
      />
      <h3 className="text-zinc-800 dark:text-slate-50 text-[18px] truncate  ease-in-out">
        {genre.name}
      </h3>
    </div>
  ));

  return (
    <div>
      <h1 className="text-zinc-800 text-4xl font-bold dark:text-slate-50 mb-2">
        Genres
      </h1>
      {newGame}
    </div>
  );
}

export default GenreList;
