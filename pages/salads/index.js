import React from 'react';
import path from "path";
import fs from "fs/promises";

const Index = ({salads}) => {
	console.log(salads);
	return (
		<div>
			{salads.map((salad)=>{
				const {id, title, description, price, img}=salad;
				return <div key={salad.id}>
					<p>{title}</p>
					<p>{description}</p>
					<p>{price} Euro</p>
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
