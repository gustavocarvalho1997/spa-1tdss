import { Link } from "react-router-dom";

export default function Cabecalho(){
  return(
    <>
      {/* Crie um Cabeçalho com um h1 um título e uma lista com 3 itens. */}
      <header>
        <h1>Vite + React / Coded By - RM552466</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          
        </ul>
      </header>
    </>
  )
}