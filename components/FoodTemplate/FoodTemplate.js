import React from 'react';
import WifiLogo from "../../assets-next/icons/WifiLogo";
import Signal from "../../assets-next/icons/Signal";
import Battery from "../../assets-next/icons/Battery";
import SearchBox from "./SearchBox";
import SwitchBtn from "../SwitchBtn/SwitchBtn";
import Categories from "./Categories";
const products= [
	{id: 1, img:`assets/p1.jpg`, description:"bla bla", title: 'product1'},
	{id: 2, img:`assets/p2.jpg`, description:"bla bla", title: 'product2'},
	{id: 3, img:`assets/p3.jpg`, description:"bla bla", title: 'product3'},
]

const FoodTemplate = () => {
	const time = new Date();
	const hour = time.getHours();
	const minutes = time.getMinutes();

	return (
		<div className='bg-color-[#f4f4f4]'>
			{/*head*/}
			<div className='flex justify-between h-8 py-6 px-2 items-center'>
				<div>
					{hour} :<span> {minutes}</span>
				</div>
				<ul className='flex justify-around'>
				<li>
					<WifiLogo />
				</li>
				<li>
					<Signal />
				</li>
				<li>
					<Battery />
				</li>
				</ul>
			</div>
			{/*=============*/}
			<div className='flex justify-end my-4 pr-4'>
				<SwitchBtn />
			</div>
			<SearchBox />
			<div className='flex flex-col md:flex-row'>
				{products.map((item)=>{
					return <div className='basis-1/2 md:basis-1/3' key={item.id}>
						<Categories title={item.title} id={item.id} img={item.img}/>
					</div>
				})}
			</div>
		</div>
	);
};

export default FoodTemplate;
