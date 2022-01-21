import React from 'react';
import Link from "next/link";

const Index = ({articles}) => {
	console.log(articles);
	return (
		<div>
			{!articles && <p>no articles</p>}
			{articles && <div>
				<ul>
					{articles.map((item)=>{
						return <Link href={`/burgers/${item.id}`} key={item.id}>
							<a>
								<li >{item.title}</li>
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

// export async function getStaticProps() {
// 	let url = `https://api.spoonacular.com/recipes/search?${process.env.API_KEY}`;
// 	const res = await fetch(url);
// 	const obj = await res.json();
// 	// console.log(obj);
// 	return {
// 		props: {
// 			burgers: obj.results
//
// 		}
// 	}
// }
