import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? " bg-slate-900 text-white" : null
        } min-h-[100vh]`}
      >
        <Header onSearch={setSearchQuery}/>
        <Home searchQuery={searchQuery} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
