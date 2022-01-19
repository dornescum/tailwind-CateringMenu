import React, {useEffect} from 'react';
import WifiLogo from "../../assets-next/icons/WifiLogo";
import Signal from "../../assets-next/icons/Signal";
import Battery from "../../assets-next/icons/Battery";
import SearchBox from "./SearchBox";
import SwitchBtn from "../SwitchBtn/SwitchBtn";
import Categories from "./Categories";
import Image from "next/image";


const products = [
	{id: 1, img: `/assets/p1.jpg`, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
			"\t\tAccusamus assumenda beatae deleniti deserunt eos, esse incidunt molestiae placeat sequi velit.", title: 'product1'},
	{id: 2, img: `/assets/p2.jpg`, description: "bla bla", title: 'product2'},
	{id: 3, img: `/assets/p3.jpg`, description: "bla bla", title: 'product3'},
	{id: 4, img: `/assets/p3.jpg`, description: "bla bla", title: 'product3'},
	{id: 5, img: `/assets/p3.jpg`, description: "bla bla", title: 'product3'},
	{id: 6, img: `/assets/Hero.jpg`, description: "bla bla", title: 'product3'},
];

const FoodTemplate = () => {
	const time = new Date();
	const hour = time.getHours();
	const minutes = time.getMinutes();
	const {title, description, img} = products[0];

	// todo de scos random un produs
	const randomP = products.sort();
	// console.log(randomP );

	React.useEffect(() => {
		// window is accessible here.
		const innerWidth = window.innerWidth;
		console.log("window.innerHeight", window.innerWidth);
	}, []);


	// console.log(innerWidth);

	return (
		<div className="bg-color-[#f4f4f4]">
			<SearchBox/>
			<div className="text-center mx-auto px-4 py-4 my-4">
				<h4>Special of the day</h4>
				<div className="flex flex-col md:flex-row bg-slate-50 mx-auto">
					<div className='p-4'>
						<Image src={img} alt="food" className="rounded-md w-24 h-24" width='300' height='200'/>
					</div>

					<ul className='flex flex-col text-center mx-auto py-10'>
						<li className='pb-2'>{title}</li>
						<li className=''>{description}</li>
					</ul>

				</div>
			</div>
		</div>
	);
};

export default FoodTemplate;
