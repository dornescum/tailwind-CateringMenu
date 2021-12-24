import React from 'react';
import fs from "fs/promises";
import path from "path";

const Pid = ({loadedProduct}) => {
// dc vreau sa trec fallback:true am nevoie de un loader pana se face fetch
	if(!loadedProduct){
		return <p>Loading</p>
	}
	return (
		<div>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</div>
	);
};

async function getData() {
	const filePath = path.join(process.cwd(), 'data', 'products.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	return data;
}

export async function getStaticProps(context) {
	const {params} = context;
	const productId = params.pid;
	// const filePath = path.join(process.cwd(), 'data', 'products.json');
	// const jsonData = await fs.readFile(filePath);
	// const data = JSON.parse(jsonData);

	const data = await getData();

	const product = data.products.find((product => product.id === productId));
	// console.log(product);


	return {
		props: {
			loadedProduct: product
		},
		revalidate: 10
	};
}

export async function getStaticPaths() {
	const data = await getData();
	const ids =data.products.map(product => product.id);
	// creez un obiect params: {pid: id}
	const pathsWidthParams = ids.map((id)  => ({params: {pid: id} }))


	return {
		paths: pathsWidthParams,
		// paths: [
		// 	{params: {pid: 'p1'}},
		// 	{params: {pid: 'p2'}},
		// 	{params: {pid: 'p3'}},
		// ],
		fallback: false
	};
}

export default Pid;
