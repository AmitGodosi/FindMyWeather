import classes from "./Favorites.module.scss";
import Favorite from "./Favorite";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { weatherActions } from "../../store/index";

const Favorites = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const res = localStorage.getItem("favorite");
  const favorites = JSON.parse(res);

  const handleClick = (city) => {
    dispatch(weatherActions.setSearchTerm(city));
    history.push("/forecast");
  };

  return (
    <div className={classes.container}>
      {favorites && (
        <>
          <h2 className={classes.title}>Favorities Places!</h2>
          {favorites.map((favorite) => {
            const { MobileLink, IsDayTime, Temperature, EnglishName } =
              favorite;
            return (
              <Favorite
                key={MobileLink}
                isDayTime={IsDayTime}
                temperature={Temperature.Metric.Value}
                englishName={EnglishName}
                onClick={handleClick.bind(null, EnglishName)}
              />
            );
          })}
        </>
      )}
      {!favorites && (
        <h2 className={classes.title}>you dont have saved places yet...</h2>
      )}
    </div>
  );
};

export default Favorites;
