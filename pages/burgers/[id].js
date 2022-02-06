import React, {useEffect, useState, useContext} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";
import IdComponent from "../../components/IdComponent/IdComponent";
import {ValueContext} from "../../context/ValueContext";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";


const BeefId = ({itemId}) => {
	const {handleCart} = useContext(ValueContext);

	const [burgerData, setBurgerData] = useState([]);
	const title = itemId.message.title;
	const description = itemId.message.description;
	const price = itemId.message.price;
	const ingredients = itemId.message.ingredients;
	const subtitle = itemId.message.subtitle;
	const image = itemId.message.img;
	const id = itemId.message.id;


	const getData = async () => {
		const res = await fetch('https://food-nodejs.herokuapp.com/api/burgers');
		const data = await res.json();
		setBurgerData(data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			{!itemId && <p>no items</p>}
			{itemId &&<IdComponent title={title} description={description} price={price} id={id} img={image}
								   handleCart={handleCart} ingredients={ingredients} subtitle={subtitle}/>}

			<ul className="flex flex-col md:flex-row flex-wrap">
				{burgerData.map((item) => {
					return <Link href={`/burgers/${item.id}`} key={item.id}>
						<a className="basis-1/2 md:basis-1/3">
							<li className="p-2 m-4">
								<div className="p-1  bg-slate-100 rounded-md shadow-md">
									<IndividualArticle title={item?.title}
													   description={item?.description}
													   img={item?.img} id={item?.id} price={item?.price}
													   subtitle={item?.subtitle} ingredients={item?.ingredients}/>
								</div>
							</li>
						</a>
					</Link>;
				})}
			</ul>
		</div>
	);
};

export default BeefId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://food-nodejs.herokuapp.com/api/burgers/${context.params.id}`);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
