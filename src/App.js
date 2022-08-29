import WeatherPage from "./pages/WeatherPage";
import FavoritePage from "./pages/FavoritePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/forecast" />
        </Route>{" "}
        <Route exact path="/favorite">
          <FavoritePage />
        </Route>{" "}
        <Route exact path="/forecast">
          <WeatherPage />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
