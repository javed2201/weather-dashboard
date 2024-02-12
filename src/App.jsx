import Page from "./Page.jsx";
import {
  WeatherProvider,
  FafouriteProvider,
  LocationProvider,
} from "./provider/index.js";

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FafouriteProvider>
          <Page />
        </FafouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
