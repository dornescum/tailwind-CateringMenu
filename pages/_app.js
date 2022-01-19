import '../styles/globals.css';
import Layout from "../components/UI/Layout";
import TheNavbar from "../components/UI/TheNavbar";
import TheFooter from "../components/UI/TheFooter";

function MyApp({Component, pageProps}) {
	return <Layout>
		<TheNavbar/>
		<Component {...pageProps} />
		<TheFooter />
	</Layout>;

}

export default MyApp;
