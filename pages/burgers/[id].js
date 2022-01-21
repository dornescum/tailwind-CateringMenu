import React from 'react';
import {server} from "../../config";

const BurgersId = ({products}) => {
	console.log(products);
	const {id, title, description, img, price}=products;

	return (
		<div>
				<ul>
					<li>{id}</li>
					<li>{title}</li>
					<li>{description}</li>
					<li>{price}</li>
				</ul>
		</div>
	);
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${server}/api/products/${id}`);
	const products = await res.json();
	return {
		props: {
			products,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/products`);
	// console.log(res);
	const products = await res.json();
	// console.log(products);
	const ids = products.data.salads.map((product) => product.id);
	const paths = ids.map((id) => ({params: {id: id}}));
	return {
		paths,
		fallback: false,
	};
};

export default BurgersId;
