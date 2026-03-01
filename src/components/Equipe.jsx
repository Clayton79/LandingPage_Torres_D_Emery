import React, { useMemo } from "react";
import Slider from "react-slick";

import EduardaMery from "../assets/img/EduardaMery(frente).jpeg";
import EduardaTorres from "../assets/img/EduardaTorres.png";

const team = [
  {
    name: "Eduarda D'Emery",
    image: EduardaMery,
    imgPos: "object-[50%_15%]",
    bio:
      "Sócia-fundadora do Torres & D’Emery Advocacia, é formada em Direito pela Universidade Católica de Pernambuco e atualmente cursa Pós-Graduação em Contratos e Responsabilidade Civil. Atua com dedicação nas áreas Cível, de Família e Sucessões, Consumidor, Administrativo (com foco em servidores públicos), Tributário e Empresarial. Acredita que cada caso representa uma história única, que merece atenção, empatia e estratégia. Seu propósito é oferecer um atendimento próximo e humanizado, aliando conhecimento jurídico e sensibilidade para alcançar soluções justas e eficazes para cada cliente.",
  },
  {
    name: "Eduarda Torres",
    image: EduardaTorres,
    imgPos: "object-[50%_18%]",
    bio:
      "A sócia-fundadora do escritório Torres & D’Emery Advocacia é reconhecida por sua atuação com dedicação, ética e excelência na defesa dos interesses de seus clientes. Ela é Graduada em Direito pela Universidade Católica de Pernambuco (UNICAP) e possui sólida formação jurídica e vasta experiência nas áreas Cível, Bancária, do Consumidor e Criminal. Atualmente, ela está cursando pós-graduação em Contratos e Responsabilidade Civil, o que consolida seu conhecimento técnico. Seu método de trabalho une competência técnica, estratégia e sensibilidade, buscando oferecer soluções jurídicas completas, seguras e inovadoras, e alcançar resultados justos, consistentes e sustentáveis.",
  },
];

function Equipe() {
  const settings = useMemo(
    () => ({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      pauseOnHover: true,
      speed: 500,
      adaptiveHeight: false,
      accessibility: true,
    }),
    []
  );

  return (
    <section id="section2" className="w-full bg-[#350000]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12 lg:py-14">
        <h2 className="text-center text-2xl font-semibold text-[#CCAC73] sm:text-3xl">
          Conheça nossa Equipe
        </h2>

        <div className="mt-8">
          <Slider {...settings}>
            {team.map((person) => (
              <div key={person.name} className="px-1 sm:px-2">
                <article className="rounded-2xl bg-white/5 p-4 sm:p-6 ring-1 ring-white/10">
                  <div className="grid items-start gap-4 sm:gap-6 lg:grid-cols-[420px_1fr]">
                    {/* Moldura quadrada */}
                    <div className="w-full max-w-[360px] mx-auto lg:mx-0">
                      <div className="aspect-square overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
                        <img
                          src={person.image}
                          alt={person.name}
                          className={[
                            "h-full w-full",
                            "object-cover", // preenche sem distorcer [web:32]
                            person.imgPos ?? "object-center",
                            "select-none",
                          ].join(" ")}
                          loading="lazy"
                          draggable={false}
                        />
                      </div>
                    </div>

                    {/* Texto ao lado (desktop) / abaixo (mobile) */}
                    <div className="text-white">
                      <p className="text-lg font-semibold sm:text-xl">
                        {person.name}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Equipe;
