"use client"
import { motion } from "framer-motion";
import ShowButton from "./ShowButton";
export default function Hero() {
    return <div className="overflow-none">
        <motion.div className="flex justify-center">
            <motion.div  className="font-bold pt-8 max-w-lg text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} >
                Easiest Way to Exchange Crypto
            </motion.div>
        </motion.div>
        <div className="flex justify-center">
            <motion.div  className="font-bold text-2xl text-center pt-8 max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} >
            Fast, secure, and low-fee swaps for all your favorite Solana tokens.
            </motion.div>
       </div>
       <div className="flex justify-center">
            <motion.div initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} className="font-semibold text-md text-center pt-8 max-w-3xl">
                With cutting-edge blockchain technology and seamless wallet integration, enjoy fee-efficient and secure token swaps anytime, anywhere
            </motion.div>
       </div>
       <div className="flex justify-center">
            <motion.div initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} className="font-semibold text-md text-center pt-8 max-w-3xl">
                <ShowButton />
            </motion.div>
       </div>
    </div>
}