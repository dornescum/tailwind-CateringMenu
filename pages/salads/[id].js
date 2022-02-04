import React, {useContext, useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";
import Image from "next/image";
import {ValueContext} from "../../context/ValueContext";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";
import IdComponent from "../../components/IdComponent/IdComponent";


const SaladId = ({itemId}) => {
	const [data, setData] = useState([]);
	const {handleCart} = useContext(ValueContext);



	const title = itemId.message.title;
	const description = itemId.message.description;
	const price = itemId.message.price;
	const ingredients = itemId.message.ingredients;
	const subtitle = itemId.message.subtitle;
	const image = itemId.message.img;
	const id = itemId.message.id;
	console.log(subtitle);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch('https://food-nodejs.herokuapp.com/api/salads');
			console.log(res);
			const data = await res.json();
			setData(data);
		};
		getData();
	}, []);



	return (
		<div>
			{!itemId && <p>no items</p>}
			{itemId &&
				<IdComponent title={title} description={description} price={price} id={id} img={image}
							 handleCart={handleCart} ingredients={ingredients} subtitle={subtitle}/>
			}

			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/salads/${item.id}`} key={item.id}>
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

export default SaladId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://food-nodejs.herokuapp.com/api/salads/${context.params.id}`);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
