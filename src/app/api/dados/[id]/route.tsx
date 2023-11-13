import { NextResponse } from "next/server";

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; caso for usar https

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const res = await fetch(`http://127.0.0.1:8080/${id}`);
    const data: Dados = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    // Para conseguir dar deploy no Vercel, é necessário que não retorne erro
    return NextResponse.json([]);
  }
}
