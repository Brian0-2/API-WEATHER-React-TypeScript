import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

// Libreria para las apis
// npm  i axios
//Libreria zod para comprobar los resultados del api y tiparlos
// npm i zod
// Alternativa a zod valibot es modular por lo tanto es menos pesada
// npm i valibot

function App() {
  const { fetchWeather, weather, loading, notFound, hasWeatherData } =
    useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  );
}

export default App;
