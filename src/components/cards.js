import { useState } from "react";

function Cards(props) {
  const [data, setData] = useState([]);

  async function getWeather(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=36c242e887542108b600f50e82927a05&units=metric`
    );
    const json = await response.json();
    if (json["cod"] === 200) {
      let data_arr = [];
      data_arr.push(json["coord"]["lat"]);
      data_arr.push(json["coord"]["lon"]);
      data_arr.push(Math.round(json["main"]["temp"]));
      data_arr.push(Math.round(json["main"]["feels_like"]));
      data_arr.push(json["main"]["humidity"]);
      data_arr.push(json["main"]["pressure"]);
      data_arr.push(json["weather"][0]["main"]);
      console.log(data_arr);
    }
  }
  getWeather(props.location);
  return <div>location &gt {props.location}</div>;
}

export default Cards;
