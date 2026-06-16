# Emy Nails

Site premium para nail designer/esmalteria com formulário de pedido de horário.

## Stack

- Next.js 15, React, TypeScript e App Router
- TailwindCSS, Framer Motion e componentes no estilo shadcn/ui
- Formulário client-side com redirecionamento de contato

## Funcionalidades

- Landing page premium com fundo escuro, glassmorphism e animações suaves
- Lista local de serviços com preço e duração
- Formulário com serviço, dia e horário
- Redirecionamento com mensagem preenchida automaticamente

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Copie as variáveis de ambiente:

```bash
cp .env.example .env
```

3. Configure o número do WhatsApp em `WHATSAPP_NUMBER`.

4. Rode o projeto:

```bash
npm run dev
```

Site: `http://localhost:3000`

## Variáveis de ambiente

```env
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
WHATSAPP_NUMBER="5547991429563"
```

## Rotas principais

- `/` landing page
- `/agendar` formulário de pedido de horário

## Onde editar cada parte

- Logo, menu e botão do topo: `src/components/site/navbar.tsx`
- Textos da home: `src/app/page.tsx`
- Hero: função `Hero` em `src/app/page.tsx`
- Benefícios: função `Benefits` em `src/app/page.tsx`
- Serviços exibidos na home e no formulário: `src/lib/booking-options.ts`
- Preços, duração e descrição dos serviços: `src/lib/booking-options.ts`
- Sobre o studio: função `Studio` em `src/app/page.tsx`
- Galeria: lista `gallery` em `src/app/page.tsx`
- Depoimentos: lista `testimonials` em `src/app/page.tsx`
- Perguntas frequentes: lista `faqs` em `src/app/page.tsx`
- Footer, Instagram, telefone e versículo: função `Footer` em `src/app/page.tsx`
- Texto lateral da página de agendamento: `src/app/agendar/page.tsx`
- Campos e mensagem do formulário: `src/app/agendar/booking-client.tsx`
- Número real de contato: `.env`, `.env.example` e fallback em `src/app/agendar/page.tsx`
- Imagens públicas do site: `public/images`

Para trocar uma imagem, coloque o arquivo em `public/images` e altere o caminho no componente.
Exemplo: `src="/images/unha1.jpeg"`.
