import React from 'react';
import Image from "next/image";
import Link from "next/link";
import IndividualPage from "../../components/IndividualPage/IndividualPage";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";


const Index = ({items}) => {

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
										<IndividualArticle title={item?.title}
														   description={item?.description}
														   img={item?.img} id={item?.id} price={item?.price}
														   subtitle={item?.subtitle} ingredients={item?.ingredients}
										/>
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
	const res = await fetch(`https://food-nodejs.herokuapp.com/api/salads`);
	const items = await res.json();

	return {
		props: {
			items,
		},
	};
};
