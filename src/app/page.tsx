import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Gem,
  HeartHandshake,
  Instagram,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wand2
} from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { SiteNavbar } from "@/components/site/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  additionalServices,
  bookingServices,
  type BookingService
} from "@/lib/booking-options";
import { formatCurrency } from "@/lib/utils";

const gallery = [
  {
    src: "/images/unha11.jpeg",
    title: "Brilho em gel",
    label: "Acabamento"
  },
  {
    src: "/images/unha2.jpeg",
    title: "Cuidado das unhas",
    label: "Precisão"
  },
  {
    src: "/images/unha3.jpeg",
    title: "Manicure delicada",
    label: "Ritual"
  },
  {
    src: "/images/unha5.jpeg",
    title: "Arte personalizada",
    label: "Personalidade"
  },
  {
    src: "/images/unha6.jpeg",
    title: "Alongamento",
    label: "Estrutura"
  },
  {
    src: "/images/unha9.jpeg",
    title: "Cores intensas",
    label: "Brilho"
  },
  {
    src: "/images/unha7.jpeg",
    title: "Detalhes finos",
    label: "Nail art"
  },
  {
    src: "/images/unha1.jpeg",
    title: "Finalização",
    label: "Elegância"
  }
];

const testimonials = [
  {
    name: "Elisama H.",
    text: "Minha nota é 5, porque você tem muito capricho e cuidado no que faz, sem falar que não mede esforços pra fazer a decoração que a gente quer😍",
    metric: "5.0"
  },
  {
    name: "Anônima.",
    text: `Simplesmente PERFEITO! ⭐⭐⭐⭐⭐

Fiz o alongamento em gel. As unhas ficaram super naturais, com um acabamento impecável e um brilho maravilhoso! Dá pra ver o cuidado em cada detalhe, desde a preparação até a finalização.

Além disso, o atendimento foi incrível, me senti super confortável e bem atendida o tempo todo. Extremamente caprichosa, paciente e realmente se preocupa em entregar um resultado do jeitinho que a gente sonha 💅✨`,
    metric: "5.0"
  },
  {
    name: "Anônima",
    text: `Eu daria nota 4,5 gosto muito do seu trabalho, suas unhas são lindas e sempre ficam muito bem feitas
obrigada pelo atendimento e pelo carinho de sempre! ❤️`,
    metric: "4.5"
  }
];

