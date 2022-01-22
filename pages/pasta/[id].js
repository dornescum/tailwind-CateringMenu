import React, {useState} from 'react';
import {server} from "../../config";

const PastaId = ({pasta}) => {
	// console.log(pasta);
	const [data, setData]=useState(pasta);
	// console.log(data);
	if (!pasta) return null;
	return (
		<div>
			{!data && <p>no pasta</p>}
			{data && <p>{pasta.title}</p>}
			{/*<p>{pasta?.id}</p>*/}
			{/*<p>{pasta?.title}</p>*/}
			{/*<p>{pasta?.description}</p>*/}
			{/*<p>{pasta?.price}</p>*/}
		</div>
	);
};

	export default PastaId;
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${server}/api/products/${id}`);
	const pasta = await res.json();
	// console.log(pasta);
	return {
		props: {
			pasta,
		},
	};
};
export const getStaticPaths = async () => {
	// fixme error object
	const res = await fetch(`${server}/api/products/`);
	// console.log(res);
	const products = await res.json();
	console.log(products);
	if(!products) return null
	const ids = products.data.products.map((product) => product.id);
	const paths = ids.map((id) => ({params: {id: id}}));
	return {
		paths,
		fallback: false,
	};
};
