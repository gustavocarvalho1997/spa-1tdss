import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";


export default function AdicionarProdutos() {
  document.title = `Adicionar Produtos`;
  const navigate = useNavigate();


  const handleSubmit = (event) =>{
    event.preventDefault();
    
    //Verificando um id válido
    let id = 1;
    const procuraIdValido = () => {
      while(ListaProdutos.find(produto => produto.id == id)){
        id++;
      }
    }
    procuraIdValido();
    //Pega valor do input nome
    const nome = event.target.idNome.value;
    //Pega valor do input preco
    const preco = event.target.idPreco.value;
    //Adiciona novo produto na lista
    ListaProdutos.push({id,nome,preco});
    
    
    
    //Ordenar lista produtos pelo id
    ListaProdutos.sort((a,b) => a.id - b.id);
    alert("Produto adicionado com sucesso!");

    //Realizando o redirect.
    navigate("/produtos");
  }
  return (
    <>
      <div>
        <h1>Adicionar Produtos</h1>
        <h3>Informe o nome e preço do produto a ser adicionado:</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Adicionar Produto</legend>
              <div>
                <input type="hidden" name="id" />
              </div>
              <div>
                <label htmlFor="idNome">Nome:</label>
                <input type="text" name="nome" id="idNome"/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço:</label>
                <input type="number" name="preco" id="idPreco"/>
              </div>
              <div>
                <button>ADICIONAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
