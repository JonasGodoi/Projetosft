import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./GerenciarBeneficiado.module.css";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItem, setNewItem] = useState({ nome: "", codnis: "", endereco: "", cpf: "", telefone: "", date: "" });

  const historicoData = [
    {
      nome: "dianabol",
      codnis: "025001",
      endereco: "rua hipertrofia, 25",
      cpf: "025.025.025-25",
      telefone: "(11) 40025-0000",
      date: "27/02/1996",
    },
    {
      nome: "dianabol",
      codnis: "025001",
      endereco: "rua hipertrofia, 25",
      cpf: "111111",
      telefone: "(11) 40025-0000",
      date: "27/02/1996",
    }
    // Adicione mais itens conforme necessário
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowDeleteModal = () => setShowDeleteModal(true);
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
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.codnis}</td>
                <td>{item.endereco}</td>
                <td>{item.cpf}</td>
                <td>{item.telefone}</td>
                <td>{item.date}</td>
                <td>
                  <Button variant="primary" onClick={() => { setSelectedItem(item); handleShowEditModal(); }}>Editar</Button>
                  <Button variant="danger" onClick={() => { setSelectedItem(item); handleShowDeleteModal(); }}>Excluir</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para adicionar um novo usuário */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                value={newItem.nome}
                onChange={(e) => setNewItem({ ...newItem, nome: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCodnis">
              <Form.Label>Codnis</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o codnis"
                value={newItem.codnis}
                onChange={(e) => setNewItem({ ...newItem, codnis: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o endereço"
                value={newItem.endereco}
                onChange={(e) => setNewItem({ ...newItem, endereco: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CPF"
                value={newItem.cpf}
                onChange={(e) => setNewItem({ ...newItem, cpf: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o telefone"
                value={newItem.telefone}
                onChange={(e) => setNewItem({ ...newItem, telefone: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite a data"
                value={newItem.date}
                onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => { console.log("Criar item:", newItem); handleCloseAddModal(); }}>
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
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.nome || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, nome: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCodnis">
              <Form.Label>Codnis</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.codnis || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, codnis: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.endereco || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, endereco: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.cpf || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, cpf: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.telefone || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, telefone: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.date || ""}
                onChange={(e) => setSelectedItem({ ...selectedItem, date: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => { console.log("Atualizar item:", selectedItem); handleCloseEditModal(); }}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para confirmar a exclusão de um usuário */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir o usuário {selectedItem?.nome}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => { console.log("Excluir item:", selectedItem); handleCloseDeleteModal(); }}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HistoricoList;
