import { ListaProdutos } from "../components/ListaProdutos"

export default function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {ListaProdutos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td><Link to={`/editar/produto/${produto.id}`}>Editar</Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total de Produtos: {ListaProdutos.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
