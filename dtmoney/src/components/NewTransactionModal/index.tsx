import Modal from 'react-modal';

import { Container } from './styles';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título" />

        <input type="number"
          placeholder="valor" />

        <input
          placeholder="Categoria" />

        <button type="submit">
          Cadastrar
          </button>

      </Container>

    </Modal>
  )
}