import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";

import { BookingClient } from "@/app/agendar/booking-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Agendar horário"
};

export default function BookingPage() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER ?? "5547991721644";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_18%_0%,rgba(217,70,239,0.22),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(147,51,234,0.18),transparent_28%),#120622] px-4 py-6 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-fuchsia-200/20 bg-[#251038]/82 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft />
            Início
          </Link>
        </Button>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <MessageCircle className="size-4 text-fuchsia-200" />
          Emy Nails
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <aside className="lg:sticky lg:top-8 lg:h-fit">
          <Badge variant="accent">
            <ShieldCheck className="size-3.5" />
            Pedido de horário
          </Badge>
          <h1 className="mt-5 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Monte seu horário ideal com calma.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/70">
            Escolha o serviço, confira o valor e selecione a data que melhor encaixa na sua rotina.
            Depois confirmo os detalhes com você.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {["Sem cadastro", "Valor visível", "Confirmo seu horário"].map((item) => (
              <div key={item} className="purple-card rounded-2xl px-4 py-3 text-sm font-semibold text-white">
                {item}
              </div>
            ))}
          </div>
        </aside>

        <BookingClient whatsappNumber={whatsappNumber} />
      </section>
    </main>
  );
}
