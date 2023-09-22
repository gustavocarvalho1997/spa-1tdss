import "./ModalInserir.scss";

export default function ModalInserir(props) {
  document.title = "CADASTRAR"
  if(props.open){
    return (
      <div className="container">
        <h1>Modal Inserir</h1>
        <div>
          <button onClick={() => props.setOpen(false)}> X </button>
          <form>
            <fieldset>
              <legend>Cadastrar Produto</legend>
              <div>
                <label htmlFor="idNome">Nome:</label>
                <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto"/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço:</label>
                <input type="number" name="preco" id="idPreco" placeholder="Digite o valor do produto"/>
              </div>
              <div>
                <button>CADASTRAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
