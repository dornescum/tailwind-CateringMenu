import React, {useState, useReducer} from "react";
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/UI/Layout";
import TheFooter from "../components/UI/TheFooter";
import NewNavbar from "../components/UI/NewNavbar";
import Head from "next/head";



import {ValueContext} from "../context/ValueContext";


function MyApp({Component, pageProps}) {

	const [initialValue, setInitialValue]=useState(0);
	const handleCart = () => {
		setInitialValue(initialValue + 1);
	};

	return <ValueContext.Provider value={{initialValue, setInitialValue, handleCart}}>
		<Layout>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="virtual menu" content="virtual catering delivery company"/>
				<meta name='Next js' content='Html 5, Css 3, Javascript, React js, Next js, Tailwind css'/>
				<meta name='author' content='Mihai Dornescu'/>
				<link rel="icon" href="/favicon.ico"/>
				<title>Best food in town</title>
			</Head>
			<NewNavbar />
			<Component {...pageProps} />
			<TheFooter />
		</Layout>
	</ValueContext.Provider>


}

export default MyApp;
