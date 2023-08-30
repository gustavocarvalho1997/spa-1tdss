export default function Section(props){
  return(
    <>
      {/* Crie uma Section com uma div e 3 parágrafos com texto lorem de 3 linhas */}
      <section>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim libero unde eveniet reiciendis dolores consequuntur quaerat cum molestias, labore nihil esse numquam similique non, obcaecati in quae. Numquam, doloremque non.</p>
        </div>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim libero unde eveniet reiciendis dolores consequuntur quaerat cum molestias, labore nihil esse numquam similique non, obcaecati in quae. Numquam, doloremque non.</p>
        </div>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim libero unde eveniet reiciendis dolores consequuntur quaerat cum molestias, labore nihil esse numquam similique non, obcaecati in quae. Numquam, doloremque non.</p>
        </div>
        <div>
          <p>{props.novoProps}</p>
        </div>
        <div>
          <img src={props.uriLogoReact} alt={props.altLogoReact} />
        </div>
      </section>
    </>
  )
}