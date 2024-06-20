import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({ selectedGenre, genreId }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenreList(res.data.results);
    });
  };
  let newGame = genreList.map((genre, index) => (
    <div
      onClick={() => {
        setActiveIndex(index);
        selectedGenre(genre.name);
        genreId(genre.id);
      }}
      key={index}
      className={`z-1 flex gap-2 p-2 items-center cursor-pointer mb-2 hover:bg-gray-300 rounded-lg dark:hover:bg-slate-500 group     
        ${
          activeIndex === index
            ? "bg-gray-300 rounded-lg dark:bg-slate-500 group font-bold"
            : null
        }`}
    >
      <img
        src={genre.image_background}
        className="z-1 w-10 h-10 object-cover rounded-lg dark:text-slate-50 group-hover:scale-105 transition-all duration-200 ease-in-out"
      />
      <h3 className="z-1 text-zinc-800 dark:text-slate-50 text-[18px] truncate ease-in-out">
        {genre.name}
      </h3>
    </div>
  ));

  return (
    <div className="fixed left-0 top-20 h-full w-60 md:w-72 bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto custom-scrollbar lg:w-64 xl:w-[20%]">
      <h3 className="text-zinc-800 text-4xl font-bold dark:text-slate-50 mb-4 sticky top-0 bg-gray-100 dark:bg-gray-900 pt-4 pb-2 z-10">
        Genres
      </h3>
      {newGame}
    </div>
  );
}

export default GenreList;
