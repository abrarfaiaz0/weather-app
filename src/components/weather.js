import styles from "@/styles/Weather.module.css";

function Weather(props) {
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
  return (
    <div className={styles.wrapper}>
      {props.data.map((record, i) => {
        if (i === 3 || i === 4)
          return (
            <div key={i} className={styles.box}>
              <div>{arr_[i]}</div>
              <div className={styles.data}>{record}°C</div>
            </div>
          );
        if (i < 7)
          return (
            <div key={i} className={styles.box}>
              <div>{arr_[i]}</div>
              <div className={styles.data}>{record}</div>
            </div>
          );
      })}
    </div>
  );
}

export default Weather;
