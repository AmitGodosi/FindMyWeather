import { useEffect, useState, useRef } from "react";
import classes from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";
import { weatherActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import {
  getCityInfo,
  getCityCurrentWeather,
  getCityForecast,
} from "../../apiConfig";
import { Country, State, City } from "country-state-city";

const Search = () => {
  const [filter, setFilter] = useState("City");
  const [suggestions, setSuggestions] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isTypingError, setIsTypingError] = useState(false);
  const searchRef = useRef();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    const getCity = async () => {
      setIsPending(false);
      const cityRes = await getCityInfo(searchTerm);
      if (cityRes.data.length === 0) {
        setIsError(true);
        return;
      }
      const cityKey = cityRes.data[0].Key;
      const weatherRes = await getCityCurrentWeather(cityKey);
      const forecastRes = await getCityForecast(cityKey);
      dispatch(weatherActions.setCityInfo(cityRes?.data[0] || []));
      dispatch(weatherActions.setCurrentWeather(weatherRes?.data[0] || []));
      dispatch(
        weatherActions.setForecast(forecastRes?.data?.DailyForecasts || [])
      );
    };
    getCity();
  }, [searchTerm]);

  const handleSubmit = () => {
    const value = searchRef.current.value;
    dispatch(weatherActions.setSearchTerm(value));
  };

  const handleAutocomplete = () => {
    let res = [];
    const value = searchRef.current.value;
    const regex = /^[a-zA-Z\s]+$/;
    if (value === "") {
      setSuggestions([]);
      return;
    }
    if (regex.test(value) === false) {
      searchRef.current.value = value.slice(0, -1);
      setSuggestions([]);
      setIsTypingError(true);
    } else {
      if (filter === "City") {
        res = City.getAllCities();
      } else if (filter === "Country") {
        res = Country.getAllCountries();
      } else {
        res = State.getAllStates();
      }
      let suggestions = res.filter((suggestion) =>
        suggestion.name.toLowerCase().startsWith(value.toLowerCase())
      );
      if (suggestions.length > 5) suggestions = suggestions.slice(0, 5);
      setSuggestions(suggestions);
      setIsTypingError(false);
      setIsError(false);
    }
  };

  const handleType = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setFilter(value);
    setSuggestions([]);
    searchRef.current.value = "";
  };

  const handleSelect = (e) => {
    e.preventDefault();
    searchRef.current.value = "";
    setSuggestions([]);
    setIsPending(true);
    dispatch(weatherActions.setSearchTerm(e.target.textContent));
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <span className={classes.searchType}>
          <select onChange={handleType}>
            <option defaultValue>City</option>
            <option>Country</option>
            <option>State</option>
          </select>
        </span>
        <div className={classes.searchValue}>
          <BsSearch
            onClick={handleSubmit}
            className={classes.searchValueIcon}
          />
          <input ref={searchRef} onChange={handleAutocomplete} />
          {suggestions.length > 0 && (
            <div className={classes.searchValueList}>
              <ul>
                {suggestions.map((suggestion) => {
                  return (
                    <li key={suggestion.latitude} onClick={handleSelect}>
                      {suggestion.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}{" "}
          {isPending && <div className={classes.pending}>loading...</div>}
          {isError && <div className={classes.error}>Location not found!</div>}
          {isTypingError && (
            <div className={classes.error}>English Letters Only!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
