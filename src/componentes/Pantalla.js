import React from "react";
import '../hojas-de-estilo/Pantalla.css';

/*Este componente foi criado como função flecha

const Pantalla = () => (
  <div className='input'></div>  
); 
*/

const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;