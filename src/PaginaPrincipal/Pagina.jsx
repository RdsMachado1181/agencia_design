 import  './Pagina.css';

 import Foto_principal from '../assets/banner.png';
function Pagina() {
  return (
    <div className="App">
      <section className='Pagina'>
 
 <div className='foto_container'>

<picture><img id='foto_banner' src={ Foto_principal }></img></picture>

 </div>
 <div className='texto_container'>

<div className='texto_pagina'>
<p>BRANDING /UI / UX / TECNOLOGIA </p>

<h1>Agencia de Branding  <br/> 
 <span>e design digital</span> </h1>
</div>


 </div>


</section>
    </div>
  );
}

export default Pagina;