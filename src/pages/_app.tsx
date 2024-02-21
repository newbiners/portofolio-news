import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
