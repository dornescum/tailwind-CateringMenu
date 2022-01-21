import React, {useEffect, useState} from 'react';
import {server} from "../../config";

const Index = ({beefProducts}) => {
	// console.log(beefProducts);
	// const {title} =beefProducts;
	const [data, setData]= useState([]);
	console.log(data);
	const getData = async () => {
		const res = await fetch("https://api.spoonacular.com/recipes/search?apiKey=97b53cc1bc194de6bc68590469afb5dc&cuisine=Italian");
		const data = await res.json();
		setData(data)
		// console.log(data);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<ul>
				{!data && <p>no data</p>}
				{/*{data && data.results.map((item)=>{*/}
				{/*	return <li>{item.title}</li>*/}
				{/*})}*/}
			</ul>

		</div>
	);
};

export default Index;

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/products`);
	const beefProducts = await res.json();
	console.log(beefProducts);

	return {
		props: {
			beefProducts
		}
	};
};
