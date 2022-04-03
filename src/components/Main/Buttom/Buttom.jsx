import { useSelector } from "react-redux";
import classes from "./Buttom.module.scss";
import ForecastDay from "./ForecastDay";

const Buttom = () => {
  const forecast = useSelector((state) => state.forecast);

  return (
    <div className={classes.container}>
      {forecast &&
        forecast.map((day) => {
          return (
            <ForecastDay
              key={day.MobileLink}
              epoch={day.EpochDate}
              min={day.Temperature.Minimum}
              max={day.Temperature.Maximum}
            />
          );
        })}
    </div>
  );
};

export default Buttom;
