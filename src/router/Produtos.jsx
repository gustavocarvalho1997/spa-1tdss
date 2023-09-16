import { Link } from "react-router-dom"
import  styles from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {MdDeleteForever as Excluir} from "react-icons/md";
import { BiMessageAltAdd as Adicionar } from "react-icons/bi"
import { useEffect, useState } from "react";

export default function Produtos() {

  document.title = "Lista de Produtos";

  const [counter, setCounter] = useState(0);

  const [counter2, setCounter2] = useState(0)

  useEffect(() => {
    console.log("useEffect será renderizado sempre que o componente ou qualquer objeto for atualizado!");
  });
  useEffect(() => {
    console.log("useEffect será renderizado apenas uma vez!");
  },[]);

  const [produtos, setProdutos] = useState([{}])

  useEffect(() => {
    console.log("useEffect será renderizado apenas se um objeto/variável/constante que estiver no array de dependências sofre uma atualização!");
    fetch("http://localhost:5000/produtos")
    .then((lista) => lista.json())
    .then((listProdutos) => {
      setProdutos(listProdutos)
    })
  },[counter2]);
  


  return (
    <div>
        <h1>Produtos</h1>

        <div>
          <button onClick={() => setCounter(counter + 1)}>COUNTER - {counter}</button>
        </div>
        <div>
          <button onClick={() => setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
        </div>

        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.tableHeader}>ID</th>
                <th className={styles.tableHeader}>NOME</th>
                <th className={styles.tableHeader}>PREÇO</th>
                <th className={styles.tableHeader}>EDITAR / EXCLUIR</th>
            </tr>
            </thead>
            <tbody>
            {produtos.map((produto,indice)=>(
                 <tr key={indice} className={styles.tableRow}>
                    <td className={styles.tableData}>{produto.id}</td>
                    <td className={styles.tableData}>{produto.nome}</td>
                    <td className={styles.tableData}>{produto.preco}</td>
                    <td className={styles.tableData}><Link to={`/editar/produtos/${produto.id}`}> <Editar/> </Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link></td>
                 </tr>
            ))}
        </tbody>
        <tfoot>
        <tr className={styles.tableRow}>
           <td className={styles.tableData} colSpan={4} style={{textAlign:"center"}}>PRODUTOS - INSERIR <Link to= {`/adicionar/produtos`}><Adicionar/></Link></td>
        </tr>
        </tfoot>
        </table>
        
    </div>
  )
}