import styles from "@/styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <span className={styles.span}>Simple</span>
      <span className={styles.span}>Weather</span>
    </div>
  );
}

export default Nav;
