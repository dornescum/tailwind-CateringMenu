import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";

const BurgersId = ({beefId}) => {
	const [data, setData] = useState([]);
	const getData = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=12');
		const data = await res.json();
		setData(data);
		console.log(data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="">
			{!beefId && <p>no beefIds</p>}
			{beefId &&
				<div className="flex flex-col md:flex-row justify-around bg-slate-100 mx-4 justify-center items-center rounded-md shadow-md">
					<div className="text-justify m-4 p-2">
						<p className="m-2 font-bold text-4xl capitalize">
							{beefId.title}
						</p>
						<p className="m-2">
							{beefId.body}
						</p>
						<div className="flex justify-between items-center mx-4">
							<p className="my-2"> 9.99 E</p>
							<button className="my-2 bg-red-200"> add to cart</button>
						</div>

					</div>
					<Image src={`/assets/Hero.jpg`} alt={beefId?.title} className="rounded-md w-24 h-24 cursor-wait" width="880"
						   height="640"/>
				</div>}

			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
				return	<Link href={`/beef/${item.id}`} key={item.id}>
						<a className="basis-1/2 md:basis-1/3">
							<li className="p-2 m-4">
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
					// return <li key={item.id} className='basis-1/2 md:basis-1/3'>
					// 	{/*<li className="p-2 m-1">*/}
					// 		<div className="p-2 m-4  bg-slate-100 rounded-md shadow-md">
					// 			<div className="mb-4 h-48">
					// 				<h3 className="mb-3 text-2xl flex justify-center items-center">{item?.title.slice(0, 10)}</h3>
					// 				<p className='text-justify'>{item?.body}</p>
					// 			</div>
					// 			<div className='py-2 md:py-6 px-1 mb-1 flex flex-col lg:flex-row justify-between'>
					// 				<p className='font-bold'>More info here ...</p>
					// 				<p className='font-bold'>Price 9.99 </p>
					// 			</div>
					// 			<div className='relative'>
					// 				<p className='absolute top-10 left-10 z-10 text-white text-2xl animate-pulse'>
					// 					buy it!
					// 				</p>
					// 				<Image src={`/assets/burger.jpg`} alt={item?.title}
					// 					   className="rounded-md w-24 h-24" width="880" height="640"/>
					// 			</div>
					//
					// 		</div>
					// 	{/*</li>*/}
					// </li>;
				})}
			</ul>

		</div>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const beefId = await res.json();

	return {
		props: {
			beefId
		}
	};
}


export default BurgersId;
