import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Index = ({articles}) => {
	return (
		<div>
			{!articles && <p>no articles</p>}
			{articles && <div>
				<ul>
					{articles.map((item)=>{
						return <Link href={`/burgers/${item.id}`} key={item.id}>
							<a>
								<li >{item.title}</li>
								<Image src={`/assets/burger.jpg`} alt={item?.title}
									   className="rounded-md w-24 h-24" width="880" height="640"/>
							</a>
						</Link>
					})}
				</ul>
			</div>}
		</div>
	);
};

export default Index;
export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}
