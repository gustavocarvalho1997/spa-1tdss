import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"
import Section from "./components/Section"
import logoReact from "./assets/react.svg"

export default function App(){
  let novoConteudo = "Nova notícia!";
  let altLogo = "Logomarca da Tecnologia React"

  return(
    <>
      {/* Crie um Cabeçalho com um h1 um título e uma lista com 3 itens. */}
      <Cabecalho/>
      {/* Crie uma Section com uma div e 3 parágrafos com texto lorem de 3 linhas */}
      <Section novoProps={novoConteudo} uriLogoReact={logoReact} altLogo={altLogo}/>
      {/* Crie um rodapé com um p e o código do símbolo de copyright mais o texto que se segue. "Todos os meus direitos reservados. 2023" */}
      <Rodape/>
    </>
  )
}