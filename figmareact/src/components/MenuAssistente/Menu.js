import React from "react";
import { Link } from "react-router-dom"; // Importando Link
import styles from "./MenuAssistente.module.css";

function Menu() {
  const menuItems = [
    { text: "Gerenciar Usuario", path: "/ausuario" },
    { text: "Gerenciar Beneficiário", path: "/gerenciarbeneficiario" }, 
    /*{ text: "Gerenciar Benefícios", path: "/abeneficio" },*/ 
    { text: "Gerar Relatórios", path: "/relatoriosecretaria" }, 
    { text: "Consultar Histórico", path: "/historico" }, 
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
