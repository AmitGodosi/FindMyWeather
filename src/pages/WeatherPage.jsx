import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Main from "../components/Main/Main";
import { useState, useEffect } from "react";
import { getCityInfo } from "../apiConfig";
import "../index.scss";

const WeatherPage = () => {
  const [isValidAPI, setIsValidAPI] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    const checkAPI = async () => {
      const cityRes = await getCityInfo("Tel Aviv");
      if (cityRes?.data.length > 0) {
        setIsValidAPI(true);
      } else {
        setIsValidAPI(false);
      }
    };
    checkAPI();
  }, []);

  const changeThemeHandler = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      {isValidAPI && (
        <div className={darkTheme ? "dark" : "bright"}>
          <button onClick={changeThemeHandler} className="theme-button">
            Dark / Bright
          </button>
          <Search />
          <Main />
        </div>
      )}
      {!isValidAPI && (
        <>
          <h1 className="alertMessage">
            Oops...My API Key got expired, please notice me in the email below
            Thanks!
          </h1>
          <h3 className="alertMessage">amitgodosi1@gmail.com</h3>
        </>
      )}
    </>
  );
};

export default WeatherPage;
