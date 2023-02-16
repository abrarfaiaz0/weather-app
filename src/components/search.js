import styles from "@/styles/Search.module.css";

function Search(props) {
  let location = props.location;
  function setLocation(e) {
    location = e.target.value;
  }

  return (
    <div className={styles.search}>
      <input
        onInput={(e) => setLocation(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.changeLocation(location);
        }}
      />
      <button onClick={() => props.changeLocation(location)}> Search </button>
    </div>
  );
}

export default Search;
