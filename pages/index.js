import fs from "fs/promises";
import path from "path";
import Head from 'next/head';
import Layout from "../components/UI/Layout";
import Link from "next/link";
import Test from "../components/Test";
import ProductItem from "../components/ProductItem/ProductItem";
import SwitchBtn from "../components/SwitchBtn/SwitchBtn";
import Image from "next/image";
import Photo from '../public/assets/next-test.jpg';
import FoodTemplate from "../components/FoodTemplate/FoodTemplate";
import Hero from "../components/Hero/Hero";


function HomePage(props) {
	const {products} = props;

	return (
		<main className='text-[Dongle]'>
			<Head>
				<title>Create Next App</title>
				<script src="https://cdn.tailwindcss.com"></script>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Layout>
				<Hero />
				<FoodTemplate />
			</Layout>
		</main>
	);
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data', 'products.json');
	// console.log(filePath);
	const jsonData = await fs.readFile(filePath);
	// console.log(jsonData);
	const data = JSON.parse(jsonData);
	// console.log(data);

	return {
		props: {
			// products:[{id: 'p1', title: 'product 1'}]
			products: data.products
		},
		revalidate: 10
	};
}

export default HomePage;


// <Head>
//     <title>Create Next App</title>
//     <link rel="icon" href="/favicon.ico" />
// </Head>


// <h1 className="text-6xl font-bold">
//   Welcome to{' '}
//   <a className="text-blue-200" href="https://nextjs.org">
//     Next.js!
//   </a>
// </h1>
//
// <p className="mt-3 text-2xl">
//   Get started by editing{' '}
//   <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
//     pages/index.js
//   </code>
// </p>
//
// <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
//   <a
//       href="https://nextjs.org/docs"
//       className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Find in-depth information about Next.js features and API.
//     </p>
//   </a>
//
//   <a
//       href="https://nextjs.org/learn"
//       className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Learn &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Learn about Next.js in an interactive course with quizzes!
//     </p>
//   </a>
//
//   <a
//       href="https://github.com/vercel/next.js/tree/master/examples"
//       className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Examples &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Discover and deploy boilerplate example Next.js projects.
//     </p>
//   </a>
//
//   <a
//       href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Instantly deploy your Next.js site to a public URL with Vercel.
//     </p>
//   </a>
// </div>
// <footer className="flex items-center justify-center w-full h-24 border-t">
//     <a
//         className="flex items-center justify-center"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//         Powered by{' '}
//         <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
//     </a>
// </footer>

// flex flex-col items-center justify-center min-h-screen py-2

// flex flex-col items-center justify-center w-full flex-1 px-20 text-center
