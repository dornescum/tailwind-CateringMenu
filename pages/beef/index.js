import React, {useEffect, useState} from 'react';
import {server} from "../../config";
import Link from "next/link";


const Index = ({spoonProducts}) => {
	// console.log(beefProducts);
	// const {title} =beefProducts;
	const [data, setData]= useState([spoonProducts]);
	// console.log(data[0].results);
	const newData = data[0].results;
	// console.log(newData);

	return (
		<div>
			<ul>
				{!newData && <p>no data</p>}
				{data && newData.map((item)=>{
					return <Link href={`${item.id}`} key={item.id}>
						<a>
							<li >{item.title}</li>
						</a>
					</Link>

				})}
			</ul>

		</div>
	);
};

export default Index;

export const getStaticProps = async () => {
	const res = await fetch(`https://api.spoonacular.com/recipes/search?${process.env.API_KEY}`);
	const spoonProducts = await res.json();
	// console.log(spoonProducts);

	return {
		props: {
			spoonProducts
		}
	};
};

// export const getStaticPaths = async () => {
// 	const res = await fetch(`https://api.spoonacular.com/recipes/search?${process.env.API_KEY}`);
// 	const products = await res.json();
// 	console.log(products);
// 	if (!products) return null;
// 	const ids = products.results.map((product) => product.id);
// 	const paths = ids.map((id) => ({params: {id: id.toString()}}));
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };
