import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LogoDourada from "../assets/img/logoouro.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={[
          "w-full bg-[#350000] transition-all",
          isScrolled
            ? "fixed top-0 left-0 py-2 shadow-md z-50"
            : "relative py-6 z-50",
        ].join(" ")}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between py-2">
            <div className="flex items-start">
              <img
                src={LogoDourada}
                alt="Logo"
                className="w-28 object-contain md:w-40"
                draggable={false}
              />
            </div>

            {/* Botão do menu: mobile + tablet (até lg). Desktop fica inalterado (nav central). */}
            <div className="flex items-center lg:hidden">
              <button
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                className="rounded-md p-2 ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <div className="flex h-5 w-6 flex-col justify-between">
                  <span
                    className={[
                      "block h-0.5 w-full bg-[#CCAC73] transition-transform",
                      isOpen ? "translate-y-2 rotate-45" : "",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "block h-0.5 w-full bg-[#CCAC73] transition-opacity",
                      isOpen ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "block h-0.5 w-full bg-[#CCAC73] transition-transform",
                      isOpen ? "-translate-y-2 -rotate-45" : "",
                    ].join(" ")}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* DESKTOP (inalterado): nav central absoluto */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <nav className="flex items-center gap-8">
              {/* OFFSETS DO DESKTOP INALTERADOS */}
              <Link
                to="top"
                smooth
                duration={300}
                offset={-100}
                className="cursor-pointer font-medium text-[#CCAC73] hover:text-white"
              >
                INÍCIO
              </Link>
              <Link
                to="section1"
                smooth
                duration={300}
                offset={-220}
                className="cursor-pointer font-medium text-[#CCAC73] hover:text-white"
              >
                SOBRE NÓS
              </Link>
              <Link
                to="section3"
                smooth
                duration={300}
                offset={-220}
                className="cursor-pointer font-medium text-[#CCAC73] hover:text-white"
              >
                ASSISTÊNCIA JURÍDICA
              </Link>
              <Link
                to="section2"
                smooth
                duration={300}
                offset={-220}
                className="cursor-pointer font-medium text-[#CCAC73] hover:text-white"
              >
                EQUIPE
              </Link>
              <Link
                to="section4"
                smooth
                duration={300}
                offset={-220}
                className="cursor-pointer font-medium text-[#CCAC73] hover:text-white"
              >
                CONTATO
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#CCAC73] opacity-20" />

        {/* Sidebar: mobile + tablet (até lg). */}
        <div
          id="mobile-menu"
          className={[
            "fixed top-0 right-0 z-[60] h-full bg-[#350000] transition-transform lg:hidden",
            // Mais confortável no tablet
            "w-72 sm:w-80",
            isOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <p className="text-sm font-semibold text-white/80">Menu</p>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-md p-2 ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Fechar menu"
            >
              <span className="text-[#CCAC73]">X</span>
            </button>
          </div>

          <div className="px-6 pt-6">
            <ul className="flex flex-col gap-2">
              {/* OFFSETS DO MOBILE/TABLET INALTERADOS (iguais ao seu mobile) */}
              <li>
                <Link
                  to="top"
                  smooth
                  duration={300}
                  offset={-100}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-[#CCAC73] transition hover:bg-white/10 hover:text-white"
                >
                  INÍCIO
                </Link>
              </li>
              <li>
                <Link
                  to="section1"
                  smooth
                  duration={300}
                  offset={-80}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-[#CCAC73] transition hover:bg-white/10 hover:text-white"
                >
                  SOBRE NÓS
                </Link>
              </li>
              <li>
                <Link
                  to="section3"
                  smooth
                  duration={300}
                  offset={-80}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-[#CCAC73] transition hover:bg-white/10 hover:text-white"
                >
                  ASSISTÊNCIA JURÍDICA
                </Link>
              </li>
              <li>
                <Link
                  to="section2"
                  smooth
                  duration={300}
                  offset={-80}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-[#CCAC73] transition hover:bg-white/10 hover:text-white"
                >
                  EQUIPE
                </Link>
              </li>
              <li>
                <Link
                  to="section4"
                  smooth
                  duration={300}
                  offset={-80}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-[#CCAC73] transition hover:bg-white/10 hover:text-white"
                >
                  CONTATO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={closeMenu}
          />
        )}
      </header>
    </>
  );
}
