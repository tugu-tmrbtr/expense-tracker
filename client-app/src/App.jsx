import { Routes, Route, Outlet } from "react-router-dom";
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import MainContainer from "./components/Containers/MainContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <PageContainer optionClass={"pageContainer"}>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/*"
              element={
                <MainContainer>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "3rem",
                    }}
                  >
                    404 Page Not Found
                  </span>
                </MainContainer>
              }
            />
          </Route>
        </Routes>
      </PageContainer>
    </div>
  );
};

export default App;
