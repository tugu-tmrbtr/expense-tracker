import styles from "../../styles/Home/SearchBar.module.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.inner}>
        <div className={styles.searchContainer}>
          <FiSearch />
          <input type="text" placeholder="Хайх" />
        </div>
        <div className={styles.menuLink}>
          <Link to="wallet">Хэтэвч</Link>
        </div>
        <div className={styles.menuLink}>
          <Link to="settings">Тохиргоо</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
