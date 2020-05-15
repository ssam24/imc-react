import React from 'react';
import cabeceracalculo from './cabeceracalculo';
import cuerpocalculo from './cuerpo/cuerpocalculo';
let Calculador = () =>{
    return (
          <section>
           <cabeceracalculo/> 
           <cuerpocalculo></cuerpocalculo>
          </section>
    );
}

export default Calculador; 