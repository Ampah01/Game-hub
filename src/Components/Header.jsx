import React, { useContext } from "react";
import logo from "./../assets/images/logo.png";
import { HiOutlineSearch, HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  //i imported a javaScript object thats why its in curly bracket
  const { theme, setTheme } = useContext(ThemeContext);
  0;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between px-4 py-3 md:py-4 h-[70px] lg:h-[100px] mb-4 md:mb-0">
      <img src={logo} alt="" width={60} height={60} className="mr-1" />
      <div className="dark:bg-slate-500  bg-slate-200 flex w-full p-2 items-center mx-5 rounded-full">
        <HiOutlineSearch className="text-gray-700 text-lg" />
        <input
          type="text"
          className="dark:text-slate-50 text-gray-700 w-full placeholder:italic outline-none border-black bg-transparent px-2"
          placeholder="Search game here..."
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 rounded-full p-1 cursor-pointer text-slate-900"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 rounded-full p-1 cursor-pointer text-slate-900"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
