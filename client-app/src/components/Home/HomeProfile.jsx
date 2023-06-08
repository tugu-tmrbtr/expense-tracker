import styles from "../../styles/Home/HomeProfile.module.scss";
import { BsPerson, BsPencil, BsWallet2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <BsPerson />
      </div>
      <div className={styles.info}>
        <span className={styles.welcome}>Сайн уу</span>
        <div className={styles.options}>
          <Link to="/profile">
            <span>Профайл</span>
            <BsPencil />
          </Link>
          <Link to="/settings">
            <span>Тохиргоо</span>
            <IoSettingsOutline />
          </Link>
          <Link to="/wallet">
            <span>Хэтэвч</span>
            <BsWallet2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
