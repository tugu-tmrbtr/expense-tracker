import { Link } from "react-router-dom";
import styles from "../../src/styles/Auth/Auth.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";
import { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <MainContainer>
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <div className={styles.container}>
          <Title>Бүртгүүлэх</Title>
          <input
            type="email"
            placeholder="Имэйл"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Нууц үг"
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit">Бүртгүүлэх</button>
        </div>
      </form>
    </MainContainer>
  );
};

export default Register;
