import React from 'react';
import path from "path";
import fs from "fs/promises";
import Index from "./index";
import {server} from '../../config/index'


const SaladsId = () => {
	// console.log(products);
	return (
		<div>
test
		</div>
	);
};


// export const getStaticProps = async (context) => {
// 	const id = context.params.id;
// 	const res = await fetch(`${server}/api/products/${id}`);
// 	const articles = await res.json();
// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };
// export const getStaticPaths = async () => {
// 	const res = await fetch(`${server}/data/products.json`);
// 	const products = await res.json();
// 	console.log(typeof products);
// 	const ids = products.data.map((product) => product.id);
// 	const paths = ids.map((id) => ({params: {id: id.toString()}}));
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };
	export default SaladsId;
