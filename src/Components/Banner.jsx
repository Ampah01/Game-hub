function Banner({ gameBanner }) {
  return (
    <div className="relative mt-40 md:ml-20 lg:ml-0">
      <div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-slate-900 to-transparent">
        <h3 className="text-slate-50 font-bold text-[20px] md:text-[26px]">
          {gameBanner.name}
        </h3>
        <button className="text-white text-[17px] font-semibold py-1 px-3 bg-blue-500 rounded-lg">
          Get now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className="h-[200px] md:h-[320px] lg:h-[400px] rounded-lg w-full object-cover"
      />
    </div>
  );
}

export default Banner;
