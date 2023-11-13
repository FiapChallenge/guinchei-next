import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-24 mb-4 min-h-[calc(100vh-533px)] flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-y-2">
        <h1 className="text-6xl font-bold text-center">404</h1>
        <h2 className="text-3xl font-bold text-center">
          Página não encontrada
        </h2>
        <Link
          className="mt-8 p-4 rounded-2xl bg-azul-claro text-white text-xl"
          href="/"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
