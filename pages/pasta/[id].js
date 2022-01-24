import React, {useState} from 'react';
import {server} from "../../config";
import useSWR from 'swr'

const PastaId = ({pasta}) => {
	const [data, setData]=useState(pasta);
	// console.log(data);
	// if (!pasta) return null;
	return (
		<div>
			{!data && <p>no pasta</p>}

			{data && <p>{pasta?.title}</p>}
			{/*<p>{pasta?.id}</p>*/}
			{/*<p>{pasta?.title}</p>*/}
			{/*<p>{pasta?.description}</p>*/}
			{/*<p>{pasta?.price}</p>*/}
		</div>
	);
};

	export default PastaId;

// export const getStaticProps = async (context) => {
// 	const id = context.params.id;
// 	const res = await fetch(`${server}/api/products/${id}`);
// 	const pasta = await res.json();
// 	// console.log(pasta);
// 	return {
// 		props: {
// 			pasta,
// 		},
// 	};
// };
// export const getStaticPaths = async () => {
// 	const res = await fetch(`${server}/api/products/`);
// 	// console.log(res);
// 	const products = await res.json();
// 	console.log(products.data);
// 	if(!products || !products.data) {
// 		return null
// 	}
// 	const ids = products.data.products.map((product) => product.id);
// 	// console.log(ids);
// 	const paths = ids.map((id) => ({params: {id: id}}));
// 	// console.log(paths);
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };
