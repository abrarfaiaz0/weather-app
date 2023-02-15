import styles from "@/styles/Search.module.css";

function Search(props) {
  let location = props.location;
  function setLocation(e) {
    location = e.target.value;
  }

  return (
    <>
      <input onInput={(e) => setLocation(e)} />
      <button onClick={() => props.changeLocation(location)}> Search </button>
    </>
  );
}

export default Search;
