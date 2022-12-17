import './Rodape.css';

import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin  from '../assets/linkedin.png';
import dribble  from '../assets/dribble.png';
import behance  from '../assets/behance.png';
import google_plus  from '../assets/google-plus.png';

function Rodape() {
    return (
      <div className="App">
        <header className="Rodape">
      


          <p>Ajudamos a criar uma personalidade digital construindo sua<br/> 
marca no ambiente online utilizando estrat~egias, ferramentas <br/>
        e tecnologias personalizadas. 
           </p>
         
           <picture><img src= { facebook }></img> 
           <img src= { twitter }></img> 
           <img src= { linkedin }></img> 
           <img src= { dribble }></img> 
           <img src= { behance }></img> 
           <img src= { google_plus }></img>
           </picture>

           <p id='copy'>Copyright 2022 &copy; <span>Rodrigo Machado</span></p>
        </header>
      </div>
    );
  }
  
  export default Rodape;