"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#studio", label: "Studio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" }
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-fuchsia-200/20 bg-[#251038]/82 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl border border-white/70 bg-white p-1.5 shadow-glow">
            <Image
              src="/images/logo.png"
              alt="Logo Emy Nails"
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-semibold tracking-normal text-white">Emy Nails</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-fuchsia-200">
              Studio
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm">
            <Link href="/agendar">
              <CalendarDays />
              Agendar
            </Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="focus-ring flex size-10 items-center justify-center rounded-xl bg-white/10 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "mx-auto mt-2 grid max-w-6xl overflow-hidden rounded-2xl border border-fuchsia-200/20 bg-[#251038]/92 shadow-glass backdrop-blur-2xl transition-all md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2">
            <Link href="/agendar">
              <CalendarDays />
              Agendar horário
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
