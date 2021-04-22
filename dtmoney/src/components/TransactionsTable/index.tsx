import { useEffect } from "react";
import { Container } from "./styles";

export default function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de webSites</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de webSites</td>
            <td className="withdraw">R$-12.000</td>
            <td>Desenvolvimento</td>
            <td>01/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}