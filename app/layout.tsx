"use client"


import localFont from "next/font/local";
import "./globals.css";

import React, { FC, useEffect, useMemo, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { SessionProvider } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";
import Appbar from "@/components/layouts/Appbar";
import { Providers } from "./providers";


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
    <html lang="en" style={{overflow: "auto"}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{backgroundColor: '#9CB1C9', color: 'black'}}
      >
          <AnimatePresence>
            <motion.div>
                  <Providers>
                  <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                      <WalletProvider wallets={[]}>
                  <WalletModalProvider>
                    <Appbar />
                        {children} 
                  </WalletModalProvider>
                  </WalletProvider>
                    </ConnectionProvider>
                  </Providers>
            </motion.div>
          </AnimatePresence>
      </body>
    </html>
  );
}