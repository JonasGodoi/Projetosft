import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./GerenciarUsuario.module.css";

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
      nome: "Eu que mando",
      cod: "A1B2C3",
      login: "Rua das Estrelas, 999",
      senha: "321.654.987-00",
      requisicao: "(11) 98765-1234",
      date: "01/01/1990",
    },
    {
      nome: "Não! Eu que",
      cod: "A1B2C3",
      login: "Rua das Estrelas, 999",
      senha: "321.654.987-00",
      requisicao: "(11) 98765-1234",
      date: "01/01/1990",
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
      item.cod.toLowerCase().includes(searchValue) ||
      item.login.toLowerCase().includes(searchValue) ||
      item.senha.toLowerCase().includes(searchValue) ||
      item.requisicao.toLowerCase().includes(searchValue) ||
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
              <th>Código</th>
              <th>Login</th>
              <th>Senha</th>
              <th>Requisições</th>
              <th>Date</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.cod}</td>
                <td>{item.login}</td>
                <td>{item.senha}</td>
                <td>{item.requisicao}</td>
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
            <Form.Group controlId="formcod">
              <Form.Label>cod</Form.Label>
              <Form.Control type="text" placeholder="cod" />
            </Form.Group>
            <Form.Group controlId="formlogin">
              <Form.Label>Endereço</Form.Label>
              <Form.Control type="text" placeholder="Endereço" />
            </Form.Group>
            <Form.Group controlId="formsenha">
              <Form.Label>senha</Form.Label>
              <Form.Control type="text" placeholder="senha" />
            </Form.Group>
            <Form.Group controlId="formrequisicao">
              <Form.Label>requisicao</Form.Label>
              <Form.Control type="text" placeholder="requisicao" />
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
            <Form.Group controlId="formcod">
              <Form.Label>cod</Form.Label>
              <Form.Control
                type="text"
                placeholder="cod"
                defaultValue={selectedItem?.cod || ""}
              />
            </Form.Group>
            <Form.Group controlId="formlogin">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Endereço"
                defaultValue={selectedItem?.login || ""}
              />
            </Form.Group>
            <Form.Group controlId="formsenha">
              <Form.Label>senha</Form.Label>
              <Form.Control
                type="text"
                placeholder="senha"
                defaultValue={selectedItem?.senha || ""}
              />
            </Form.Group>
            <Form.Group controlId="formrequisicao">
              <Form.Label>requisicao</Form.Label>
              <Form.Control
                type="text"
                placeholder="requisicao"
                defaultValue={selectedItem?.requisicao || ""}
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
