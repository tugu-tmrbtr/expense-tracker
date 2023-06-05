import { Routes, Route } from "react-router-dom";
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";

const App = () => {
  return (
    <div className="App">
      <PageContainer>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          <Route></Route>
        </Routes>
      </PageContainer>
    </div>
  );
};

export default App;
