import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./GerenciarBeneficiado.module.css";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Número de itens por página
  const maxPageButtons = 5; // Número máximo de botões de página a serem exibidos

  const historicoData = [
    // Exemplo de dados
    {
      nome: "Luna Starling",
      codnis: "A1B2C3",
      endereco: "Rua das Estrelas, 999",
      cpf: "321.654.987-00",
      telefone: "(11) 98765-1234",
      date: "01/01/1990",
    },
    {
      nome: "Maxwell Iron",
      codnis: "D4E5F6",
      endereco: "Avenida Galáxia, 456",
      cpf: "654.321.098-11",
      telefone: "(21) 87654-3210",
      date: "14/02/1985",
    },
    {
      nome: "Aurora Boreal",
      codnis: "G7H8I9",
      endereco: "Praça do Sol, 123",
      cpf: "987.654.321-22",
      telefone: "(31) 76543-2109",
      date: "23/03/1992",
    },
    {
      nome: "Orion Hunter",
      codnis: "J1K2L3",
      endereco: "Rua do Cometa, 333",
      cpf: "876.543.210-33",
      telefone: "(41) 65432-1098",
      date: "05/04/1988",
    },
    {
      nome: "Nebula Skye",
      codnis: "M4N5O6",
      endereco: "Avenida Astral, 777",
      cpf: "543.210.987-44",
      telefone: "(51) 54321-0987",
      date: "16/05/1995",
    },
    {
      nome: "Zephyr Gale",
      codnis: "P7Q8R9",
      endereco: "Rua das Nuvens, 222",
      cpf: "210.987.654-55",
      telefone: "(61) 43210-9876",
      date: "28/06/1980",
    },
    {
      nome: "Cyra Moon",
      codnis: "S1T2U3",
      endereco: "Praça dos Planetas, 888",
      cpf: "109.876.543-66",
      telefone: "(71) 32109-8765",
      date: "09/07/1993",
    },
    {
      nome: "Eclipse Dawn",
      codnis: "V4W5X6",
      endereco: "Avenida Lunar, 555",
      cpf: "654.321.098-77",
      telefone: "(81) 21098-7654",
      date: "20/08/1991",
    },
    {
      nome: "Sirius Blaze",
      codnis: "Y7Z8A9",
      endereco: "Rua do Vento, 444",
      cpf: "432.109.876-88",
      telefone: "(91) 10987-6543",
      date: "01/09/1987",
    },
    {
      nome: "Celeste Ray",
      codnis: "B1C2D3",
      endereco: "Rua da Aurora, 111",
      cpf: "321.098.765-99",
      telefone: "(11) 09876-5432",
      date: "15/10/1994",
    },
    {
      nome: "Phoenix Ember",
      codnis: "E4F5G6",
      endereco: "Avenida do Crepúsculo, 999",
      cpf: "210.987.654-10",
      telefone: "(21) 98765-4321",
      date: "29/11/1990",
    },
    {
      nome: "Vega Night",
      codnis: "H7I8J9",
      endereco: "Rua do Eclipse, 777",
      cpf: "109.876.543-21",
      telefone: "(31) 87654-3210",
      date: "10/12/1982",
    },
    {
      nome: "Andromeda Blaze",
      codnis: "K1L2M3",
      endereco: "Praça dos Astros, 555",
      cpf: "654.321.987-32",
      telefone: "(41) 76543-2109",
      date: "21/01/1995",
    },
    {
      nome: "Lyra Storm",
      codnis: "N4O5P6",
      endereco: "Rua do Horizonte, 333",
      cpf: "987.654.321-43",
      telefone: "(51) 65432-1098",
      date: "13/02/1990",
    },
    {
      nome: "Orion Skye",
      codnis: "Q7R8S9",
      endereco: "Avenida da Nebulosa, 222",
      cpf: "876.543.210-54",
      telefone: "(61) 54321-0987",
      date: "25/03/1988",
    },
    {
      nome: "Nova Star",
      codnis: "T1U2V3",
      endereco: "Rua do Universo, 111",
      cpf: "765.432.109-65",
      telefone: "(71) 43210-9876",
      date: "08/04/1992",
    },
      {
    nome: "Luna Starling",
    codnis: "A1B2C3",
    endereco: "Rua das Estrelas, 999",
    cpf: "321.654.987-00",
    telefone: "(11) 98765-1234",
    date: "01/01/1990",
  },
  {
    nome: "Maxwell Iron",
    codnis: "D4E5F6",
    endereco: "Avenida Galáxia, 456",
    cpf: "654.321.098-11",
    telefone: "(21) 87654-3210",
    date: "14/02/1985",
  },
  {
    nome: "Aurora Boreal",
    codnis: "G7H8I9",
    endereco: "Praça do Sol, 123",
    cpf: "987.654.321-22",
    telefone: "(31) 76543-2109",
    date: "23/03/1992",
  },
  {
    nome: "Orion Hunter",
    codnis: "J1K2L3",
    endereco: "Rua do Cometa, 333",
    cpf: "876.543.210-33",
    telefone: "(41) 65432-1098",
    date: "05/04/1988",
  },
  {
    nome: "Nebula Skye",
    codnis: "M4N5O6",
    endereco: "Avenida Astral, 777",
    cpf: "543.210.987-44",
    telefone: "(51) 54321-0987",
    date: "16/05/1995",
  },
  {
    nome: "Zephyr Gale",
    codnis: "P7Q8R9",
    endereco: "Rua das Nuvens, 222",
    cpf: "210.987.654-55",
    telefone: "(61) 43210-9876",
    date: "28/06/1980",
  },
  {
    nome: "Cyra Moon",
    codnis: "S1T2U3",
    endereco: "Praça dos Planetas, 888",
    cpf: "109.876.543-66",
    telefone: "(71) 32109-8765",
    date: "09/07/1993",
  },
  {
    nome: "Eclipse Dawn",
    codnis: "V4W5X6",
    endereco: "Avenida Lunar, 555",
    cpf: "654.321.098-77",
    telefone: "(81) 21098-7654",
    date: "20/08/1991",
  },
  {
    nome: "Sirius Blaze",
    codnis: "Y7Z8A9",
    endereco: "Rua do Vento, 444",
    cpf: "432.109.876-88",
    telefone: "(91) 10987-6543",
    date: "01/09/1987",
  },
  {
    nome: "Celeste Ray",
    codnis: "B1C2D3",
    endereco: "Rua da Aurora, 111",
    cpf: "321.098.765-99",
    telefone: "(11) 09876-5432",
    date: "15/10/1994",
  },
  {
    nome: "Phoenix Ember",
    codnis: "E4F5G6",
    endereco: "Avenida do Crepúsculo, 999",
    cpf: "210.987.654-10",
    telefone: "(21) 98765-4321",
    date: "29/11/1990",
  },
  {
    nome: "Vega Night",
    codnis: "H7I8J9",
    endereco: "Rua do Eclipse, 777",
    cpf: "109.876.543-21",
    telefone: "(31) 87654-3210",
    date: "10/12/1982",
  },
  {
    nome: "Andromeda Blaze",
    codnis: "K1L2M3",
    endereco: "Praça dos Astros, 555",
    cpf: "654.321.987-32",
    telefone: "(41) 76543-2109",
    date: "21/01/1995",
  },
  {
    nome: "Lyra Storm",
    codnis: "N4O5P6",
    endereco: "Rua do Horizonte, 333",
    cpf: "987.654.321-43",
    telefone: "(51) 65432-1098",
    date: "13/02/1990",
  },
  {
    nome: "Orion Skye",
    codnis: "Q7R8S9",
    endereco: "Avenida da Nebulosa, 222",
    cpf: "876.543.210-54",
    telefone: "(61) 54321-0987",
    date: "25/03/1988",
  },
  {
    nome: "Nova Star",
    codnis: "T1U2V3",
    endereco: "Rua do Universo, 111",
    cpf: "765.432.109-65",
    telefone: "(71) 43210-9876",
    date: "08/04/1992",
  },

    // Adicione mais dados conforme necessário
  ];

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowEditModal = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

