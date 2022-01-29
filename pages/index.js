import fs from "fs/promises";
import path from "path";
import Layout from "../components/UI/Layout";
import FoodTemplate from "../components/FoodTemplate/FoodTemplate";
import Hero from "../components/Hero/Hero";
import Categories from "../components/FoodTemplate/Categories";
import SliderComponent from "../components/SliderComponent/Slider";


function HomePage(props) {
	const {products} = props;

	return (
		<main className="overflow-hidden">
			{/*<Head>*/}
			{/*	<meta name="viewport" content="initial-scale=1.0, width=device-width"/>*/}
			{/*	<meta name="virtual menu" content="virtual catering delivery company"/>*/}
			{/*	<meta name='Next js' content='Html 5, Css 3, Javascript, React js, Next js, Tailwind css'/>*/}
			{/*	<meta name='author' content='Mihai Dornescu'/>*/}
			{/*	<link rel="icon" href="/favicon.ico"/>*/}
			{/*	<title>Best food in town</title>*/}
			{/*</Head>*/}
			{/*==============*/}
			<Layout>
				<Hero/>
				<FoodTemplate/>
				<div className="flex flex-col md:flex-row flex-wrap">
					{products.map((item) => {
						return <div className="basis-1/2 lg:basis-1/3" key={item.id}>
							<Categories title={item.title} id={item.id} img={item.img} link={item.link}
										description={item.description}/>
						</div>;
					})}
				</div>
				{/*==================*/}
				<SliderComponent/>
			</Layout>
		</main>
	);
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data', 'products.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	return {
		props: {
			products: data.products
		},
		revalidate: 10
	};
}

export default HomePage;
