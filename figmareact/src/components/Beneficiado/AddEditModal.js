import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddEditModal({ show, handleClose, title, item, onSave }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" defaultValue={item?.nome || ""} />
          </Form.Group>
          <Form.Group controlId="formCodnis">
            <Form.Label>Codnis</Form.Label>
            <Form.Control type="text" placeholder="Codnis" defaultValue={item?.codnis || ""} />
          </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Endereço" defaultValue={item?.endereco || ""} />
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="CPF" defaultValue={item?.cpf || ""} />
          </Form.Group>
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Telefone" defaultValue={item?.telefone || ""} />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Date" defaultValue={item?.date || ""} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onSave}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEditModal;
