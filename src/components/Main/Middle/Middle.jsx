import { useSelector } from "react-redux";
import classes from "./Middle.module.scss";

const Middle = () => {
  const currentWeather = useSelector((state) => state.currentWeather);

  return (
    <div className={classes.container}>
      <p>{currentWeather.WeatherText}</p>
    </div>
  );
};

export default Middle;
