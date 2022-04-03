import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Favorites from "../components/Favorites/Favorites";
import { useState } from "react";
import "../index.scss";

const FavoritePage = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeThemeHandler = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className={darkTheme ? "dark" : "bright"}>
        <button onClick={changeThemeHandler} className="theme-button">
          Dark / Bright
        </button>
        <Favorites />
      </div>
    </>
  );
};

export default FavoritePage;
