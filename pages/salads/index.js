import React, {useState,useContext} from 'react';
import path from "path";
import fs from "fs/promises";
import {ValueContext} from "../../context/ValueContext";

const Index = ({salads}) => {
	const {initialValue, setInitialValue} = useContext(ValueContext);
	const handleCart = () => {
		setInitialValue(initialValue + 1);
	};
	// console.log(initialValue);
	return (
		<div className='p-4 my-2'>
			{salads.map((salad)=>{
				const {id, title, description, price, img}=salad;
				return <div className='bg-blue-50' key={salad.id}>
					<p>{title}</p>
					<p>{description}</p>
					<p>{price} Euro</p>
					<button onClick={handleCart} className='bg-slate-300 text-white p-2'>x</button>
				</div>
			})}
		</div>
	);
};


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
export default Index;
