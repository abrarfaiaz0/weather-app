import styles from "@/styles/Weather.module.css";

function Notfound(props) {
  if (props.status === "empty")
    return (
      <div className={styles.notfoundwrapper}>
        <div>Enter a city or country name to continue.</div>
      </div>
    );
  else if (props.status === "loading")
    return (
      <div className={styles.notfoundwrapper}>
        <div>Loading...</div>
      </div>
    );
  else
    return (
      <div className={styles.notfoundwrapper}>
        <div>No such city or country found.</div>
      </div>
    );
}

export default Notfound;
