import React from "react";
import Logo from "../assets/img/logoouro.png";

function PaginaFinal() {
  return (
    <footer id="sectionFinal" className="w-full bg-[#350000] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          {/* Coluna esquerda (mobile centralizado / desktop à esquerda) */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <img
              src={Logo}
              alt="Torres & D’Emery Advocacia"
              className="h-16 w-auto object-contain sm:h-20"  // h-25 não existe; use escala Tailwind [web:102]
              loading="lazy"
              draggable={false}
            />

            <a
              href="https://www.instagram.com/torresedemeryadvocacia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram: Torres & D’Emery Advocacia"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <svg
                fill="currentColor"
                className="h-6 w-6 text-white"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7-29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>

          {/* Coluna direita: 1 col mobile / 2 cols tablet / 3 cols desktop */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <section className="text-center lg:text-left">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <ul className="mt-4 space-y-2 text-white/90">
                <li><a className="transition hover:text-white" href="#top">Início</a></li>
                <li><a className="transition hover:text-white" href="#section1">Sobre Nós</a></li>
                <li><a className="transition hover:text-white" href="#section3">Áreas de Atuação</a></li>
              </ul>
            </section>

            <section className="text-center lg:text-left">
              <h3 className="text-lg font-semibold">Áreas de Atuação</h3>
              <ul className="mt-4 space-y-2 text-white/90">
                <li><a className="transition hover:text-white" href="#section3">Administrativo</a></li>
                <li><a className="transition hover:text-white" href="#section3">Consumidor</a></li>
                <li><a className="transition hover:text-white" href="#section3">Contratos</a></li>
                <li><a className="transition hover:text-white" href="#section3">Bancário</a></li>
                <li><a className="transition hover:text-white" href="#section3">Direito Civil</a></li>
              </ul>
            </section>

            {/* Contato: ocupa a linha toda no tablet para ficar “intuitivo” */}
            <section className="text-center sm:col-span-2 lg:col-span-1 lg:text-left">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="mt-4 space-y-2 text-white/90">
                <p>
                  <a className="transition hover:text-white" href="tel:+5581971115922">
                    (81) 97111-5922
                  </a>
                </p>
               <p className="whitespace-nowrap">
  <a className="transition hover:text-white" href="mailto:torresdemeryadvocacia@gmail.com">
    torresdemeryadvocacia@gmail.com
  </a>
</p>

              </div>
            </section>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/70">
          © 2024 FluxusTech - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default PaginaFinal;
