import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../images/logo (1).png"; // Ajuste o caminho conforme sua estrutura
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagem de erro
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const defaultUsername = "user";
    const defaultPassword = "password";

    const outroUsername = "admin";
    const outroPassword = "admin";

    if (username === defaultUsername && password === defaultPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/menusecretaria", {replace: true});
    } else if (username === outroUsername && password === outroPassword){
      localStorage.setItem("isAuthenticated", "true");
      navigate("/menuassistente", {replace: true});
    }else{
      setErrorMessage("Usuário ou senha inválidos");
    }
  };



  return (
    <main className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <aside className={styles.sidebar}>
          <img src={logoImage} alt="Department Logo" className={styles.logo} />
          <h2 className={styles.departmentName}>
            Secretaria de Assistência Social
          </h2>
        </aside>
        <section className={styles.mainContent}>
          <h1 className={styles.formTitle}>Insira seus dados</h1>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/998e016ae516bd6ce7c5749007f265e65f59f81cc880487f5ad3f272f28446c1?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b"
                alt="Ícone de usuário"
                className={styles.inputIcon}
              />
              <label htmlFor="login" className={styles.visuallyHidden}></label>
              <input
                id="login"
                type="text"
                className={styles.input}
                placeholder="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <img
                src={logoImage}
                alt="Ícone de senha"
                className={styles.inputIcon}
              />
              <label
                htmlFor="password"
                className={styles.visuallyHidden}
              ></label>
              <input
                id="password"
                type="password"
                className={styles.input}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}{" "}
            {/* Mensagem de erro */}
            <button type="submit" className={styles.submitButton}>
              ENTRAR
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
