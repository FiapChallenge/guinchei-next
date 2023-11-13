import "./contato.css";
import "@/app/styles/home.css";
import Asteriuz from "@/assets/cards/asteriuz.jpg";
import Gabs from "@/assets/cards/gabs.jpg";
import Gabsouza from "@/assets/cards/gabsouza.jpg";
import Gabgribl from "@/assets/cards/gabgribl.jpg";
import Image from "next/image";

export default function Contato() {
  return (
    <div className="my-20">
      <section id="cards">
        <div className="mb-10 container-cards">
          <h1 className="mb-10 font-bold">🃏 | Integrantes Cards</h1>
          <div className="card">
            <div className="image">
              <Image
                alt="Profile Augusto"
                width={227}
                height={227}
                src={Asteriuz}
              />
            </div>
            <div className="content">
              <h3 className="text-lg font-bold">Augusto Barcelos Barros</h3>
              <p>RM: 98078</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image
                alt="Profile Gabriela"
                width={227}
                height={227}
                src={Gabs}
              />
            </div>
            <div className="content">
              <h3 className="text-lg font-bold">Gabriela Z. Alves Rodrigues</h3>
              <p>RM: 551629</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image
                alt="Profile Gabriel Souza"
                width={227}
                height={227}
                src={Gabsouza}
              />
            </div>
            <div className="content">
              <h3 className="text-lg font-bold">Gabriel Souza de Queiroz</h3>
              <p>RM: 98570</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image
                alt="Profile Gabriel Gribl"
                width={227}
                height={227}
                src={Gabgribl}
              />
            </div>
            <div className="content">
              <h3 className="text-lg font-bold">Gabriel Gribl de Carvalho</h3>
              <p>RM: 96270</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-24 xl:mb-0">
        <ul className="px-2 lista-flex">
          <h2 className="text-2xl font-bold">👤| Integrantes - RM </h2>
          <li>
            Augusto Barcelos Barros <br /> RM: 98078
          </li>
          <li>
            Gabriela Zanotto Alves Rodrigues <br /> RM: 551629
          </li>
          <li>
            Gabriel Souza de Queiroz <br /> RM: 98570
          </li>
          <li>
            Gabriel Gribl de Carvalho <br /> RM: 96270
          </li>
        </ul>
      </section>
      <section className="mt-20">
        <div className="container-link">
          <h2 className="text-2xl font-bold">☁️| Link Repositório Github</h2>
          <a
            href="https://github.com/Asteriuz/guinchei-next"
            target="_blank"
          >
            github.com/Asteriuz/guinchei-next
          </a>
        </div>
      </section>
    </div>
  );
}
