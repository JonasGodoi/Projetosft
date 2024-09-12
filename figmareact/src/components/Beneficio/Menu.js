import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import styles from "./BeneficiosAssistente.module.css";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Número de itens por página

  const historicoData = [
    {
      CodBeneficio: "A1B2C3",
      Categoria: "Saúde",
      DescriçãoBeneficio: "Auxílio médico",
    },
    {
      CodBeneficio: "D4E5F6",
      Categoria: "Educação",
      DescriçãoBeneficio: "Bolsa de estudo",
    },
    {
      CodBeneficio: "G7H8I9",
      Categoria: "Alimentação",
      DescriçãoBeneficio: "Cesta básica",
    },
    {
      CodBeneficio: "J1K2L3",
      Categoria: "Transporte",
      DescriçãoBeneficio: "Vale transporte",
    },
    {
      CodBeneficio: "M4N5O6",
      Categoria: "Habitação",
      DescriçãoBeneficio: "Auxílio aluguel",
    },
    {
      CodBeneficio: "P7Q8R9",
      Categoria: "Saúde",
      DescriçãoBeneficio: "Atendimento odontológico",
    },
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
      item.CodBeneficio.toLowerCase().includes(searchValue) ||
      item.Categoria.toLowerCase().includes(searchValue) ||
      item.DescriçãoBeneficio.toLowerCase().includes(searchValue)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageSelect = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
              <th>CodBeneficio</th>
              <th>Categoria</th>
              <th>Descrição Beneficio</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.CodBeneficio}</td>
                <td>{item.Categoria}</td>
                <td>{item.DescriçãoBeneficio}</td>
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

      {/* Modal para adicionar um novo benefício */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCodBeneficio">
              <Form.Label>CodBeneficio</Form.Label>
              <Form.Control type="text" placeholder="CodBeneficio" />
            </Form.Group>
            <Form.Group controlId="formCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" placeholder="Categoria" />
            </Form.Group>
            <Form.Group controlId="formDescriçãoBeneficio">
              <Form.Label>Descrição Beneficio</Form.Label>
              <Form.Control type="text" placeholder="Descrição Beneficio" />
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
              console.log("Criar benefício");
              handleCloseAddModal();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para editar um benefício */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCodBeneficio">
              <Form.Label>CodBeneficio</Form.Label>
              <Form.Control
                type="text"
                placeholder="CodBeneficio"
                defaultValue={selectedItem?.CodBeneficio || ""}
              />
            </Form.Group>
            <Form.Group controlId="formCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoria"
                defaultValue={selectedItem?.Categoria || ""}
              />
            </Form.Group>
            <Form.Group controlId="formDescriçãoBeneficio">
              <Form.Label>Descrição Beneficio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrição Beneficio"
                defaultValue={selectedItem?.DescriçãoBeneficio || ""}
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
              console.log("Editar benefício");
              handleCloseEditModal();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal para confirmar exclusão de um benefício */}
<Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
  <Modal.Header closeButton>
    <Modal.Title>Excluir Benefício</Modal.Title>
  </Modal.Header>
  <Modal.Body>Tem certeza de que deseja excluir o benefício {selectedItem?.CodBeneficio}?</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseDeleteModal}>
      Cancelar
    </Button>
    <Button
      variant="danger"
      onClick={() => {
        console.log("Excluir benefício");
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
