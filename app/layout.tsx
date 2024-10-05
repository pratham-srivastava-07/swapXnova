"use client"

import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { useEffect, useState } from "react";

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) {
      return null; 
  }
  return (
    <html lang="en">
      <Providers>
         <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <body
                  className={`${geistSans.variable} ${geistMono.variable} antialiased `}
                  style={{backgroundColor: '#9CB1C9'}}
                  >
                  {children}
                  </body>
                </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
      </Providers>
    </html>
  );
}
