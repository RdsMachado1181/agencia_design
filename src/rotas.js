
import { React  } from  "react-dom";
import { BrowserRoute ,  Routes ,  Route  } from 'react-router-dom';


import Topo from "./Topo/Topo";
import Pagina from "./PaginaPrincipal/Pagina.js";
import Texto_Principal from "./Texto_Principal/texto_Principal.js";
import Rodape from "./Rodape/Rodape.js";

function rotas() {
  return (
  <div>

    <BrowserRoute>
    
     <Routes>

      <Route path ='./Topo' element = { < Topo /> }   />
      <Route path ='./Pagina' element = { < Pagina /> }   />
      <Route path ='./Texto_Principal ' element = { < Texto_Principal /> }   />
      <Route path ='./Rodape ' element = { < Rodape /> }   />

     </Routes>
    </BrowserRoute>

    </div>
  )  
}

export default rotas;

