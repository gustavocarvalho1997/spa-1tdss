import { Link } from "react-router-dom"
import  styles from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {MdDeleteForever as Excluir} from "react-icons/md";
import { BiMessageAltAdd as Adicionar } from "react-icons/bi"
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";

export default function Produtos() {

  document.title = "Lista de Produtos";

  const [produtos, setProdutos] = useState([{}]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(!open){
      console.log("useEffect será rendereizado apenas uma vez!");
    fetch("http://localhost:5000/produtos",{
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
      })
      .then((response)=> response.json())
      .then((listaProdutos)=>{
          setProdutos(listaProdutos);
      })
    }
  },[open]);

  


  return (
    <div>
        <h1>Produtos</h1>

        {open ? <ModalInserir open={open} setOpen={setOpen} /> : "" }
        <Link onClick={()=> setOpen(true)}>Add - Produto</Link>

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