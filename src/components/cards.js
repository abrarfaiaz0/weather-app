import { useEffect, useState } from "react";
import Weather from "./weather";
import Notfound from "./notfound";

function Cards(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWeather(props.location);
  }, [props.location]);

  async function getWeather(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=36c242e887542108b600f50e82927a05&units=metric`
    );
    const json = await response.json();

    props.changeFound(json.cod === 200);

    if (json.cod === 200) {
      const temp_arr = [];
      const lat = json.coord.lat;
      const lon = json.coord.lon;
      const country = json.sys.country;
      const temp = Math.round(json.main.temp);
      const feels = Math.round(json.main.feels_like);
      const humidity = json.main.humidity;
      const pressure = json.main.pressure;
      const weather = json.weather[0].main;

      temp_arr.push(lat);
      temp_arr.push(lon);
      temp_arr.push(country);
      temp_arr.push(temp);
      temp_arr.push(feels);
      temp_arr.push(humidity);
      temp_arr.push(pressure);
      temp_arr.push(weather);

      setLoading(false);
      setData(temp_arr);
      console.log(data);
    } else {
      props.changeFound(false);
    }
  }
  if (props.location === "") return <Notfound status="empty" />;

  if (loading) return <Notfound status="loading" />;
  else {
    if (!props.found) return <Notfound status="notfound" />;

    return (
      // <div>
      //
      // </div>
      <Weather data={data} />
    );
  }
}

export default Cards;
