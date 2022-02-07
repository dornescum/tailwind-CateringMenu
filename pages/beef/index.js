import React from 'react';
import Link from "next/link";
import Image from "next/image";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";
import Title from "../../components/Title/Title";


const Index = ({beef}) => {
	return (
		<div>
			<div className="bg-white mt-16 md:mt-20" data-testid="beef">
				<Title>{beef[0].subtitle}</Title>
				{!beef && <p>no beef</p>}
				{beef && <div className="m-2">
					<ul className="flex flex-col md:flex-row flex-wrap" data-testid="beef-ul">
						{beef.map((item) => {
							return <Link href={`/beef/${item.id}`} key={item.id}>
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
				</div>}
			</div>
		</div>

	);
};

export default Index;

export const getStaticProps = async () => {
	const res = await fetch(`https://food-nodejs.herokuapp.com/api/beef`);
	const beef = await res.json();

	return {
		props: {
			beef,
		},
	};
};
