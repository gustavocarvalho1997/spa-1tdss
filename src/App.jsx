import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"
import { Outlet } from "react-router-dom";

export default function App(){

  return(
    <>
      {/* Crie um Cabeçalho com um h1 um título e uma lista com 3 itens. */}
      <Cabecalho/>
      {/* Crie uma Section com uma div e 3 parágrafos com texto lorem de 3 linhas */}
      <Outlet/>
      {/* Crie um rodapé com um p e o código do símbolo de copyright mais o texto que se segue. "Todos os meus direitos reservados. 2023" */}
      <Rodape/>
    </>
  )
}