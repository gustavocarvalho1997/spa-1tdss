import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";


export default function EditarProdutos() {
  document.title = "Editar Produtos"

  // O HOOK useParams()
  const {id} = useParams();
  const produtoRecuperadoById = ListaProdutos.filter((produto) =>{
    if(produto.id == parseInt(id)){
      return produto
    }
});


  return (
    <>
      <h1>Editar Produtos</h1>
      <p>Produto selecionado: {id}</p>
      <p>Produto selecionado: {produtoRecuperadoById[0].nome}</p>
    </>
  )
}
