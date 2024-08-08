import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

import './home.css';
import { useState } from "react";

import api from "../../services/api";
import React, { Component } from 'react';
import App from "../../App";


function Home () { 

 
 
    
        
      return (
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https: //fonts.googleapis.com/css2? family= Noto+Sans+Display:wght@200 & family= Roboto:ital,wght@0,300;1,300 & family= Ubuntu:wght@300 & display=swap" rel="stylesheet " />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
          <link rel="shortcut icon" type="image/png" href="./assets/img/WEGGIE-PROJECT-TCC-2K24/3.png" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <meta charSet="UTF-8" />
          <title>Home</title>
          <header className="css-selector">
            <div className="navbar">
              <a href="index.html"><img src="./src/IMG/logo-7.png" id="logo" /></a>
              
            </div>
            <section className="slogan">
              <h1>WEGGIE</h1>
            </section>
            
          </header>
          {/* Swiper */}
          <section className="tittle-logos">
            <h1>MARCAS</h1>
          </section>
          <div className="swiper">
            <div className="swiper-wrapper ">
              <div className="swiper-slide">
                <img src="./src/IMG/hyundai-logo.png" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/Fiat_logo.png" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/vw-logo.svg" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/chevrolet-logo.png" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/toyota-logo.png" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/renault-logo.png" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/honda-logo.png" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/peugeot-logo.jpg" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/citroen-logo.png" />
              </div>
              <div className="swiper-slide">
                <img src="./src/IMG/Nissan-logo.jpg" />
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
          {/* Swiper JS */}
          {/* Initialize Swiper */}
          <div className="header-inner-content">
            <div className="header-bottom-side">
              <div className="header-bottom-side-left">
                <h1>Alugue o Carro dos Seus Sonhos</h1>
                <p>
                  Alugue ja o carro do seu interesse para o dia a dia, com ofertas exclusivas da WEGGIE, seu desejo automobilistico deve ser atendido!
                </p>
                <div className="button">
                  <a href="aluguel.html">
                    <button>Saiba Mais</button>
                  </a>
                </div>
              </div>
              <div className="header-bottom-side-right">
                <img src="./src/IMG/nivus-cinza.png" />
              </div>
            </div>
          </div>
        
            <div className="banner">
              <section className="cards">
                <div className="itens-c1">
                  <img src="./src/IMG/garantia-png.png" id="l-c1" />
                  <h1>GARANTIA</h1>
                  <p>
                    Oferecemos garantia sobre o produto,
                    contra qualquer defeito de fabricação que o mesmo venha a apresentar.
                  </p>
                </div>
              </section>
              <section className="cards2">
                <div className="itens-c2">
                  <img src="./src/IMG/desconto.png" id="l-c2" />
                  <h1>DESCONTOS</h1>
                  <p>
                    Descontos semanais com ofertas exclusivas, oferecendo viabilidade e
                    ofertas do mês com descontos limitados!
                  </p>
                </div>
              </section>
              <section className="cards3">
                <div className="itens-c3">
                  <img src="./src/IMG/suporte.png" id="l-c3" />
                  <h1>SUPORTE</h1>
                  <p>
                    Suporte disposto a responder qualquer dúvida a qualquer momento do dia,
                    tentando sempre ajudar o cliente em situações embaraçosas!
                  </p>
                </div>
              </section>
            </div>
            <div className="cellphone-app">
              <div className="cellphone-content">
                <div className="cellphone-content-left">
                  <img src="./src/IMG/cellphone-app.png" />
                </div>
                <div className="cellphone-content-right">
                  <h1>Baixe o nosso app gratuitamente</h1>
                  <p>Utilizando o app, você terá descontos exclusivos toda semana!</p>
                  <button>
                    <a href="#">
                      <img src="./src/IMG/disponivel-google-play-badge.png" />
                    </a>
                    <a href="#">
                      <img src="./src/IMG/disponivel-appstore-badge.png" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="services-weggie">
              <div className="services-weggie-content">
                <div className="tittle-services-weggie">
                  <h1>Na WEGGIE</h1>
                </div>
                <div className="cards-services-weggie">
                  <a href="venda.html">
                    <button>Comprar</button>
                  </a>
                  <a href="venda.html">
                    <button>Vender</button>
                  </a>
                  <a href="aluguel.html">
                    <button>Alugar</button>
                  </a>
  

                </div>
              </div>
            </div>
          </div>


  


      );

      
     
      
    }




  export default Home;