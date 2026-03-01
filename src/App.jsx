// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/Inicio";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sobre from "./components/Sobre";
import AssistenciaJuridica from "./components/AssistenciaJuridica";
import Contato from "./components/Contato";
import PaginaFinal from "./components/PaginaFinal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from "./components/PreLoader"; // Import do Preloader 
//import ChatbotTeste from "./components/ChatCustom";
import Equipe from "./components/Equipe";



function App() {
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  // Simulando um carregamento (por exemplo, carregamento de dados ou imagens)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Define como falso após o tempo
    }, 1000); // 3 segundos

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader /> // Exibe o Preloader se estiver carregando
      ) : (
        <>
        <div id="top"></div>

          <Header />
          <Inicio />
          <Sobre />
          <AssistenciaJuridica />
          <Equipe/>
          <Contato />
          <PaginaFinal />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default App;
