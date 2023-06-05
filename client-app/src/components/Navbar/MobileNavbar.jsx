import { useState, useEffect } from "react";
import styles from "../../styles/Navbar/MobileNavbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import ListItemList from "./ListItemLink";

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <div className={styles.container}>
      <div>
        <div
          className={`${styles.iconContainer} ${styles.bars}`}
          onClick={() => setNavOpen(true)}
        >
          <FaBars />
        </div>
        <nav className={navOpen ? styles.navActive : undefined}>
          <ul>
            <div
              className={`${styles.iconContainer} ${styles.times}`}
              onClick={() => setNavOpen(false)}
            >
              <FaTimes />
            </div>
            <ListItemList
              url=""
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Home</h3>
            </ListItemList>
            <ListItemList
              url="categories"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Categories</h3>
            </ListItemList>
            <ListItemList
              url="transactions"
              o
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Transactions</h3>
            </ListItemList>
            <ListItemList
              url="wallet"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Wallet</h3>
            </ListItemList>
            <div className={styles.mobileMenuLinks}>
              <ListItemList
                url="profile"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Profile</h3>
              </ListItemList>
            </div>
            <div className={styles.mobileMenuLinks}>
              <ListItemList
                url="settings"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Settings</h3>
              </ListItemList>
            </div>
            <ListItemList url="logout" optionClass={styles.linkColor}>
              <h3>Logout</h3>
            </ListItemList>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
