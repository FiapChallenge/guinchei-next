import React from "react";
import GithubLogo from "@/assets/icons/github.png";
import YoutubeLogo from "@/assets/icons/youtube.png";
import GuincheiLogo from "@/assets/GuincheiLogo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-base lg:pt-8 bg-cinza-claro">
      <div className="w-full max-w-screen-xl p-4 mx-auto bg-cinza-claro">
        <div className="md:flex md:justify-between">
          <div className="pb-4 pt-4 md:pt-0 m-4 mt-0 mb-8 ml-0 mr-10 obs-hidden md:mb-0 lg:mr-20">
            <a href="#start" className="flex justify-center">
              <Image
                width={184}
                src={GuincheiLogo}
                className="duration-300 ease-in-out grayscale hover:grayscale-0"
                alt="Logo do Guinchei"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:gap-6 md:w-10/12 md:grid-cols-3 md:gap-10 md:text-left lg:grid-cols-[1.5fr,2fr,1fr]">
            <div className="obs-hidden" style={{ ["--delay" as any]: 3 }}>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Contato
              </h2>
              <ul className="font-medium text-cinza-footer">
                <li className="flex justify-center mb-4 transition-colors md:justify-start">
                  <a
                    href="mailto:incguinchei@gmail.com"
                    className="flex justify-center gap-1 break-all group hover:underline group-hover:text-orange-500 md:justify-start"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 shrink-0 fill-none"
                      viewBox="0 0 512 512"
                    >
                      <rect
                        x="48"
                        y="96"
                        width="416"
                        height="320"
                        rx="40"
                        ry="40"
                        className="group-hover:stroke-orange-500"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                      <path
                        className="group-hover:stroke-orange-500"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M112 160l144 112 144-112"
                      />
                    </svg>
                    <span className="break-words group-hover:text-orange-500 group-hover:underline">
                      incguinchei@gmail.com
                    </span>
                  </a>
                </li>
                <li className="flex justify-center mb-4 transition-colors md:justify-start">
                  <a href="tel:+551120936530" className="flex gap-1 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 shrink-0 fill-none"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
                        className="group-hover:stroke-blue-500"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                      />
                    </svg>
                    <span className="hover:underline group-hover:text-blue-500">
                      (11) 2675-2428
                    </span>
                  </a>
                </li>
                <li className="flex justify-center transition-colors md:justify-start">
                  <a
                    className="flex gap-1 group"
                    target="_blank"
                    href="https://wa.me/5511997434003?text=Olá!%20Gostaria%20de%20solicitar%20um%20guincho."
                  >
                    <svg
                      className="w-6 shrink-0 group-hover:fill-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:text-green-500 group-hover:underline">
                      (11) 99743-4003
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="obs-hidden" style={{ ["--delay" as any]: 6 }}>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Integrantes - RM
              </h2>
              <ul className="font-medium text-cinza-footer">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://github.com/Asteriuz"
                    className="duration-300 ease-in-out hover:text-white hover:underline"
                  >
                    Augusto Barcelos Barros - 98078
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://github.com/gribl88"
                    className="duration-300 ease-in-out hover:text-white hover:underline"
                  >
                    Gabriel Gribl de Carvalho - 96270
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://github.com/GabrielSouzaQ"
                    className="duration-300 ease-in-out hover:text-white hover:underline"
                  >
                    Gabriel Souza de Queiroz - 98570
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/GabsBecca"
                    className="duration-300 ease-in-out hover:text-white hover:underline"
                  >
                    Gabriela Zanotto Alves Rodrigues - 551629
                  </a>
                </li>
              </ul>
            </div>
            <div className="obs-hidden" style={{ ["--delay" as any]: 9 }}>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Navegação
              </h2>
              <ul className="flex flex-col font-medium gap-y-4 text-cinza-footer">
                <li>
                  <Link
                    className="duration-300 ease-in-out hover:text-white hover:underline"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="duration-300 ease-in-out hover:text-white hover:underline"
                    href="/contato"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    className="duration-300 ease-in-out hover:text-white hover:underline"
                    href="/solicitar-guincho"
                  >
                    Solicite o Guincho
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex flex-wrap items-center justify-center text-center gap-x-6">
          <div className="flex items-center justify-center mt-4 space-x-5 sm:mt-0">
            <a target="_blank" href="https://github.com/Asteriuz/FiapChallenge">
              <Image
                className="transition-all duration-300 ease-in-out grayscale hover:grayscale-0"
                src={GithubLogo}
                width={48}
                alt="logo do github"
              />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCTAMms64mj1OIKF6FRvfEsA"
            >
              <Image
                className="transition-all duration-300 ease-in-out grayscale hover:grayscale-0"
                width={48}
                src={YoutubeLogo}
                alt="logo do youtube"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3 mt-2 text-base text-white bg-cinza-escuro">
        <a
          id="copyright"
          target="_blank"
          href="https://github.com/FiapChallenge"
          className="duration-300 ease-in-out hover:text-white hover:underline"
        >
          <p>Copyright © 2023. Guinchei, Inc.</p>
        </a>
      </div>
    </footer>
  );
}
