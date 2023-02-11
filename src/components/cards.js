import { useEffect, useState } from "react";

function Cards(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWeather(props.location);
  }, []);
  useEffect(() => {
    getWeather(props.location);
  }, [props.location]);

  async function getWeather(location) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=36c242e887542108b600f50e82927a05&units=metric`
    );
    const json = await response.json();
  }

  return (
    <div>
      {data[0]}, {data[1]}, {data[2]}
    </div>
  );
}

export default Cards;
