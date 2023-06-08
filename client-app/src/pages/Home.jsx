import style from "../styles/Home/Home.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import SearchBar from "../components/Home/SearchBar";
import { Title } from "../components/Titles/Titles";
import CategoryCard from "../components/Cards/CategoryCard";
import TransactionCard from "../components/Cards/TransactionCard";
import HomeProfile from "../components/Home/HomeProfile";

const Home = () => {
  return (
    <MainContainer optionClass={style.container}>
      <div className={style.main}>
        <div className={style.searchbar}>
          <SearchBar />
        </div>
        <div className={style.categories}>
          <Title>Ангилал Сүүлийн 30 хоног</Title>
          <div className={style.content}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
        <div className={style.transactions}>
          <Title>Сүүлийн гүйлгээнүүд</Title>
          <div className={style.content}>
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
          </div>
        </div>
      </div>
      <div className={style.profile}>
        <HomeProfile />
      </div>
    </MainContainer>
  );
};

export default Home;
