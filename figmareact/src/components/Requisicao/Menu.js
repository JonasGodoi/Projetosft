
import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import styles from "./RequisicaoSecretaria.module.css";

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
      CodReq: "Luna Starling",
      Descrição: "A1B2C3",
      Status: "Rua das Estrelas, 999",
      CodNIS: "321.654.987-00",
      CodBeneficio: "(11) 98765-1234",
      date: "01/01/1990",
    },
    {
      CodReq: "Maxwell Iron",
      Descrição: "D4E5F6",
      Status: "Avenida Galáxia, 456",
      CodNIS: "654.321.098-11",
      CodBeneficio: "(21) 87654-3210",
      date: "14/02/1985",
    },
    {
      CodReq: "Aurora Boreal",
      Descrição: "G7H8I9",
      Status: "Praça do Sol, 123",
      CodNIS: "987.654.321-22",
      CodBeneficio: "(31) 76543-2109",
      date: "23/03/1992",
    },
    {
      CodReq: "Orion Hunter",
      Descrição: "J1K2L3",
      Status: "Rua do Cometa, 333",
      CodNIS: "876.543.210-33",
      CodBeneficio: "(41) 65432-1098",
      date: "05/04/1988",
    },
    {
      CodReq: "Nebula Skye",
      Descrição: "M4N5O6",
      Status: "Avenida Astral, 777",
      CodNIS: "543.210.987-44",
      CodBeneficio: "(51) 54321-0987",
      date: "16/05/1995",
    },
    {
      CodReq: "Zephyr Gale",
      Descrição: "P7Q8R9",
      Status: "Rua das Nuvens, 222",
      CodNIS: "210.987.654-55",
      CodBeneficio: "(61) 43210-9876",
      date: "28/06/1980",
    },
    {
      CodReq: "Cyra Moon",
      Descrição: "S1T2U3",
      Status: "Praça dos Planetas, 888",
      CodNIS: "109.876.543-66",
      CodBeneficio: "(71) 32109-8765",
      date: "09/07/1993",
    },
    {
      CodReq: "Eclipse Dawn",
      Descrição: "V4W5X6",
      Status: "Avenida Lunar, 555",
      CodNIS: "654.321.098-77",
      CodBeneficio: "(81) 21098-7654",
      date: "20/08/1991",
    },
    {
      CodReq: "Sirius Blaze",
      Descrição: "Y7Z8A9",
      Status: "Rua do Vento, 444",
      CodNIS: "432.109.876-88",
      CodBeneficio: "(91) 10987-6543",
      date: "01/09/1987",
    },
    {
      CodReq: "Celeste Ray",
      Descrição: "B1C2D3",
      Status: "Rua da Aurora, 111",
      CodNIS: "321.098.765-99",
      CodBeneficio: "(11) 09876-5432",
      date: "15/10/1994",
    },
    {
      CodReq: "Phoenix Ember",
      Descrição: "E4F5G6",
      Status: "Avenida do Crepúsculo, 999",
      CodNIS: "210.987.654-10",
      CodBeneficio: "(21) 98765-4321",
      date: "29/11/1990",
    },
    {
      CodReq: "Vega Night",
      Descrição: "H7I8J9",
      Status: "Rua do Eclipse, 777",
      CodNIS: "109.876.543-21",
      CodBeneficio: "(31) 87654-3210",
      date: "10/12/1982",
    },
    {
      CodReq: "Andromeda Blaze",
      Descrição: "K1L2M3",
      Status: "Praça dos Astros, 555",
      CodNIS: "654.321.987-32",
      CodBeneficio: "(41) 76543-2109",
      date: "21/01/1995",
    },
    {
      CodReq: "Lyra Storm",
      Descrição: "N4O5P6",
      Status: "Rua do Horizonte, 333",
      CodNIS: "987.654.321-43",
      CodBeneficio: "(51) 65432-1098",
      date: "13/02/1990",
    },
    {
      CodReq: "Orion Skye",
      Descrição: "Q7R8S9",
      Status: "Avenida da Nebulosa, 222",
      CodNIS: "876.543.210-54",
      CodBeneficio: "(61) 54321-0987",
      date: "25/03/1988",
    },
    {
      CodReq: "Nova Star",
      Descrição: "T1U2V3",
      Status: "Rua do Universo, 111",
      CodNIS: "765.432.109-65",
      CodBeneficio: "(71) 43210-9876",
      date: "08/04/1992",
    },
      {
    CodReq: "Luna Starling",
    Descrição: "A1B2C3",
    Status: "Rua das Estrelas, 999",
    CodNIS: "321.654.987-00",
    CodBeneficio: "(11) 98765-1234",
    date: "01/01/1990",
  },
  {
    CodReq: "Maxwell Iron",
    Descrição: "D4E5F6",
    Status: "Avenida Galáxia, 456",
    CodNIS: "654.321.098-11",
    CodBeneficio: "(21) 87654-3210",
    date: "14/02/1985",
  },
  {
    CodReq: "Aurora Boreal",
    Descrição: "G7H8I9",
    Status: "Praça do Sol, 123",
    CodNIS: "987.654.321-22",
    CodBeneficio: "(31) 76543-2109",
    date: "23/03/1992",
  },
  {
    CodReq: "Orion Hunter",
    Descrição: "J1K2L3",
    Status: "Rua do Cometa, 333",
    CodNIS: "876.543.210-33",
    CodBeneficio: "(41) 65432-1098",
    date: "05/04/1988",
  },
  {
    CodReq: "Nebula Skye",
    Descrição: "M4N5O6",
    Status: "Avenida Astral, 777",
    CodNIS: "543.210.987-44",
    CodBeneficio: "(51) 54321-0987",
    date: "16/05/1995",
  },
  {
    CodReq: "Zephyr Gale",
    Descrição: "P7Q8R9",
    Status: "Rua das Nuvens, 222",
    CodNIS: "210.987.654-55",
    CodBeneficio: "(61) 43210-9876",
    date: "28/06/1980",
  },
  {
    CodReq: "Cyra Moon",
    Descrição: "S1T2U3",
    Status: "Praça dos Planetas, 888",
    CodNIS: "109.876.543-66",
    CodBeneficio: "(71) 32109-8765",
    date: "09/07/1993",
  },
  {
    CodReq: "Eclipse Dawn",
    Descrição: "V4W5X6",
    Status: "Avenida Lunar, 555",
    CodNIS: "654.321.098-77",
    CodBeneficio: "(81) 21098-7654",
    date: "20/08/1991",
  },
  {
    CodReq: "Sirius Blaze",
    Descrição: "Y7Z8A9",
    Status: "Rua do Vento, 444",
    CodNIS: "432.109.876-88",
    CodBeneficio: "(91) 10987-6543",
    date: "01/09/1987",
  },
  {
    CodReq: "Celeste Ray",
    Descrição: "B1C2D3",
    Status: "Rua da Aurora, 111",
    CodNIS: "321.098.765-99",
    CodBeneficio: "(11) 09876-5432",
    date: "15/10/1994",
  },
  {
    CodReq: "Phoenix Ember",
    Descrição: "E4F5G6",
    Status: "Avenida do Crepúsculo, 999",
    CodNIS: "210.987.654-10",
    CodBeneficio: "(21) 98765-4321",
    date: "29/11/1990",
  },
  {
    CodReq: "Vega Night",
    Descrição: "H7I8J9",
    Status: "Rua do Eclipse, 777",
    CodNIS: "109.876.543-21",
    CodBeneficio: "(31) 87654-3210",
    date: "10/12/1982",
  },
  {
    CodReq: "Andromeda Blaze",
    Descrição: "K1L2M3",
    Status: "Praça dos Astros, 555",
    CodNIS: "654.321.987-32",
    CodBeneficio: "(41) 76543-2109",
    date: "21/01/1995",
  },
  {
    CodReq: "Lyra Storm",
    Descrição: "N4O5P6",
    Status: "Rua do Horizonte, 333",
    CodNIS: "987.654.321-43",
    CodBeneficio: "(51) 65432-1098",
    date: "13/02/1990",
  },
  {
    CodReq: "Orion Skye",
    Descrição: "Q7R8S9",
    Status: "Avenida da Nebulosa, 222",
    CodNIS: "876.543.210-54",
    CodBeneficio: "(61) 54321-0987",
    date: "25/03/1988",
  },
  {
    CodReq: "Nova Star",
    Descrição: "T1U2V3",
    Status: "Rua do Universo, 111",
    CodNIS: "765.432.109-65",
    CodBeneficio: "(71) 43210-9876",
    date: "08/04/1992",
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
      item.CodReq.toLowerCase().includes(searchValue) ||
      item.Descrição.toLowerCase().includes(searchValue) ||
      item.Status.toLowerCase().includes(searchValue) ||
      item.CodNIS.toLowerCase().includes(searchValue) ||
      item.CodBeneficio.toLowerCase().includes(searchValue) ||
      item.date.toLowerCase().includes(searchValue)
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
              <th>CodReq</th>
              <th>Descrição</th>
              <th>Status</th>
              <th>CodNIS</th>
              <th>CodBeneficio</th>
              <th>Date</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.CodReq}</td>
                <td>{item.Descrição}</td>
                <td>{item.Status}</td>
                <td>{item.CodNIS}</td>
                <td>{item.CodBeneficio}</td>
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

        {/* Menu Suspenso para Selecionar Página */}
        <div className={styles.pagination}>
          <DropdownButton
            id="dropdown-basic-button"
            title={`Página ${currentPage}`}
            variant="secondary"
          >
            {[...Array(totalPages).keys()].map(page => (
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

      {/* Modal para adicionar um novo usuário */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCodReq">
              <Form.Label>CodReq</Form.Label>
              <Form.Control type="text" placeholder="CodReq" />
            </Form.Group>
            <Form.Group controlId="formDescrição">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" placeholder="Descrição" />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder="Status" />
            </Form.Group>
            <Form.Group controlId="formCodNIS">
              <Form.Label>CodNIS</Form.Label>
              <Form.Control type="text" placeholder="CodNIS" />
            </Form.Group>
            <Form.Group controlId="formCodBeneficio">
              <Form.Label>CodBeneficio</Form.Label>
              <Form.Control type="text" placeholder="CodBeneficio" />
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
            <Form.Group controlId="formCodReq">
              <Form.Label>CodReq</Form.Label>
              <Form.Control
                type="text"
                placeholder="CodReq"
                defaultValue={selectedItem?.CodReq || ""}
              />
            </Form.Group>
            <Form.Group controlId="formDescrição">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrição"
                defaultValue={selectedItem?.Descrição || ""}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Status"
                defaultValue={selectedItem?.Status || ""}
              />
            </Form.Group>
            <Form.Group controlId="formCodNIS">
              <Form.Label>CodNIS</Form.Label>
              <Form.Control
                type="text"
                placeholder="CodNIS"
                defaultValue={selectedItem?.CodNIS || ""}
              />
            </Form.Group>
            <Form.Group controlId="formCodBeneficio">
              <Form.Label>CodBeneficio</Form.Label>
              <Form.Control
                type="text"
                placeholder="CodBeneficio"
                defaultValue={selectedItem?.CodBeneficio || ""}
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
