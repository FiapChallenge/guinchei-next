import { NextResponse } from "next/server";

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; caso for usar https

// post with parameters
export async function POST(req: Request) {
  const {
    nomeCompleto,
    email,
    marca,
    modelo,
    imagem,
    endereco,
    dataCriacao,
    status,
  }: any = await req.json();

  try {
    const data = {
      nomeCompleto,
      email,
      marca,
      modelo,
      imagem,
      endereco,
      dataCriacao,
      status,
    };

    const response = await fetch(
      "http://127.0.0.1:8080/JavaChallenge/api/casos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return NextResponse.json(data);
  } catch (error) {
    throw new Error("Erro ao enviar solicitação, tente novamente mais tarde.");
  }
}
