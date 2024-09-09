import React from "react";
import { Link } from "react-router-dom"; // Importando Link
import styles from './MenuSecretaria.module.css';

function Menu() {
  const menuItems = [
    { text: "Agendar Consulta", path: "/agendar" },
    { text: "Encaminhar Usuário", path: "/encaminhar" }, // Ajuste o caminho conforme necessário
    { text: "Gerar Relatórios", path: "/relatorios" }, // Ajuste o caminho conforme necessário
    { text: "Consultar Histórico", path: "/historico" } // Ajuste o caminho conforme necessário
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
