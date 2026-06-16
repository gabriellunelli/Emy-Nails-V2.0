import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Emy Nails | Studio premium",
    template: "%s | Emy Nails"
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png"
  },
  description:
    "Studio premium de unhas em gel, manutenção e nail art com atendimento delicado e acabamento sofisticado.",
  keywords: [
    "nail designer",
    "esmalteria",
    "alongamento em gel",
    "unhas em gel",
    "Emy Nails"
  ],
  openGraph: {
    title: "Emy Nails",
    description: "Studio premium de unhas em gel, manutenção e nail art.",
    images: ["/images/logo.png"],
    type: "website",
    locale: "pt_BR"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#120622"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {children}
        <Toaster richColors closeButton position="top-right" toastOptions={{ duration: 4200 }} />
      </body>
    </html>
  );
}
