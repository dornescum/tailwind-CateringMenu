import React, {useState, useContext} from 'react';
import path from "path";
import fs from "fs/promises";
import {ValueContext} from "../../context/ValueContext";
import {server} from '../../config/index'

import Link from "next/link";
import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";



const Index = ({salads}) => {
	const {initialValue, setInitialValue} = useContext(ValueContext);
	const handleCart = () => {
		setInitialValue(initialValue + 1);
	};

	return (
		<div className="flex flex-col md:flex-row flex-wrap bg-white gap-2 md:gap-0">
			{salads.map((salad) => {
				const {id, title, description, price, img} = salad;
				return <div className="basis-1/2 md:basis1/3 lg:basis-1/4" key={id}>
					{/*<Link href={`${server}/${id}`}>*/}
					<Link href={'/'}>
						<a>
							<div className="bg-slate-100 m-2 flex flex-col">
								<p>{title}</p>
								<p>{description}</p>
								<p>{price} Euro</p>
								<Image src={img} alt={title} className="rounded-md" width='300' height='200'/>
								<button onClick={handleCart} className='bg-slate-300 text-white p-2'>
									<MdOutlineAddShoppingCart />
								</button>
							</div>
						</a>
					</Link>





					{/*<p>{title}</p>*/}
					{/*<p>{description}</p>*/}
					{/*<p>{price} Euro</p>*/}
					{/*<button onClick={handleCart} className='bg-slate-300 text-white p-2'>x</button>*/}
				</div>;
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
