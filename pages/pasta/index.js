import React from 'react';

const Index = () => {
	return (
		<div>
				pasta
		</div>
	);
};

export default Index;
 export const getStaticProps = async (context) => {
	const id = context.params.id;
	console.log(context);
	// const res = await fetch(`${server}/api/products/${id}`);
	const products = await res.json();
	return {
		props: {
			products,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/data/products.json`);
	const products = await res.json();
	console.log(typeof products);
	const ids = products.data.map((product) => product.id);
	const paths = ids.map((id) => ({params: {id: id.toString()}}));
	return {
		paths,
		fallback: false,
	};
};

// 2 este buna
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
			salads: data.salads
		},
		revalidate: 10
	};
}
