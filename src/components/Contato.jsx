import React, { useMemo } from "react";

import Iconemail from "../assets/img/Emailicon.png";
import Icontele from "../assets/img/Telefone.png";
import Iconrelogio from "../assets/img/relogio.png";

/* mesma logo dourada */
import LogoOuro from "../assets/img/logoouro.png";

function Contato() {
  const items = useMemo(
    () => [
      {
        icon: Iconemail,
        alt: "Email",
        title: "Endereço de Email",
        value: "torresdemeryadvocacia@gmail.com",
        href: "mailto:torresdemeryadvocacia@gmail.com",
      },
      {
        icon: Icontele,
        alt: "Telefone",
        title: "Telefone",
        value: "(81) 97111-5922",
        href: "tel:+5581971115922",
      },
      {
        icon: Iconrelogio,
        alt: "Horário",
        title: "Horário de Funcionamento",
        value: "09:00 - 20:00",
      },
    ],
    []
  );

  return (
    <section id="section4" className="w-full bg-[#350000]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Panfleto 1 */}
          <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Informações de contato
            </h2>

            <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/80 sm:text-base">
              Estamos disponíveis para ajudá-lo. Entre em contato conosco para
              obter mais informações ou para agendar a consulta.
            </p>

            <div className="mt-6 space-y-5">
              {items.map((it) => (
                <div key={it.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <img
                      src={it.icon}
                      alt={it.alt}
                      className="h-6 w-6 object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white sm:text-base">
                      {it.title}
                    </p>

                    {it.href ? (
                      <a
                        className="mt-1 block truncate text-sm text-white/85 transition hover:text-white"
                        href={it.href}
                      >
                        {it.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-white/85">{it.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Panfleto 2 (logo dourada) */}
          <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
            <img
              src={LogoOuro}
              alt="Torres & D’Emery Advocacia"
              className="h-14 w-auto object-contain sm:h-16 lg:h-18"
              loading="lazy"
              draggable={false}
            />

            <p className="mt-6 text-sm text-white/80 sm:text-base">
              Entre em contato hoje mesmo
            </p>

            <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
              Para falar com um especialista.
            </p>

            <div className="mt-6">
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

            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contato;
