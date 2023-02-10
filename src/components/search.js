function Search(props) {
  //   async function getWeather(props) {
  //     const response = await fetch(
  //       "https://api.open-meteo.com/v1/forecast?latitude=23.71&longitude=90.41&hourly=temperature_2m"
  //     );
  //     const json = await response.json();
  //     console.log(json);
  //   }
  //   getWeather();
  const location = "Dhaka";

  return <button onClick={() => props.changeLocation(location)}> add </button>;
}

export default Search;
