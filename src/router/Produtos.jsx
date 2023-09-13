import { ListaProdutos } from "../components/ListaProdutos"
import { Link } from "react-router-dom"
import styles from "./Produtos.module.css"
import { AiFillEdit as Editar} from "react-icons/ai"
import { AiFillDelete as Excluir} from "react-icons/ai"

export default function Produtos() {
  document.title = "Lista de Produtos"
  //Estilos da tabela
  const tbEstilos = {
    textAlign: "center",
    letterSpacing: "2px",
    color: "#0000ff",
    TextDecoration: "none"
  }

  return (
    <div>
      <h1>Produtos</h1>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Id</th>
            <th className={styles.tableHeader}>Nome</th>
            <th className={styles.tableHeader}>Preço</th>
            <th className={styles.tableHeader}>Editar</th>
          </tr>
        </thead>
        <tbody>
          {ListaProdutos.map(produto => (
            <tr key={produto.id} style={tbEstilos}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td><Link to={`/editar/produto/${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={{textAlign: "center"}}>Total de Produtos: {ListaProdutos.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
