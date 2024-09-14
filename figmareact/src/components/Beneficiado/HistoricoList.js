import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddEditModal from "./AddEditModal";
import DeleteModal from "./DeleteModal";
import styles from "./GerenciarBeneficiado.module.css";
import HistoricoTable from "./HistoricoTable";
import Pagination from "./Pagination";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const historicoData = [
    {
      nome: "Luna Starling",
      codnis: "A1B2C3",
      endereco: "Rua das Estrelas, 999",
      cpf: "321.654.987-00",
      telefone: "(11) 98765-1234",
      date: "01/01/1990",
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

      <HistoricoTable
        data={currentItems}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onSelectPage={setCurrentPage}
      />

      <AddEditModal
        show={showAddModal || showEditModal}
        handleClose={showAddModal ? handleCloseAddModal : handleCloseEditModal}
        title={showAddModal ? "Adicionar Usuário" : "Editar Usuário"}
        item={selectedItem}
        onSave={() => {
          console.log("Salvar item");
          handleCloseAddModal();
        }}
      />

      <DeleteModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        onDelete={() => {
          console.log("Excluir item");
          handleCloseDeleteModal();
        }}
      />
    </div>
  );
}

export default HistoricoList;
