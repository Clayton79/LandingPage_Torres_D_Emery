import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagem1 from '../assets/img/Administrativo2.jpeg'
import Imagem2 from '../assets/img/Consumidor.jpg' 
import Imagem3 from '../assets/img/Contratos.jpg'
import Imagem4 from '../assets/img/Tributario.jpg'
import Imagem5 from '../assets/img/Justa.jpg'

function AssistenciaJuridica() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const areas = [
    { img: Imagem1, label: 'Administrativo' },
    { img: Imagem2, label: 'Consumidor' },
    { img: Imagem3, label: 'Contratos' },
    { img: Imagem4, label: 'Bancário' },
    { img: Imagem5, label: 'Direito Civil' },
  ];

  return (
    <section id="section3" className="relative bg-[#350000] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#CCAC73] text-sm sm:text-base font-medium">Como Podemos Ajudar</p>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">Áreas de Prática Jurídica</h2>

        <div className="mt-8">
          <Slider {...settings}>
            {areas.map((a, idx) => (
              <div key={idx} className="px-2">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img src={a.img} alt={a.label} className="w-full h-64 sm:h-72 md:h-96 object-cover" />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-[#CCAC73] px-2 py-2 rounded text-base sm:text-lg md:text-xl font-bold ring-1 ring-[#CCAC73]/40">{a.label}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default AssistenciaJuridica;
