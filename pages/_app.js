import '../styles/globals.css';
import Layout from "../components/UI/Layout";
import TheNavbar from "../components/UI/TheNavbar";
import TheFooter from "../components/UI/TheFooter";
import SidebarMenu from "../components/UI/SidebarMenu";
import NewNavbar from "../components/UI/NewNavbar";

function MyApp({Component, pageProps}) {
	return <Layout>
		{/*<TheNavbar/>*/}
		<NewNavbar />
		{/*<SidebarMenu />*/}
		<Component {...pageProps} />
		<TheFooter />
	</Layout>;

}

export default MyApp;
