import "./ForecastDay.scss";
import NightTime from "../../../assets/night.svg";
import DayTime from "../../../assets/day.svg";

const ForecastDay = ({ epoch, min, max }) => {
  const date = new Date(epoch * 1000);
  const dayName = date.toString().split(" ")[0];
  const minC = ((min.Value - 32) / 1.8).toFixed(0);
  const maxC = ((max.Value - 32) / 1.8).toFixed(0);
  return (
    <div className="box">
      <div className="box__side box__side__front">
        <div className="box__info">
          <p className="dayName">{dayName}</p>
          <p className="temp">{minC}°c</p>
          <img className="icon" src={DayTime} alt="" />
        </div>
      </div>
      <div className="box__side box__side__back">
        <div className="box__info">
          <p className="dayName">{dayName}</p>
          <p className="temp">{maxC}°c</p>
          <img className="icon" src={NightTime} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForecastDay;
