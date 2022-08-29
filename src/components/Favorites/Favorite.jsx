import classes from "./Favorite.module.scss";
import NightTime from "../../assets/night.svg";
import DayTime from "../../assets/day.svg";
import { useState, useEffect } from "react";

const Favorite = ({ isDayTime, temperature, englishName, onClick }) => {
  const [weatherImg, setWeatherImg] = useState(DayTime);

  useEffect(() => {
    if (!isDayTime) setWeatherImg(NightTime);
  }, []);

  return (
    <div onClick={onClick} className={classes.container}>
      <img src={weatherImg} />
      <p className={classes.temp}>{temperature}°c</p>
      <p className={classes.name}>{englishName}</p>
    </div>
  );
};

export default Favorite;
