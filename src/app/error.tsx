"use client";

import { RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120622] px-6 text-white">
      <div className="purple-card max-w-md rounded-2xl p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-200">Ops</p>
        <h1 className="mt-3 text-3xl font-semibold">Algo saiu do fluxo.</h1>
        <p className="mt-3 text-sm text-white/70">
          Não conseguimos concluir esta ação agora. Tente novamente em instantes.
        </p>
        <Button className="mt-6" onClick={() => reset()}>
          <RefreshCw />
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}
