import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Index = ({beef}) => {
	return (
		<div>
			<div className='bg-white'>
				<h1 className='text-center m-2 p-1 text-4xl animate-bounce'>Burgers</h1>
				{!beef && <p>no beef</p>}
				{beef && <div className="m-2">
					<ul className="flex flex-col md:flex-row flex-wrap">
						{beef.map((item) => {
							return <Link href={`/beef/${item.id}`} key={item.id}>
								<a className="basis-1/2 md:basis-1/3">
									<li className="p-2 m-1">
										<div className="p-1  bg-slate-100 rounded-md shadow-md">
											<div className="mb-4 h-48">
												<h3 className="mb-3 text-2xl flex justify-center items-center">{item?.title.slice(0, 10)}</h3>
												<p className='text-justify'>{item?.body}</p>
											</div>
											<div className='py-2 md:py-6 px-1 mb-1 flex flex-col lg:flex-row justify-between'>
												<p className='font-bold'>More info here ...</p>
												<p className='font-bold'>Price 9.99 </p>
											</div>
											<div className='relative'>
												<p className='absolute top-10 left-10 z-10 text-white text-2xl animate-pulse'>
													buy it!
												</p>
												<Image src={`/assets/burger.jpg`} alt={item?.title}
													   className="rounded-md w-24 h-24" width="880" height="640"/>
											</div>

										</div>
									</li>
								</a>
							</Link>;
						})}
					</ul>
				</div>}
			</div>
		</div>

	);
};

export default Index;

export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
	const beef = await res.json();

	return {
		props: {
			beef,
		},
	};
};


// import React, {useState, useContext} from 'react';
// import path from "path";
// import fs from "fs/promises";
// import {ValueContext} from "../../context/ValueContext";
// import {server} from '../../config/index'
//
// import Link from "next/link";
// import Image from "next/image";
// import { MdOutlineAddShoppingCart } from "react-icons/md";
//
//
//
// const Index = ({salads}) => {
// 	console.log(salads);
// 	const {initialValue, setInitialValue} = useContext(ValueContext);
// 	const handleCart = () => {
// 		setInitialValue(initialValue + 1);
// 	};
//
// 	return (
// 		<div className="flex flex-col md:flex-row flex-wrap bg-white gap-2 md:gap-0">
// 			{!salads && <p>no salads</p>}
//
// 			{salads.map((salad) => {
// 				const {id, title, description, price, img} = salad;
// 				return <div className="basis-1/2 md:basis1/3 lg:basis-1/4" key={id}>
// 					<Link href={`/salads/${id}`}>
// 					{/*<Link href={'/'}>*/}
// 						<a>
// 							<div className="bg-slate-100 m-2 flex flex-col">
// 								<p>{title}</p>
// 								<p>{description}</p>
// 								<p>{price} Euro</p>
// 								<Image src={img} alt={title} className="rounded-md" width='300' height='200'/>
// 								<button onClick={handleCart} className='bg-slate-300 text-white p-2'>
// 									<MdOutlineAddShoppingCart />
// 								</button>
// 							</div>
// 						</a>
// 					</Link>
// 					{/*<p>{title}</p>*/}
// 					{/*<p>{description}</p>*/}
// 					{/*<p>{price} Euro</p>*/}
// 					{/*<button onClick={handleCart} className='bg-slate-300 text-white p-2'>x</button>*/}
// 				</div>;
// 			})}
// 		</div>
// 	);
// };
//
// // export const getStaticProps = async (context) => {
// 	// const id = context.params.id;
// 	// console.log(context);
// 	// // const res = await fetch(`${server}/api/products/${id}`);
// 	// const products = await res.json();
// 	// return {
// 	// 	props: {
// 	// 		products,
// 	// 	},
// 	// };
// // };
//
// // export const getStaticPaths = async () => {
// // 	const res = await fetch(`${server}/data/products.json`);
// // 	const products = await res.json();
// // 	console.log(typeof products);
// // 	const ids = products.data.map((product) => product.id);
// // 	const paths = ids.map((id) => ({params: {id: id.toString()}}));
// // 	return {
// // 		paths,
// // 		fallback: false,
// // 	};
// // };
//
// // 2 este buna
// export async function getStaticProps() {
// 	const filePath = path.join(process.cwd(), 'data', 'products.json');
// 	// console.log(filePath);
// 	const jsonData = await fs.readFile(filePath);
// 	// console.log(jsonData);
// 	const data = JSON.parse(jsonData);
// 	// console.log(data);
// 	return {
// 		props: {
// 			// products:[{id: 'p1', title: 'product 1'}]
// 			salads: data.salads
// 		},
// 		revalidate: 10
// 	};
// }
//
// export default Index;
