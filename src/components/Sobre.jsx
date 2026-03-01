import ImagemS from "../assets/img/EduardaMery.png";
import ImagemS2 from "../assets/img/EduardaTorres.png";

function Sobre() {
  const benefits = [
    { title: "Atendimento próximo e humanizado", desc: "Escuta ativa para entender cada caso com atenção e empatia." },
    { title: "Soluções ágeis e estratégicas", desc: "Foco na eficiência e na melhor resolução para o cliente." },
    { title: "Transparência e ética", desc: "Compromisso total com a verdade e com os princípios do Direito." },
    { title: "Escritório moderno e atualizado", desc: "Acompanhamos mudanças e usamos tecnologia para otimizar o atendimento." },
    { title: "Comunicação clara", desc: "Você acompanha cada etapa com orientações diretas e objetivas." },
  ];

  const PersonCard = ({ img, name, oab, align = "items-center" }) => (
    <div className={`flex flex-col ${align} gap-3`}>
      <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[280px]">
        <div className="aspect-square overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover object-[50%_15%]"
            loading="lazy"
            draggable={false}
          />
        </div>

        <div className="mt-3 rounded-xl bg-black/20 p-3 ring-1 ring-white/10">
          <p className="text-base font-semibold text-[#CCAC73]">{name}</p>
          <p className="text-sm text-white/80">{oab}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="section1" className="bg-[#350000] py-12 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#CCAC73] sm:text-4xl">Sobre Nós</h2>
          <p className="mt-2 text-base text-white/80 sm:text-lg">Por que os clientes nos escolhem?</p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:items-start">
          {/* Foto esquerda: DESKTOP = esquerda */}
          <div className="order-1 md:order-1 lg:order-1">
            <PersonCard
              img={ImagemS}
              name="Eduarda D'emery"
              oab="OAB 59.572"
              align="items-center lg:items-end"
            />
          </div>

          {/* Conteúdo: DESKTOP = meio | TABLET = largura toda embaixo das fotos */}
          <div className="order-3 md:order-3 md:col-span-2 lg:order-2 lg:col-span-1">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
              <p className="text-sm font-semibold tracking-wide text-white/70">Nosso compromisso</p>

              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                Atendimento jurídico com estratégia e cuidado.
              </h3>

              <ul className="mt-6 space-y-4">
                {benefits.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#CCAC73]/15 ring-1 ring-[#CCAC73]/30">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-[#CCAC73]" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.2-3.2a1 1 0 011.42-1.42l2.49 2.49 6.49-6.49a1 1 0 011.42 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#CCAC73] sm:text-base">{b.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/80">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Foto direita: DESKTOP = direita | TABLET = ao lado da esquerda na primeira linha */}
          <div className="order-2 md:order-2 lg:order-3">
            <PersonCard
              img={ImagemS2}
              name="Eduarda Torres"
              oab="OAB 59.106"
              align="items-center lg:items-start"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
