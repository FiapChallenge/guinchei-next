import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./styles/animation.css";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Head from "next/head";
import { useEffect } from "react";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guinchei",
  description: "Chamar um guincho nunca foi tão fácil!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body
        className={
          roboto.className +
          // if top of page add scroll-top class
          " scroll-top vsc-initialized"
        }
      >
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
      <Script src="js/flowbite.min.js" />
      <Script src="js/nav.js" />
      <Script src="js/scroll.js" />
    </html>
  );
}
