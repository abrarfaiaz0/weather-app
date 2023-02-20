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
    <div className={styles.flex}>
      <div className={styles.summary}>
        <div className={styles.sum}>
          <div className={styles.flex1}>
            <img
              className={styles.icon}
              src={`/assets/icons/${props.data[7]}.png`}
            ></img>

            <div className={styles.flex2}>
              <div className={styles.big}>{props.data[3]}°C</div>
              <div className={styles.text}>{props.data[7]}</div>
              <div className={styles.text}>
                {props.location.charAt(0).toUpperCase() +
                  props.location.slice(1)}
                , {props.data[2]}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        {props.data.map((record, i) => {
          if (i === 3 || i === 4)
            return (
              <div key={i} className={styles.box}>
                <div>{arr_[i]}</div>
                <div className={styles.data}>{record}°C</div>
              </div>
            );
          if (i < 6)
            return (
              <div key={i} className={styles.box}>
                <div>{arr_[i]}</div>
                <div className={styles.data}>{record}</div>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Weather;
