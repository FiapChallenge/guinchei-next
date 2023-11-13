"use client";
import Image from "next/image";
import GuincheiLogo from "@/assets/GuincheiLogo.svg";
import Link from "next/link";
import TowTruck from "@/assets/icons/tow-truck-mirror.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [screenWidth, setScreenWidth] = useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }

  return (
    <header>
      <button
        type="button"
        className="text-md invisible !fixed bottom-5 right-5 z-50 rounded-full bg-azul-claro p-4 font-medium uppercase leading-tight text-white opacity-0 shadow-lg transition-all duration-300 ease-in-out hover:bg-azul-hover hover:shadow-2xl focus:bg-azul-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-azul-escuro active:shadow-2xl lg:bottom-10 lg:right-12"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-4 h-4 lg:h-6 lg:w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
      <header id="start" className="flex">
        <nav
          id="navbar"
          className="fixed left-0 z-50 w-full text-2xl duration-500 ease-in-out pl-2 sm:pr-4 sm:pl-4 top-0 bg-azul-escuro"
        >
          <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-7xl">
            <Link href="/">
              <Image
                className="transition duration-300 ease-in-out max-h-20 drop-shadow-lg hover:scale-110 md:max-h-24"
                src={GuincheiLogo}
                height={screenWidth < 340 ? 42 : 56}
                alt="Logo do Guinchei"
                priority
              />
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                aria-label="Fale Conosco"
                href="/solicitar-guincho"
                className="mr-3 flex items-center gap-2 rounded-full bg-azul-claro p-4 text-center font-medium text-white shadow-md duration-300 ease-in-out hover:-translate-y-2 hover:bg-azul-hover hover:shadow-xl  sm:px-4 sm:py-3 lg:mr-0 lg:bg-azul-claro"
              >
                <Image
                  src={TowTruck}
                  alt="Guincho Icon"
                  height={35}
                  width={35}
                />
                <p className="hidden md:block md:text-2xl hover:text-white">
                  Solicitar Guincho
                </p>
              </Link>
              <button
                id="navbar-toggle"
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center justify-center text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir o menu</span>
                <svg
                  id="hamburger-open"
                  className="w-16 p-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    id="hamburger"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
                <svg
                  id="hamburger-close"
                  className="hidden w-16 px-3 py-[9px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full mx-auto lg:order-1 lg:flex lg:w-auto"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 pl-3 pr-4 text-white rounded nav-link ${
                      pathname === "/" ? "bg-azul-claro lg:text-azul-claro" : ""
                    } lg:bg-transparent lg:p-0  lg:hover:text-azul-hover`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className={`block py-2 pl-3 pr-4 text-white rounded nav-link ${
                      pathname === "/contato"
                        ? "bg-azul-claro lg:text-azul-claro"
                        : ""
                    } lg:bg-transparent lg:p-0  lg:hover:text-azul-hover`}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </header>
  );
}
