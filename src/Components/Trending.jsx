import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Trending({ gameList }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 2652, 
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1284, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1575, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="mb-4 md:ml-20 lg:ml-0">
      <h2 className="text-zinc-800 text-[26px] font-bold dark:text-slate-50 mt-10 ml-2 flex justify-center items-center md:items-start md:justify-start">
        Trending Games
      </h2>

      <div>
        <Slider {...settings}>
          {gameList.map(
            (game, index) =>
              index < 10 && (
                <div
                  key={index}
                  className="h-[300px] md:h-[400px]  mt-5 bg-gray-300 text-black gap-40 rounded-xl overflow-hidden dark:bg-slate-800 dark:text-slate-50 hover:scale-105 transition-all duration-300 items-center cursor-pointer"
                >
                  <img
                    src={game.background_image}
                    className="md:w-100% md:h-[330px] object-cover text-wrap rounded-t-lg h-[250px] w-full"
                  />
                  <h3 className="px-2 py-1 rounded-b-lg overflow-hidden whitespace-nowrap text-ellipsis leading-normal text-[19px] text-center font-semibold">
                    {game.name}
                  </h3>
                </div>
              )
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
