 
import './App.css';
import './App1024px.css';
import './App768px.css';
import './App375px.css';

import Topo from './Topo/Topo';
import Pagina from './PaginaPrincipal/Pagina';
import Texto_Principal from './Texto_Principal/Texto_Principal';
import Rodape from './Rodape/Rodape';

function App() {
  return (
    <div className="App  bg_color_light  bg_color_black ">
      <header className="App-header">
        
        <Topo>
          
        </Topo>
<Pagina>
 
</Pagina>
    <Texto_Principal>
 
    </Texto_Principal>
<Rodape>

</Rodape>
      </header>
    </div>
  );
}

export default App;
