import { useState } from 'react';

import logoimg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoimg} alt="dt money" />
        <button type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova Transação
      </button>
      </Content>
    </Container>
  )
}