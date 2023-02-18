import styles from "@/styles/Search.module.css";

function Search(props) {
  let location = props.location;
  function setLocation(e) {
    location = e.target.value;
  }

  return (
    <div className={styles.search}>
      <input
        className={props.found ? styles.input : styles.inputnotfound}
        onInput={(e) => setLocation(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.changeLocation(location);
        }}
      />
      <button
        className={styles.button}
        onClick={() => props.changeLocation(location)}
      >
        <img className={styles.logo} src="/assets/search.png"></img>
      </button>
    </div>
  );
}

export default Search;
