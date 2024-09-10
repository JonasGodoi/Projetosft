import React from "react";
import { Link } from "react-router-dom"; // Importando Link
import styles from "./RelatorioAssistente.module.css";

function Menu() {
  const menuItems = [
    { text: "Gerenciar Usuario", path: "/ausuario" },
    { text: "Gerenciar Beneficiário", path: "/abeneficiario" }, 
    { text: "Gerenciar Benefícios", path: "/abeneficio" }, 
    { text: "Gerar Relatórios", path: "/arelatorios" }, 
    { text: "Consultar Histórico", path: "/ahistorico" }, 
  ];

  return (
    <nav className={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path} className={styles.menuItem}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
