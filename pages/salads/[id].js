import React, {useContext, useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";
import Image from "next/image";
import IdComponent from "../../components/IdComponent/IdComponent";
import {ValueContext} from "../../context/ValueContext";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";


const SaladId = ({itemId, items}) => {
	const [data, setData] = useState([]);
	const {handleCart} = useContext(ValueContext);
	console.log(items);


	// console.log(itemId);
	const title = itemId.message.title;
	const description = itemId.message.description;
	const price = itemId.message.price;
	const ingredients = itemId.message.ingredients;
	const subtitle = itemId.message.subtitle;
	const image = itemId.message.img;
	const id = itemId.message.id;


	useEffect(() => {
		const getData = async () => {
			const res = await fetch('https://food-nodejs.herokuapp.com/api/salads');
			console.log(res);
			const data = await res.json();
			// console.log(data);
			// const meals = [];
			// for (const key in data) {
			// 	console.log(key);
			// 	meals.push({
			// 		title: data[key].title,
			// 		description: data[key].description,
			// 		image: data[key].img,
			// 		id: data[key].id
			// 	});
			// }

			setData(data);
		};
		getData();
	}, []);
	// console.log(data);
	// const prices = Math.floor(Math.random() * 100);


	return (
		<div>
			{!itemId && <p>no items</p>}
			{itemId &&
				<IdComponent title={title} description={description} price={price} id={id} img={image}
							 handleCart={handleCart}/>
			}
			{/*{itemId && <ArticleId title={itemId?.title} body={itemId?.body}*/}
			{/*					  img="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NDM4MzI0MXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>}*/}


			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/salads/${item.id}`} key={item.id}>
						<a className="basis-1/2 md:basis-1/3">
							<li className="p-2 m-4">
								<div className="p-1  bg-slate-100 rounded-md shadow-md">
									<IndividualArticle title={item?.title} description={item?.description} img={item?.img}/>
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
	// console.log(res);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
