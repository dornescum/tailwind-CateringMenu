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
												<Image src={`/assets/beef.jpg`} alt={item?.title}
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
