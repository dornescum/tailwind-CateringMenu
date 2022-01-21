import React, {useState} from 'react';
import {server} from '../../config/index';

import Link from "next/link";
import Image from "next/image";


const SaladsId = ({products}) => {
	// const {id, title, description, img, price}=products;
	if(!products) return null
	// const [isLoading, setIsLoading] =useState(true)
	return (
		<div className='flex items-center justify-center py-48 bg-slate-100 mb-2'>
			{/*{!products && <p>no products</p>}*/}
			{/*{!products && <h1>{setIsLoading(false)}</h1>}*/}
			<article className='bg-white p-8 rounded-md shadow-2xl'>
				<header className='bg-red-100 rounded-t-md px-8 py-4 text-2xl font-extrablod'>
					{products.title}
				</header>
				<div className='p-8'>
					{products.description}
					<div className='flex'>
						<p>{products.id}</p>
						<p>{products.price} Euro</p>
					</div>
					<div>
						<button className='bg-pink-300 text-white'>
							add to cart
						</button>
					</div>
				</div>
			</article>
			<Image src={products.img} alt={products.title} className="rounded-md w-24 h-24" width='300' height='200' />
		</div>
	);
};


export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${server}/api/products/${id}`);
	const products = await res.json();
	// console.log(products);
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
	export default SaladsId;
