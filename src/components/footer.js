import styles from "@/styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <span>Created by Abrar Faiaz Atuno</span>•
      <a
        className={styles.link}
        href="https://www.github.com/abrarfaiaz0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
}

export default Footer;
