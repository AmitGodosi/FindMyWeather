import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "Tel Aviv",
  cityInfo: {},
  currentWeather: {},
  forecast: [],
};

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setCurrentWeather(state, action) {
      state.currentWeather = action.payload;
    },
    setForecast(state, action) {
      state.forecast = action.payload;
    },
    setCityInfo(state, action) {
      state.cityInfo = action.payload;
    },
  },
});

const store = configureStore({
  reducer: weatherSlice.reducer,
});

export const weatherActions = weatherSlice.actions;

export default store;
