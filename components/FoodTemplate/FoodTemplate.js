import React, {useContext, useEffect} from 'react';
// import {MdHearing} from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";


import SearchBox from "./SearchBox";

import Image from "next/image";
import Button from "../UI/Button";
import {ValueContext} from "../../context/ValueContext";


const products = [
	{
		id: 1, img: `/assets/burger.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.",
		title: 'Burger'
	},
	{
		id: 2,
		img: `/assets/pastaAmatriciana.jpg`,
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.",
		title: 'Pasta'
	},
	{
		id: 3,
		img: `/assets/beef.jpg`,
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.",
		title: 'Best steak ever !'
	},
	{
		id: 4,
		img: `/assets/soup.jpg`,
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.",
		title: 'Garlic soup'
	},
	{
		id: 5,
		img: `/assets/salata.jpg`,
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.",
		title: 'Vegetables salad'
	},
	{
		id: 6,
		img: `/assets/pork.jpg`,
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.",
		title: 'Porc ? Yes please'
	},
];

const FoodTemplate = () => {
	const {initialValue, setInitialValue, handleCart} = useContext(ValueContext);

	const random = Math.floor(Math.random() * products.length);
	const {title, description, img, id} = products[random];

	return (
		<div className="bg-gray-50 mx-2">
			<div className="bg-white py-4">
				<SearchBox/>
			</div>

			<div className="text-center mx-auto my-2 px-4 py-4 my-4 rounded-md">
				<h4 className="font-bold mb-4 text-2xl md:text-4xl select-none">Special of the day</h4>
				<div className="flex flex-col md:flex-row bg-slate-50 mx-auto" data-cy={title}>
					<div className="p-4 basis-1/2 flex justify-center items-center ">
						<Image src={img} alt="food" className="rounded-md w-24 h-24" width="600" height="450"/>
					</div>
					<div className='basis-1/2 flex justify-center items-center'>
						<ul className="flex flex-col text-center mx-auto py-10">
							<li className={`pb-2 text-2xl mb-2 lg:pb-12 ${title === "Pasta" ? "text-pink-300" : " "}`}>{title}</li>
							<li className="pr-0 lg:pr-12" data-testid={title.slice(0,3)}>{description}</li>
							<li className="mt-8 md:4" data-testid={(id * Math.random())*1000}>
								<div className="flex justify-end md:pr-8 lg:pr-12" data-testid={title.slice(3,6)}>
									{/*todo add favorite*/}
									{/*<Button  data-testid={id} color={'bg-white'}>*/}
									{/*	<AiOutlineHeart />*/}
									{/*</Button>*/}

									<Button onClick={handleCart} data-testid={id}>Add to cart</Button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodTemplate;
