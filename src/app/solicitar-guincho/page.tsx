"use client";
import React, { useRef, FormEvent, useState, useEffect } from "react";
import "./style.css";
import Link from "next/link";

export default function SolicitarGuincho() {
  const submitBtn = useRef<HTMLInputElement>(null);
  const formsSection = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dados, setDados] = useState<Dados[]>([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [endereco, setEndereco] = useState("");
  const [marca, setMarca] = useState("");
  const [modelosDisponiveis, setModelosDisponiveis] = useState<String[]>([""]);
  const [modelo, setModelo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/dados/");
      const data: Dados[] = await response.json();
      setDados(data);
      setModelosDisponiveis(data.map((dado) => dado.nome));
    };
    fetchData();
  }, []); // Run once on component mount

  async function submitClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // fetch
    try {
      const data = {
        nomeCompleto: nome,
        email: email,
        marca: marca,
        modelo: modelo,
        endereco: endereco,
        imagem: imagem,
        status: "Pendente",
        dataCriacao: new Date().toISOString(),
      };

      const response = await fetch("http://localhost:3000/api/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the response status is OK (status code 200-299)
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Reset form
        // setNome("");
        // setEmail("");
        // setImagem("");
        // setEndereco("");
        // setMarca("");
        // setModelo("");
        // console.log(`Server responded with status: ${response.status}`);
        alert("Erro ao enviar solicitação, tente novamente mais tarde.");
      }
    } catch (error) {
      // console.log(error);
      alert("Erro ao enviar solicitação, tente novamente mais tarde.");
    }
  }

  const marcas = dados.map((dado) => dado.marca);
  const marcasUnicas = marcas.filter(
    (elem, pos) => marcas.indexOf(elem) === pos
  );

  useEffect(() => {
    if (marca === "") {
      setModelosDisponiveis(dados.map((dado) => dado.nome));
      return;
    }
    const modelosDaMarca = dados
      .filter((dado) => dado.marca === marca)
      .map((dado) => dado.nome);
    setModelosDisponiveis(modelosDaMarca);
  }, [marca, dados]);

  return (
    <div className="main-forms">
      {isSubmitted ? (
        <div className="flex flex-col mx-2 gap-y-2 justify-center items-center p-8 mt-4 outline rounded-3xl">
          <h2 className="text-4xl font-bold text-center">
            Solicitação enviada com sucesso!
          </h2>
          <p className="text-cinza-escuro mt-2 mb-2 text-2xl text-center">
            Em breve entraremos em contato com você por e-mail.
          </p>
          <p className="text-cinza-escuro mb-4 text-2xl text-center">
            Obrigado por escolher o Guinchei!
          </p>
          <Link
            className="button flex items-center justify-center gap-x-2"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              width="35px"
              height="35px"
              className="inline"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                </g>
              </g>
            </svg>
            <p className="text-xl">Voltar para a página inicial</p>
          </Link>
        </div>
      ) : (
        <section ref={formsSection} className="forms-section">
          <h1 id="title">Solicitar Guincho</h1>
          <form className="form-flex" onSubmit={submitClick}>
            <div className="row">
              <div className="form-group ">
                <label className="label" htmlFor="fname">
                  Nome Completo
                </label>
                <input
                  className="input-form"
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="email">
                  Endereço de email
                </label>
                <input
                  className="input-form"
                  pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                  type="email"
                  id="email"
                  autoComplete="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label className="label" htmlFor="marca">
                  Marca do Veículo
                </label>
                <input
                  id="marca"
                  name="marca"
                  type="text"
                  className="border-0 shadow-[0px_8px_19px_-13px_rgba(0,0,0,0.6)] rounded-lg"
                  list="marcas"
                  onChange={(e) => setMarca(e.target.value)}
                  value={marca}
                />
                <datalist id="marcas">
                  {marcasUnicas.map((marca, index) => (
                    <option key={index}>{marca}</option>
                  ))}
                </datalist>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="modelo">
                  Modelo do Veículo
                </label>
                <input
                  id="modelo"
                  name="modelo"
                  type="text"
                  className="border-0 shadow-[0px_8px_19px_-13px_rgba(0,0,0,0.6)] rounded-lg"
                  list="modelos"
                  onChange={(e) => setModelo(e.target.value)}
                  value={modelo}
                />
                <datalist id="modelos">
                  {modelosDisponiveis.map((modelo, index) => (
                    <option key={index}>{modelo}</option>
                  ))}
                </datalist>
              </div>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Imagens do acidente
              </label>
              <input
                id="input-file"
                type="file"
                accept="image/*,.pdf"
                multiple
                required
                value={imagem}
                onChange={(e) => {
                  setImagem(e.target.value);
                }}
              />
            </div>
            <div className="form-group extended">
              <label className="label" htmlFor="email">
                Endereço do Acidente
              </label>
              <input
                className="input-form extended"
                type="text"
                name="acidente"
                id="acidente"
                placeholder="Endereço"
                required
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <p id="hint-subtitle" className="text-cinza-claro ml-4 mb-2">
              Todos os campos são obrigatórios
            </p>
            <input
              ref={submitBtn}
              type="submit"
              value="Pedir o Guincho"
              className="button ml-4"
            />
          </form>
        </section>
      )}
    </div>
  );
}
