import '../styles/globals.css';
import Layout from "../components/UI/Layout";
import TheNavbar from "../components/UI/TheNavbar";

function MyApp({Component, pageProps}) {
	return <Layout>
		<TheNavbar/>
		<Component {...pageProps} />
	</Layout>;

}

export default MyApp;