const getPageNumbers = () => {
  const pages = [];
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  if (startPage > 1) {
    pages.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    pages.push("...");
  }

  return pages;
};

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.historicoContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <Button onClick={handleShowAddModal} className={styles.createButton}>
          Criar
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
              <th>Ações</th>
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
                <td>
                  <Button
                    className={`${styles.actionButton} ${styles.editButton}`}
                    onClick={() => handleShowEditModal(item)}
                  >
                    Editar
                  </Button>
                  <Button
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={() => handleShowDeleteModal(item)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Controles de Paginação */}
        <div className={styles.pagination}>
          <Button
            className={styles.pageButton}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </Button>
          {pageNumbers.map((page, index) => (
            page === "..." ? (
              <span key={index}>...</span>
            ) : (
              <Button
                key={page}
                className={`${styles.pageButton} ${
                  currentPage === page ? styles.activePage : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            )
          ))}
          <Button
            className={styles.pageButton}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Próximo
          </Button>
        </div>
      </div>

      {/* Modal para adicionar um novo usuário */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group controlId="formCodnis">
              <Form.Label>Codnis</Form.Label>
              <Form.Control type="text" placeholder="Codnis" />
            </Form.Group>
            <Form.Group controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control type="text" placeholder="Endereço" />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" placeholder="CPF" />
            </Form.Group>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" placeholder="Telefone" />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" placeholder="Date" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("Criar item");
              handleCloseAddModal();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para editar um usuário */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                defaultValue={selectedItem?.nome || ""}
              />
            </Form.Group>
            <Form.Group controlId="formCodnis">
              <Form.Label>Codnis</Form.Label>
              <Form.Control
                type="text"
                placeholder="Codnis"
                defaultValue={selectedItem?.codnis || ""}
              />
            </Form.Group>
            <Form.Group controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Endereço"
                defaultValue={selectedItem?.endereco || ""}
              />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="CPF"
                defaultValue={selectedItem?.cpf || ""}
              />
            </Form.Group>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefone"
                defaultValue={selectedItem?.telefone || ""}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Date"
                defaultValue={selectedItem?.date || ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("Atualizar item");
              handleCloseEditModal();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para excluir um usuário */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir este usuário?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              console.log("Excluir item");
              handleCloseDeleteModal();
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HistoricoList;
