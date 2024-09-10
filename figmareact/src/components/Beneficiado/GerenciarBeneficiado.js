import React from "react";
import styles from "./GerenciarBeneficiado.module.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

function GerenciarBeneficiado() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <div className={styles.content}>
          <div className={styles.column}>
            <Sidebar />
          </div>
          <div className={styles.column}>
            <Menu />
          </div>
        </div>
      </section>
    </main>
  );
}

export default GerenciarBeneficiado;
