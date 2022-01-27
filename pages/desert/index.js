import React from 'react';
import Link from "next/link";
import IndividualPage from "../../components/IndividualPage/IndividualPage";

const Index = ({items}) => {
	const desertImage='https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80'
	return (
		<div>
			<div className="bg-white">
				<h1 className="text-center m-2 p-1 text-4xl animate-bounce">Desert</h1>
				{!items && <p>no items</p>}
				{items &&
					<div className="m-2">
						<ul className="flex flex-col md:flex-row flex-wrap">
							{items.map((item) => {
								return <Link href={`/desert/${item.id}`} key={item.id}>
									<a className="basis-1/2 md:basis-1/3">
										<li className="p-2 m-1">
											<IndividualPage title={item?.title} body={item?.body} img={desertImage}/>
										</li>
									</a>
								</Link>;
							})}
						</ul>
					</div>
				}
			</div>
		</div>
	);
};

export default Index;

export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
	const items = await res.json();

	return {
		props: {
			items,
		},
	};
};
