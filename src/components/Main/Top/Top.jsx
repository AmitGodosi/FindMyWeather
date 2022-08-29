import classes from "./Top.module.scss";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import DayTime from "../../../assets/day.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NightTime from "../../../assets/night.svg";

const Top = () => {
  const [timeImg, setTimeImg] = useState(DayTime);
  const [isFavorite, setIsFavorite] = useState(false);
  const cityInfo = useSelector((state) => state.cityInfo);
  const currentWeather = useSelector((state) => state.currentWeather);
  const { IsDayTime, WeatherIcon } = currentWeather;
  const { EnglishName } = cityInfo;
  const temperature = currentWeather?.Temperature?.Metric?.Value.toFixed(0);

  useEffect(() => {
    const res = localStorage.getItem("favorite");
    const favorites = JSON.parse(res);
    const foundIndex = favorites?.filter(
      (favorite) => favorite.EnglishName === EnglishName
    );
    if (foundIndex?.length > 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [EnglishName]);

  useEffect(() => {
    if (!IsDayTime) setTimeImg(NightTime);
  }, [IsDayTime]);

  const handelFavorite = () => {
    const res = localStorage.getItem("favorite");
    const { IsDayTime, MobileLink, Temperature } = currentWeather;
    const { EnglishName } = cityInfo;
    const data = {
      IsDayTime,
      MobileLink,
      Temperature,
      EnglishName,
    };
    if (!res) {
      localStorage.setItem("favorite", JSON.stringify([data]));
      setIsFavorite(true);
      return;
    }
    const parsed = JSON.parse(res);
    const isExist = parsed.find((place) => place.EnglishName === EnglishName);
    if (isExist) {
      const rest = parsed.filter((place) => place.EnglishName !== EnglishName);
      localStorage.setItem("favorite", JSON.stringify(rest));
      setIsFavorite(false);
    } else {
      const updated = [...parsed, data];
      localStorage.setItem("favorite", JSON.stringify(updated));
      setIsFavorite(true);
    }
  };

  return (
    <>
      {Object.keys(currentWeather).length > 0 && WeatherIcon && (
        <div className={classes.container}>
          <div className={classes.details}>
            <div className={classes.img}>
              <img src={timeImg} alt="" />
            </div>
            <div>
              <p>{EnglishName}</p>
              <p>{temperature}°c</p>
            </div>
          </div>
          <div className={classes.links}>
            <FavoriteIcon
              style={
                isFavorite ? { fill: "rgb(150, 29, 29)" } : { fill: "grey" }
              }
              onClick={handelFavorite}
              className={classes.icon}
            />
            <button onClick={handelFavorite}>Add / Remove</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Top;
