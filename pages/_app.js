import React, {useState, useReducer} from "react";
import '../styles/globals.css';
import Layout from "../components/UI/Layout";
import TheNavbar from "../components/UI/TheNavbar";
import TheFooter from "../components/UI/TheFooter";
import SidebarMenu from "../components/UI/SidebarMenu";
import NewNavbar from "../components/UI/NewNavbar";



import {ValueContext} from "../context/ValueContext";


function MyApp({Component, pageProps}) {

	const [initialValue, setInitialValue]=useState(0);
	const handleCart = () => {
		setInitialValue(initialValue + 1);
	};

	return <ValueContext.Provider value={{initialValue, setInitialValue, handleCart}}>
		<Layout>
			{/*<TheNavbar/>*/}
			<NewNavbar />
			{/*<SidebarMenu />*/}
			<Component {...pageProps} />
			<TheFooter />
		</Layout>
	</ValueContext.Provider>


}

export default MyApp;
