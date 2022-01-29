import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Index = ({beef}) => {
	return (
		<div>
			<div className="bg-white" data-testid="beef">
				<h1 className="text-center m-2 p-1 text-4xl animate-bounce">Beef</h1>
				{!beef && <p>no beef</p>}
				{beef && <div className="m-2">
					<ul className="flex flex-col md:flex-row flex-wrap" data-testid="beef-ul">
						{beef.map((item) => {
							return <Link href={`/beef/${item.id}`} key={item.id}>
								<a className="basis-1/2 md:basis-1/3" data-testid={item?.id}>
									<li className="p-2 m-1" data-testid={item?.id * Math.PI}>
										<div className="p-1  bg-slate-100 rounded-md shadow-md"
											 data-testid={item?.id * Math.PI / 3}>
											<div className="mb-4 h-48">
												<h3 className="mb-3 text-2xl flex justify-center items-center"
													data-testid={item?.title.slice(3, 10)}>{item?.title.slice(0, 10)}</h3>
												<p className="text-justify"
												   data-testid={item?.body.slice(4, 11)}>{item?.body}</p>
											</div>
											<div
												className="py-2 md:py-6 px-1 mb-1 flex flex-col lg:flex-row justify-between"
												data-testid={item?.id * Math.PI * 4}>
												<p className="font-bold">More info here ...</p>
												<p className="font-bold">Price 9.99 </p>
											</div>
											<div className="relative" data-testid={item?.id * Math.PI * 6}>
												<p className="absolute top-10 left-10 z-10 text-white text-2xl animate-pulse"
												   data-testid={item?.id * Math.PI * 3.12}>
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
