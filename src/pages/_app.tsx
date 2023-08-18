import React from "react";
import { AppProps } from "next/app";
import TextChat from "../components/TextChat";
import Footer from "../components/Footer";
import "@/styles/globals.css";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Prepare4Tech{pageProps.title}</title>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<ProgressBar />
			<TextChat />
			<Footer />
		</>
	);
};

export default MyApp;
