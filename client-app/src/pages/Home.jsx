import style from "../styles/Home/Home.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import SearchBar from "../components/Home/SearchBar";
import { Title } from "../components/Titles/Titles";
import CategoryCard from "../components/Cards/CategoryCard";

const Home = () => {
  return (
    <MainContainer optionClass={style.container}>
      <div className={style.main}>
        <div className={style.searchbar}>
          <SearchBar />
        </div>
        <div className={style.categories}>
          <Title>Categories Last 30 days</Title>
          <div className={style.content}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
