
import Logo01 from '../assets/logo.png'; // importação do logo no topo da pãgina 
import botao_ligth from '../assets/moon.png';

import  { useState } from 'react';

import '../Topo/Topo.css';

function Topo() {
 
 


  return (
    <header className=" App   Topo ">
    <picture className='picture'> <img id='logo1' src={  Logo01 }></img>

         
        
    <button > <img id='botao_ligth' src={  botao_ligth }></img></button> </picture>
      </header>
    
  );
}

export default Topo;