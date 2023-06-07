import { Link } from "react-router-dom";
import styles from "../../src/styles/Auth/Auth.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <MainContainer>
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <div className={styles.container}>
          <Title>Login</Title>
          <input
            type="email"
            placeholder="Email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={styles.button} type="submit">
            Login
          </button>
          <span>
            Don&apos;t have a account ? <Link to={"/register"}> Register</Link>
          </span>
        </div>
      </form>
    </MainContainer>
  );
};

export default Login;
