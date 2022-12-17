

function Quadro_Text(props) {
    return (
      <div className="App">
        <section className="Quadro ">
       
       <div className="Quadro_principal">

<p className="data "> {props.data}</p>

<h4 className="titulo"> {props.titulo}</h4>

<p className="empresa">{props.empresa}</p>

<p className="texto">{props.texto}</p>
       </div>

        </section>
   </div>
    );
  }
  
  export default Quadro_Text;