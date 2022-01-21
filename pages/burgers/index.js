import React from 'react';
import Link from "next/link";
import Image from "next/image";

import path from "path";
import fs from "fs";

const Index = ({burgers}) => {
	console.log(burgers);
	return (
		<div>
			<ul>
				{burgers.map((item)=>{
					// const {}=burgers;
					return<Link href={`/burgers/${item.id}`} key={item.id}>
						<a>
							<li>{item.title}</li>
						</a>
					</Link>

				})}
			</ul>
		</div>
	);
};

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data', 'products.json');
	const jsonData = await fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);

	return {
		props: {
			burgers: data.burgers
		},
		revalidate: 10
	};
}

export default Index;
