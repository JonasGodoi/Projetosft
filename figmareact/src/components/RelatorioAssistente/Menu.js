import jsPDF from "jspdf";
import "jspdf-autotable"; // Importa o autotable
import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, FormControl } from "react-bootstrap";
import styles from "./RelatorioAssistente.module.css";

function HistoricoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(""); // Estado para o filtro de dados
  const itemsPerPage = 5; // Número de itens por página

  // Dados de exemplo
  const historicoData = [
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },
    { nome: "Maria", codnis: "123", endereco: "Rua A", cpf: "111.111.111-11", telefone: "12345678", date: "2023-09-01" },
    { nome: "João", codnis: "456", endereco: "Rua B", cpf: "222.222.222-22", telefone: "87654321", date: "2023-09-02" },

    // Adicione mais dados aqui...
  ];

  // Filtrando os dados de acordo com o valor do filtro
  const filteredData = historicoData.filter((item) =>
    item.nome.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageSelect = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
  
    // Cabeçalho
    doc.setFontSize(16);
    doc.text("Relatório de Histórico", 105, 20, null, null, "center");
  
    // Tabela
    const tableColumn = ["Nome", "Codnis", "Endereço", "CPF", "Telefone", "Data"];
    const tableRows = [];
  
    // Dados do histórico
    historicoData.forEach((item) => {
      const itemData = [
        item.nome,
        item.codnis,
        item.endereco,
        item.cpf,
        item.telefone,
        item.date
      ];
      tableRows.push(itemData);
    });
  
    // AutoTable para gerar a tabela no PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      margin: { top: 30, bottom: 10, left: 10, right: 10 },
      styles: { overflow: 'linebreak', cellPadding: 3 },  // Quebra de linha automática
      columnStyles: {
        0: { cellWidth: 'wrap' }, // Nome - quebra de linha automática
        1: { cellWidth: 20 },     // Codnis - largura fixa pequena
        2: { cellWidth: 40 },     // Endereço - largura média
        3: { cellWidth: 30 },     // CPF - largura fixa pequena
        4: { cellWidth: 30 },     // Telefone - largura fixa pequena
        5: { cellWidth: 20 }      // Data - largura pequena
      },
      didDrawCell: (data) => {
        // Se houver overflow, corte o texto e adicione reticências
        if (data.cell.text.length > 1) {
          data.cell.text[0] = data.cell.text[0].slice(0, 30) + '...';
        }
      },
      theme: 'grid',
      showHead: 'everyPage', // Exibe cabeçalho em todas as páginas
    });
  
    // Rodapé com numeração de páginas
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text(
        `Página ${i} de ${pageCount}`,
        105,
        pageHeight - 10,
        null,
        null,
        "center"
      );
    }

    doc.save("historico.pdf");
  };

  return (
    <div className={styles.historicoContainer}>
      <div className={styles.searchContainer}>
        <FormControl
          type="text"
          placeholder="Filtrar por nome..."
          className="mr-sm-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button onClick={gerarPDF} className={styles.createButton}>
          Gerar PDF
        </Button>
      </div>

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
            {currentItems.map((item, index) => (
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

        {/* Menu Suspenso para Selecionar Página */}
        <div className={styles.pagination}>
          <DropdownButton
            id="dropdown-basic-button"
            title={`Página ${currentPage}`}
            variant="secondary"
          >
            {[...Array(totalPages).keys()].map((page) => (
              <Dropdown.Item
                key={page + 1}
                onClick={() => handlePageSelect(page + 1)}
              >
                Página {page + 1}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

export default HistoricoList;
