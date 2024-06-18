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
    responsive: [
      {
        breakpoint: 1024, // large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h2 className="mt-10 font-semibold text-[26px]">Trending Games</h2>

      <div>
        <Slider {...settings}>
          {gameList.map(
            (game, index) =>
              index < 10 && (
                <div className="h-[300px] w-[80%]  md:h-[400px]  mt-5 bg-gray-300 text-black gap-40 rounded-xl overflow-hidden dark:bg-slate-500 dark:text-slate-50 hover:scale-110 transition-all duration-300 items-center">
                  <img
                    src={game.background_image}
                    className="md:w-100% md:h-[330px] object-cover text-wrap rounded-t-lg h-[250px] w-full"
                  />
                  <h3 className="px-2 py-1 rounded-b-lg overflow-hidden whitespace-nowrap text-ellipsis leading-normal text-md">
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
