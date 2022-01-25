import React, {useContext} from 'react';
import ExpensiveLabel from "../../components/UI/ExpensiveLabel";
import PriceLabel from "../../components/UI/PriceLabel";
import Button from "../../components/UI/Button";
import Image from "next/image";
import {ValueContext} from "../../context/ValueContext";
import ArticleId from "../../components/ArticleId/ArticleId";


const SaladId = ({itemId}) => {

	const {handleCart} = useContext(ValueContext);

	const prices = Math.floor(Math.random() * 100);

	return (
		<div>
			{!itemId && <p>no items</p>}
			{itemId && <ArticleId title={itemId?.title} body={itemId?.body}
								  img="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NDM4MzI0MXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>}

			{/*{itemId && <div*/}
			{/*		className="flex flex-col md:flex-row justify-around bg-slate-100 mx-4 justify-center items-center rounded-md shadow-md">*/}
			{/*		<div className="text-justify m-4 p-2">*/}
			{/*			<p className="mx-0 my-2 md:my-4 md:mx-2 font-bold text-4xl capitalize text-center">*/}
			{/*				{itemId.title.slice(0, 10)}*/}
			{/*			</p>*/}
			{/*			<p className="mx-0 my-8 md:my-4 md:mx-2">*/}
			{/*				{itemId.body}*/}
			{/*			</p>*/}
			{/*			<div className="flex justify-between items-center mx-4">*/}
			{/*				{prices > 50 ? <ExpensiveLabel>{prices} &euro;</ExpensiveLabel>*/}
			{/*					: <PriceLabel>{prices} &euro;</PriceLabel>}*/}
			{/*				<Button className={'bg-green-200 text-blue-800 p-3'} onClick={handleCart}>Add to*/}
			{/*					cart</Button>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<Image src={`/assets/Hero.jpg`} alt={itemId?.title} className="rounded-md w-24 h-24 cursor-wait"*/}
			{/*			   width="880"*/}
			{/*			   height="640"/>*/}
			{/*	</div>}*/}

		</div>
	);
};

export default SaladId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const itemId = await res.json();
	console.log(itemId);

	return {
		props: {
			itemId
		}
	};
}
