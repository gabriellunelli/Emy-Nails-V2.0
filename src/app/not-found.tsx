import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120622] px-6 text-white">
      <div className="purple-card max-w-md rounded-2xl p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-200">
          Emy Nails
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Página não encontrada</h1>
        <p className="mt-3 text-sm text-white/70">
          Esse caminho não existe ou foi movido.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">
            <ArrowLeft />
            Voltar para o início
          </Link>
        </Button>
      </div>
    </main>
  );
}
