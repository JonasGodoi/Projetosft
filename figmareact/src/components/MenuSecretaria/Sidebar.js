import React from "react";
import styles from "./MenuSecretaria.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/54dd64f78ce2fca01f71b9613ff62278d4f1d5bd8c92c2b46c110b2753c73c90?placeholderIfAbsent=true&apiKey=03461e8016f04c50a309e203e5ed2c0b"
        alt="Logo da Secretaria"
        className={styles.logo}
      />
      <h1 className={styles.sidebarTitle}>Secretaria de Assistência Social</h1>
    </aside>
  );
}

export default Sidebar;
