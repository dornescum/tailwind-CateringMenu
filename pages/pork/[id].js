import React, {useEffect, useState, useContext} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";
import {ValueContext} from "../../context/ValueContext";
import IdComponent from "../../components/IdComponent/IdComponent";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";




const PorkId = ({itemId}) => {
	const {handleCart} = useContext(ValueContext);

	const [porkData, setPorkData] = useState([]);
	const title = itemId.message.title;
	const description = itemId.message.description;
	const price = itemId.message.price;
	const ingredients = itemId.message.ingredients;
	const subtitle = itemId.message.subtitle;
	const image = itemId.message.img;
	const id = itemId.message.id;
	const owner = itemId.message.img_owner.name;

	const getData = async () => {
		const res = await fetch('https://food-nodejs.herokuapp.com/api/pork');
		const data = await res.json();
		setPorkData(data);
	};
	useEffect(() => {
		getData();
	}, []);




	return (
		<div>
			{!itemId && <p>no items</p>}
			{itemId && <IdComponent title={title} description={description} price={price} id={id} img={image}
									handleCart={handleCart} ingredients={ingredients} subtitle={subtitle} img_owner={owner}/>}
			<ul className="flex flex-col md:flex-row flex-wrap">
				{porkData.map((item) => {
					return <Link href={`/pork/${item.id}`} key={item.id}>
						<a className="basis-1/2 md:basis-1/3">
							<li className="p-2 m-4">
								<div className="p-1  bg-slate-100 rounded-md shadow-md">
									<IndividualArticle title={item?.title}
													   description={item?.description}
													   img={item?.img} id={item?.id} price={item?.price}
													   subtitle={item?.subtitle} ingredients={item?.ingredients}
													   img_owner={item?.img_owner}/>
								</div>
							</li>
						</a>
					</Link>;
				})}
			</ul>
		</div>
	);
};

export default PorkId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://food-nodejs.herokuapp.com/api/pork/${context.params.id}`);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
