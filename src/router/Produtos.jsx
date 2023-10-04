import { Link, useNavigate } from "react-router-dom"
import  styles from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {MdDeleteForever as Excluir} from "react-icons/md";
import { BiMessageAltAdd as Adicionar } from "react-icons/bi"
import { useEffect, useState } from "react";
import ModalAction from "../components/ModalAction/ModalAction";

export default function Produtos() {
  //use navigate
  const navigate = useNavigate;

  document.title = "Lista de Produtos";

  const [produtos, setProdutos] = useState([{}]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

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
      setId(0)
    }
    
  },[open]);

  const handleUpdate = (id) => {
    setId(id);
    setOpen(true);
  }

  //delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/produtos/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
      })
      .then((response) => console.log(response))
      .catch(error => console.log(error))

      navigate("/produtos");
  }


  return (
    <div>
        <h1>Produtos</h1>

        {open ? <ModalAction open={open} setOpen={setOpen} idEditar={id} setId={setId} /> : "" }
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
                    <td className={styles.tableData}><Link onClick={() => handleUpdate(produto.id)}> <Editar/> </Link> | <Link onClick={() => handleDelete(produto.id)}> <Excluir/> </Link></td>
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