const faqs = [
  {
    question: "Como faço para reservar um horário?",
    answer:
      "Você escolhe o serviço, a data e o horário que prefere. Depois envia o pedido pronto via Whatsapp e confirmamos a disponibilidade."
  },
  {
    question: "O horário já fica confirmado?",
    answer:
      "Ainda não. Eu confirmo o encaixe e combino qualquer detalhe final com você."
  },
  {
    question: "Posso levar referências?",
    answer:
      "Sim. Fotos, cores e inspirações ajudam a criar um resultado mais fiel ao seu estilo."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_0%,rgba(217,70,239,0.22),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(147,51,234,0.18),transparent_30%),#120622]">
      <SiteNavbar />
      <Hero />
      <Benefits />
      <Services services={bookingServices} />
      <Studio />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[86vh] px-4 pb-12 pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/unha4.jpeg"
          alt="Unhas em gel com acabamento azul e detalhes dourados"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,6,34,0.97)_0%,rgba(18,6,34,0.84)_42%,rgba(18,6,34,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_34%,rgba(217,70,239,0.28),transparent_30%)]" />
      </div>

      <div className="container grid min-h-[calc(86vh-8rem)] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <MotionReveal className="max-w-3xl">
          <Badge variant="accent" className="mb-6">
            <Sparkles className="size-3.5" />
            Studio de Nail Design
          </Badge>
          <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            Unhas elegantes, delicadas e feitas para durar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            A Emy Nails é para quem gosta de acabamento fino, brilho impecável e um atendimento
            tranquilo, pensado para valorizar suas mãos com naturalidade.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/agendar">
                Quero agendar
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">Conhecer serviços</a>
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["4.8/5", "avaliação"],
              ["gel", "toque fino"],
              ["sob medida", "cada detalhe"]
            ].map(([value, label]) => (
              <div key={label} className="glass-dark rounded-2xl p-4">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.12} className="hidden lg:block">
          <div className="glass-panel relative ml-auto max-w-md rounded-2xl p-4">
            <div className="absolute -right-8 -top-8 size-28 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/certificado.jpeg"
                alt="Certificado profissional da Emy Nails"
                width={720}
                height={900}
                className="aspect-[4/5] object-cover"
              />
            </div>
            <div className="mt-4 grid min-w-0 grid-cols-2 gap-3">
              <div className="min-w-0 rounded-2xl bg-violet-ink p-4 text-white">
                <ShieldCheck className="mb-6 size-5 text-fuchsia-200" />
                <p className="text-2xl font-semibold">Certificada</p>
                <p className="mt-1 text-xs leading-5 text-white/60">técnica profissional</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-fuchsia-200/20 bg-fuchsia-300/10 p-4 text-white">
                <Wand2 className="mb-6 size-5 text-fuchsia-200" />
                <p className="text-2xl font-semibold">Gel</p>
                <p className="mt-1 break-words text-xs leading-5 text-white/60">
                  acabamento fino
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Cuidado acolhedor",
      text: "Um atendimento calmo, atento e pensado para você se sentir à vontade."
    },
    {
      icon: Gem,
      title: "Resultado elegante",
      text: "Alongamento e esmaltação com acabamento fino, leve e natural."
    },
    {
      icon: MessageCircle,
      title: "Escolha sem pressa",
      text: "Veja serviço, data, horário e valor antes de enviar seu pedido."
    }
  ];

  return (
    <section className="container py-20">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <MotionReveal key={item.title} delay={index * 0.08}>
            <div className="purple-card h-full rounded-2xl p-6 text-white">
              <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-fuchsia-300/20 text-fuchsia-100">
                <item.icon className="size-5" />
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function Services({ services }: { services: BookingService[] }) {
  return (
    <section id="servicos" className="container py-20">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <MotionReveal>
          <Badge>Serviços</Badge>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Escolha o acabamento que combina com o seu momento.
          </h2>
        </MotionReveal>
        <Button asChild variant="outline">
          <Link href="/agendar">
            Agendar agora
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <MotionReveal key={service.id} delay={index * 0.07}>
            <article className="purple-card group h-full rounded-2xl p-5 text-white transition hover:-translate-y-1 hover:shadow-glow">
              <div
                className="mb-8 h-1.5 w-16 rounded-full"
                style={{ backgroundColor: service.color }}
              />
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-white/70">
                {service.description}
              </p>
              <div className="mt-6 grid gap-3 border-t border-fuchsia-200/20 pt-4">
                <div className="grid grid-cols-2 gap-2">
                  <ServicePrice label="Aplicação" value={formatCurrency(service.applicationPriceCents)} />
                  {service.maintenancePriceCents ? (
                    <ServicePrice
                      label="Manutenção"
                      value={formatCurrency(service.maintenancePriceCents)}
                    />
                  ) : null}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white/70">
                  <Clock3 className="size-4 text-fuchsia-100" />
                  Tempo: {service.durationLabel}
                </div>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>

      <MotionReveal className="mt-8">
        <div className="purple-card rounded-2xl p-5 text-white">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <Badge variant="accent">Serviços adicionais</Badge>
              <h3 className="mt-3 text-2xl font-semibold">Pequenos cuidados extras</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">
              Valores para reparos e remoções combinados junto ao atendimento principal.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {additionalServices.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-fuchsia-200/20 bg-violet-950/40 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                  </div>
                  <span className="shrink-0 rounded-xl bg-fuchsia-300/10 px-3 py-2 text-sm font-semibold text-fuchsia-100">
                    {item.priceLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
      <MotionReveal className="mt-8">
        <div className="purple-card rounded-2xl p-5 text-white">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <Badge variant="accent">Combos</Badge>
              <h3 className="mt-3 text-2xl font-semibold">Combos totalmente personalizados!</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">
              Eu e você conseguimos criar um combo específico para cobrir todas as suas necessidades!
            </p>
          </div>
          <p className="text-alert-combo">*O valor do combo é analisado com base nos procedimentos e vezes que deseja realizar.</p>
        </div>
        
      </MotionReveal>
    </section>
  );
}

function ServicePrice({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-fuchsia-200/20 bg-fuchsia-300/10 px-3 py-2">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
        {label}
      </p>
      <p className="mt-1 font-semibold text-fuchsia-100">{value}</p>
    </div>
  );
}

function Studio() {
  return (
    <section id="studio" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[#120622]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.34),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(217,70,239,0.18),transparent_30%)]" />
      <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <Badge variant="dark">Sobre o studio</Badge>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Técnica precisa, estética delicada e tempo para cuidar de você.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            Cada atendimento valoriza a unha natural, respeita sua rotina e busca um resultado
            sofisticado sem exageros. A ideia é sair com mãos bonitas, confortáveis e com a sua cara.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Materiais premium", "Biossegurança", "Atendimento acolhedor", "Cuidado sob medida"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
                  <CheckCircle2 className="size-4 text-fuchsia-200" />
                  {item}
                </div>
              )
            )}
          </div>
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="/images/unha8.jpeg"
              alt="Esmaltação delicada em tom claro"
              width={700}
              height={900}
              className="h-full min-h-80 rounded-2xl object-cover shadow-glow"
            />
            <div className="grid gap-4">
              <div className="glass-dark rounded-2xl p-6">
                <HeartHandshake className="mb-8 size-6 text-fuchsia-200" />
                <p className="text-3xl font-semibold text-white">Cuidado</p>
                <p className="text-sm text-white/60">em cada detalhe</p>
              </div>
              <Image
                src="/images/unha10.jpeg"
                alt="Unhas finalizadas com acabamento em gel"
                width={700}
                height={700}
                className="aspect-square rounded-2xl object-cover shadow-glow"
              />
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="container py-20">
      <MotionReveal className="mb-10 max-w-2xl">
        <Badge variant="accent">Galeria</Badge>
        <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
          Inspirações para quem ama unhas bem acabadas.
        </h2>
      </MotionReveal>
      <div className="grid gap-4 md:grid-cols-4">
        {gallery.map((item, index) => (
          <MotionReveal key={item.src} delay={index * 0.06}>
            <figure className="group relative h-80 overflow-hidden rounded-2xl shadow-soft md:h-[28rem]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-ink/80 via-violet-ink/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-100">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-semibold">{item.title}</p>
              </figcaption>
            </figure>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    "Escolha o acabamento",
    "Defina o melhor dia",
    "Selecione um horário",
    "Envie o pedido"
  ];

  return (
    <section className="container py-20">
      <div className="purple-card rounded-2xl p-6 text-white md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionReveal>
            <Badge>Reserva</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal">
              Seu pedido de horário em poucos passos.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Você escolhe o que deseja fazer, confere o valor e envia as informações prontas
              para a equipe confirmar o atendimento.
            </p>
          </MotionReveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((step, index) => (
              <MotionReveal key={step} delay={index * 0.06}>
                <div className="rounded-2xl border border-fuchsia-200/20 bg-violet-950/40 p-5">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-fuchsia-300/20 text-sm font-bold text-fuchsia-100">
                    {index + 1}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold">{step}</h3>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="container py-20">
      <MotionReveal className="mb-10 max-w-2xl">
        <Badge variant="accent">Depoimentos</Badge>
        <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
          Clientes que percebem o cuidado nos detalhes.
        </h2>
      </MotionReveal>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <MotionReveal key={item.name} delay={index * 0.08}>
            <article className="purple-card h-full rounded-2xl p-6 text-white">
              <div className="flex items-center gap-1 text-fuchsia-200">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-8 text-base leading-7 text-white/80">&quot;{item.text}&quot;</p>
              <div className="mt-8 flex items-center justify-between border-t border-fuchsia-200/20 pt-5">
                <p className="font-semibold">{item.name}</p>
                <Badge>{item.metric}</Badge>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="container py-20">
      <div className="mx-auto max-w-3xl">
        <MotionReveal className="text-center">
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white">
            Perguntas frequentes
          </h2>
        </MotionReveal>
        <div className="purple-card mt-10 divide-y divide-fuchsia-200/20 rounded-2xl text-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {faq.question}
                <span className="text-fuchsia-200 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#120622] px-4 py-10 text-white">
      <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-lg font-semibold">Emy Nails</p>
          <p className="mt-1 text-sm text-white/60">
            Studio de Nail Design.
          </p>
          <p className="mt-5 max-w-xl text-sm italic leading-6 text-fuchsia-100/80">
            &quot;Tudo o que fizerem, façam de todo o coração, como para o Senhor.&quot;
            Colossenses 3:23
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button asChild variant="outline">
            <a href="https://www.instagram.com/nailsbyemy.bnu" target="_blank" rel="noreferrer">
              <Instagram />
              Instagram
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://wa.me/5547991429563"
              target="_blank"
              rel="noreferrer"
              aria-label="Chamar Emy Nails pelo contato"
            >
              <Phone />
              +55 47 99142-9563
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
