import React from 'react';
import Image from "next/image";
import Link from "next/link";
import IndividualPage from "../../components/IndividualPage/IndividualPage";


const Index = ({items}) => {
const saladImage ='https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8NDI3ODI5MTl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
	return (<div>

		<div className="bg-white">
			<h1 className="text-center m-2 p-1 text-4xl animate-bounce">Salads</h1>
			{!items && <p>no items</p>}
			{items &&
				<div className="m-2">
					<ul className="flex flex-col md:flex-row flex-wrap">
						{items.map((item) => {
							return <Link href={`/salads/${item.id}`} key={item.id}>
								<a className="basis-1/2 md:basis-1/3">
									<li className="p-2 m-1">
										<IndividualPage title={item?.title} body={item?.body} img={saladImage}/>
									</li>
								</a>
							</Link>;
						})}
					</ul>
				</div>
			}
		</div>
	</div>);
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
