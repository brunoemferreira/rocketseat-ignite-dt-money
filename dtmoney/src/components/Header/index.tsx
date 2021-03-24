import logoimg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoimg} alt="dt money" />
        <button type="button">
          Nova Transação
      </button>
      </Content>
    </Container>
  )
}