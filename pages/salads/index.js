import React from 'react';
import Image from "next/image";


const Index = ({articles}) => {
	console.log(articles);
	return (<div>
		<ul>
			{articles.results.map((item)=>{
				return <li key={item?.id} data-testid={item.id}>
					<div>
						<h3>
							{item?.title}
						</h3>
						<img src={item?.image} alt={item?.title} height='300'  width='400' data-testid={item?.title.slice(0,3)}/>
					</div>
				</li>
			})}
		</ul>

		</div>);
};

export default Index;
export const getStaticProps = async () => {
		// ?number=10&query=chick
	// const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${process.env.API_KEY}`);
	const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${process.env.API_KEY}&cuisine=French`);
	// const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${process.env.API_KEY}&cuisine=Italian`);
	console.log(res);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};
