"use client"


import localFont from "next/font/local";
import "./globals.css";

import React, {  useEffect, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { AnimatePresence, motion } from "framer-motion";
import Appbar from "@/components/layouts/Appbar";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster";



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
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(135deg,_#0D0E12,_#1C1C2B,_#2E2E3A,_#0A0B10)] bg-[length:200%_200%] animate-[gradientPulse_6s_ease-in-out_infinite]`}
  style={{ color: 'white' }}
>
          <AnimatePresence>
            <motion.div>   
                  <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                      <WalletProvider wallets={[]}>
                  <WalletModalProvider>
                    <Appbar />
                        {children} 
                    <Footer />
                  </WalletModalProvider>
                  </WalletProvider>
                    </ConnectionProvider>
                    <Toaster />
            </motion.div>
          </AnimatePresence>
      </body>
    </html>
  );
}