import classes from "./Middle.module.scss";
import { useSelector } from "react-redux";

const Middle = () => {
  const currentWeather = useSelector((state) => state.currentWeather);

  return (
    <div className={classes.container}>
      <p>{currentWeather.WeatherText}</p>
    </div>
  );
};

export default Middle;
