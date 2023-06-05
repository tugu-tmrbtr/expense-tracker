import styles from "../../styles/Navbar/Navbar.module.scss";
import ListItemList from "./ListItemLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <div>Tracker</div>
        </Link>
      </div>
      <nav>
        <ul>
          <ListItemList url="">
            <h3>Home</h3>
          </ListItemList>
          <ListItemList url="categories">
            <h3>Categories</h3>
          </ListItemList>
          <ListItemList url="transactions">
            <h3>Transactions</h3>
          </ListItemList>
          <ListItemList url="wallet">
            <h3>Wallet</h3>
          </ListItemList>
          <div className={styles.mobileMenuLinks}>
            <ListItemList url="profile">
              <h3>Profile</h3>
            </ListItemList>
          </div>
          <div className={styles.mobileMenuLinks}>
            <ListItemList url="settings">
              <h3>Settings</h3>
            </ListItemList>
          </div>
          <ListItemList
            url="logout"
            // clickHandler={logoutHandler}
          >
            <h3>Logout</h3>
          </ListItemList>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
