import React from "react";
import { AppProps } from "next/app";
import TextChat from "../components/TextChat";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />

      <TextChat />
    </>
  );
};

export default MyApp;
