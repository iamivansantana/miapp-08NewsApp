import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
  //definir la categoria   
  const[categoria,guardaCategoria]=useState('');
  const[noticias,guardarNoticias]=useState([]);

  useEffect(()=>{

    const consultarAPI = async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=fc1a570661774fbfbb97c56a867c0227`;
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();

  },[categoria]);
  return (
      <>
      {/* {max-width: 100% width:auto height:auto}  */}
      <Header 
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario 
          guardaCategoria={guardaCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
      <Footer />
      </>
  );
}

export default App;
 



