import { useEffect, useState } from "react";

function Cards(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  const arr_ = [
    "Latitude",
    "Longitude",
    "Country",
    "Temperature",
    "Feels like",
    "Humidity",
    "Pressure",
    "Summary",
  ];

  useEffect(() => console.log(data), [data]);
  useEffect(() => {
    getWeather(props.location);
  }, [props.location]);

  async function getWeather(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=36c242e887542108b600f50e82927a05&units=metric`
    );
    const json = await response.json();

    if (json.cod === 200) setFound(true);
    else setFound(false);

    if (found) {
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
    }
  }

  if (!found) return <div>city not found</div>;
  else {
    if (loading) return <div> Loading... </div>;

    return (
      <div>
        {data.map((record, i) => {
          return (
            <div key={i}>
              {arr_[i]} : {record}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
