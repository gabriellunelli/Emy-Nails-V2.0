import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.24),transparent_36%),#120622] px-6 text-white">
      <div className="purple-card flex w-full max-w-sm flex-col items-center gap-5 rounded-2xl p-8 text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-fuchsia-500 text-white shadow-glow">
          <Sparkles className="size-6 animate-pulse" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-200">Emy Nails</p>
          <h1 className="mt-2 text-2xl font-semibold">Preparando sua experiência</h1>
        </div>
      </div>
    </main>
  );
}
