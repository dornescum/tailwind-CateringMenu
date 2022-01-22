import React from 'react';
import path from "path";
import fs from "fs/promises";
import Link from "next/link";


const Index = ({pasta}) => {
	// console.log(pasta);
	const pastaDish = pasta.filter((p)=> p.link === 'pasta');
	// console.log(pastaDish);
	return (
		<div>
			<ul>
				{pastaDish.map((item)=>{
					return <Link href={`/pasta/${item.id}`} key={item.id}>
						<a>
							<li>{item.title}</li>
						</a>
					</Link>
				})}
			</ul>

		</div>
	);
};

export default Index;
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
			pasta: data.products
		},
		revalidate: 10
	};
}
