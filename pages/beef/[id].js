import React, {useContext, useEffect, useState} from 'react';
import {ValueContext} from "../../context/ValueContext";
import Button from "../../components/UI/Button";
import Image from "next/image";
import Link from "next/link";
import PriceLabel from "../../components/UI/PriceLabel";
import ExpensiveLabel from "../../components/UI/ExpensiveLabel";
import IdComponent from "../../components/IdComponent/IdComponent";
import IndividualArticle from "../../components/IndividualArticle/IndividualArticle";


const BurgersId = ({beefId}) => {
	const {handleCart} = useContext(ValueContext);

	const [beefData, setBeefData] = useState([]);
	const title = beefId.message.title;
	const description = beefId.message.description;
	const price = beefId.message.price;
	const ingredients = beefId.message.ingredients;
	const subtitle = beefId.message.subtitle;
	const image = beefId.message.img;
	const id = beefId.message.id;
	const owner = beefId.message.img_owner.name;

	const getData = async () => {
		const res = await fetch('https://food-nodejs.herokuapp.com/api/beef');
		const data = await res.json();
		setBeefData(data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="">
			{!beefId && <p>no beefIds</p>}
			{beefId && <IdComponent title={title} description={description} price={price} id={id} img={image}
									handleCart={handleCart} ingredients={ingredients} subtitle={subtitle} img_owner={owner}/>}

			<ul className="flex flex-col md:flex-row flex-wrap">
				{beefData.map((item) => {
					return <Link href={`/beef/${item.id}`} key={item.id}>
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

export async function getServerSideProps(context) {
	const res = await fetch(`https://food-nodejs.herokuapp.com/api/beef/${context.params.id}`);
	const beefId = await res.json();

	return {
		props: {
			beefId
		}
	};
}


export default BurgersId;
