import { useSpring, animated } from "@react-spring/web";
import LogoDourada from "../assets/img/Advogadasjuntas.png";

const Inicio = () => {
  const props = useSpring({
    from: { transform: "translateX(200%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 650 },
    reset: false,
    loop: false,
  });

  const props2 = useSpring({
    from: { transform: "translateX(-200%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 650 },
    reset: false,
    loop: false,
  });

  return (
    <section id="section0" className="relative overflow-hidden bg-[#350000] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-8">
          {/* Texto */}
          <animated.div style={props2} className="w-full text-[#CCAC73] md:w-1/2">
            <p className="text-sm font-bold sm:text-base">
              Bem-vindo ao Torres &amp; D&apos;Emery
            </p>

            <h1 className="mt-4 text-[26px] font-extrabold leading-tight sm:text-3xl md:text-4xl md:leading-snug">
              Não apenas protegemos seus direitos, mas oferecemos soluções
              jurídicas que cuidam do que realmente importa, com ética e
              excelência
            </h1>

            <div className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base lg:text-justify">
              <p>
                Um escritório de advocacia dedicado a oferecer soluções jurídicas
                estratégicas e eficientes. Atuamos com ética, transparência e
                excelência, sempre buscando a melhor defesa dos interesses de
                nossos clientes. Nosso time é composto por profissionais
                altamente qualificados e especializados em diversas áreas do
                Direito, proporcionando um atendimento personalizado e focado na
                resolução ágil e eficaz de demandas jurídicas. Não adie a
                solução dos seus problemas. Estamos prontos para te ajudar.
              </p>
            </div>

            <a
              href="https://wa.me/5581971115922?text=Olá!%20Gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full sm:w-auto"
            >
              <span className="inline-flex w-full items-center justify-center rounded-lg bg-[#690101] px-6 py-3 font-bold text-white shadow-md transition hover:bg-[#CCAC73] hover:text-[#350000] sm:w-auto">
                Entre em contato!
              </span>
            </a>
          </animated.div>

          {/* Imagem */}
          <animated.div style={props} className="w-full md:w-1/2">
            <div className="relative flex w-full items-center justify-center">
              <img
                src={LogoDourada}
                alt="Foto das advogadas"
                className={[
                  "z-0 opacity-100 rounded-none border-0 object-contain",
                  "w-[18rem] sm:w-[20rem] md:w-[22rem] lg:w-96",
                  "transform md:-translate-y-10 lg:-translate-y-36",
                ].join(" ")}
                draggable={false}
              />

              {/* Labels: só no desktop (lg+) */}
              <div className="absolute left-0 top-1/2 hidden h-full -translate-y-1/2 items-center justify-center pl-4 lg:flex">
                <div className="inline-block rounded-lg bg-black/80 px-3 py-2 text-left text-[#CCAC73] shadow-md">
                  <div className="text-2xl font-extrabold">Eduarda D&apos;Emery</div>
                  <div className="mt-1 text-base text-white/90">59.572 OAB/PE</div>
                </div>
              </div>

              <div className="absolute right-0 top-1/2 hidden h-full -translate-y-1/2 items-center justify-center pr-4 lg:flex">
                <div className="inline-block rounded-lg bg-black/80 px-3 py-2 text-right text-[#CCAC73] shadow-md">
                  <div className="text-2xl font-extrabold">Eduarda Torres</div>
                  <div className="mt-1 text-base text-white/90">59.106 OAB/PE</div>
                </div>
              </div>
            </div>

            {/* Labels: mobile + tablet (até lg) embaixo */}
            <div className="mt-5 flex w-full flex-col items-center gap-3 lg:hidden">
              <div className="w-full max-w-[22rem] rounded-lg bg-black/80 px-3 py-2 text-center text-[#CCAC73] shadow-md">
                <div className="text-xl font-extrabold">Eduarda D&apos;Emery</div>
                <div className="mt-1 text-sm text-white/90">59.572 OAB/PE</div>
              </div>
              <div className="w-full max-w-[22rem] rounded-lg bg-black/80 px-3 py-2 text-center text-[#CCAC73] shadow-md">
                <div className="text-xl font-extrabold">Eduarda Torres</div>
                <div className="mt-1 text-sm text-white/90">59.106 OAB/PE</div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
