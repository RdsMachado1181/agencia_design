import "./Texto_Principal.css";

import Quadro_Text from "./Quadro_Text";


function Texto_Principal() {
    return (
      <div className="App">
        <section className="Texto_principal">
            <div className="texto_agrup">
          <h1>EXPERIÊNCIA DO TRABALHO </h1>
          <hr id="linha"></hr>
      <p>Há mais de 10 anos no mercado de Branding , Design Gráfico , Criação de Sites e Marketing <br/>
      Digital , nos empenhamos diariamente para entregar resultados que tragam impacto aos<br/>
      nossos clientes   </p>
      </div>
  <div className="container">
<div>
<Quadro_Text 
     data="JUNHO 2012 - 2016" titulo="WEB DESIGNER " 
     empresa ="Pied piper StartUp" 
     texto = "Criação de Landing Pages  sites institucionais e E-commerces comletamente personalizadas e otimizadas para buscadores"
/>
</div>
<div>
<Quadro_Text 
    data="AGOSTO 2016 - 2019"  titulo="PRODUCT DESIGNER " 
    empresa ="E -Corp"  
    texto="Criação de Modelos estrategicos 
    de conversão identificando o 
    cliente e mapeando toda a sua 
    jornada de compra"
/>
</div>
<div>
<Quadro_Text 
    data="FEVEREIRO 2019 - 2021"  titulo="DIGITAL CONSULTING " 
    empresa ="Arasaka Inc."  
    texto="Consultoria em estrategicas 
    digitais para todas as etapas  do
    ciclo do projeto a definição
    inicial até a execução"
/>
</div>

  </div>
        </section>
      </div>
    );
  }
  
  export default Texto_Principal;