import React, { useState } from "react";
import styles from "./MenuHistorico.module.css";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa

  const historicoData = [
{
  nome: "dianabol",
  codnis: "025001",
  endereco: "rua hipertrofia, 25",
  cpf: "025.025.025-25",
  telefone: "(11) 40025-0000",
  date: "27/02/1996"
},
{
  nome: "stanozolol",
  codnis: "004002",
  endereco: "beco do pump, 404",
  cpf: "004.004.004-04",
  telefone: "(21) 12345-0044",
  date: "01/03/1997"
},
{
  nome: "oxandrolona",
  codnis: "001003",
  endereco: "avenida anabol, 101",
  cpf: "001.001.001-01",
  telefone: "(31) 65432-0010",
  date: "01/06/1997"
},
{
  nome: "enantato",
  codnis: "007004",
  endereco: "travessa venosa, 707",
  cpf: "007.007.007-07",
  telefone: "(41) 88888-0077",
  date: "01/09/1996"
},
{
  nome: "boldenona",
  codnis: "039005",
  endereco: "rua cavalo bravo, 393",
  cpf: "039.039.039-39",
  telefone: "(51) 99999-3939",
  date: "14/10/1996"
},
{
  nome: "trembolona",
  codnis: "052006",
  endereco: "ladeira braba, 520",
  cpf: "052.052.052-52",
  telefone: "(61) 55555-5200",
  date: "08/12/1996"
}
    // Adicione mais itens conforme necessário
  ];

  // Função para atualizar o valor de busca
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar a lista com base no termo de pesquisa
  const filteredData = historicoData.filter((item) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      item.nome.toLowerCase().includes(searchValue) ||
      item.codnis.toLowerCase().includes(searchValue) ||
      item.endereco.toLowerCase().includes(searchValue) ||
      item.cpf.toLowerCase().includes(searchValue) ||
      item.telefone.toLowerCase().includes(searchValue) ||
      item.date.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className={styles.historicoContainer}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
  
      <div className={styles.historicoTableContainer}>
        <table className={styles.historicoTable}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Codnis</th>
              <th>Endereço</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.codnis}</td>
                <td>{item.endereco}</td>
                <td>{item.cpf}</td>
                <td>{item.telefone}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoricoList;
