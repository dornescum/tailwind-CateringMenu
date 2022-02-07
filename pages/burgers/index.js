import React from 'react';
import Link from "next/link";
import IndividualPage from "../../components/IndividualPage/IndividualPage";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";
import Title from "../../components/Title/Title";

const Index = ({items}) => {
	// console.log(items);
	return (
		<div>
			<div className="bg-white" data-testid='burgers'>
				<Title>{items[0].subtitle}</Title>
				{!items && <p>no items</p>}
				{items &&
					<div className="m-2">
						<ul className="flex flex-col md:flex-row flex-wrap">
							{items.map((item) => {
								return <Link href={`/burgers/${item.id}`} key={item.id}>
									<a className="basis-1/2 md:basis-1/3">
										<li className="p-2 m-1">
											<IndividualArticle title={item?.title}
															   description={item?.description}
															   img={item?.img} id={item?.id} price={item?.price}
															   subtitle={item?.subtitle} ingredients={item?.ingredients}
															   img_owner={item?.img_owner}
											/>
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
	const res = await fetch(`https://food-nodejs.herokuapp.com/api/burgers`);
	const items = await res.json();

	return {
		props: {
			items,
		},
	};
};
